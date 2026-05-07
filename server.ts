
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact form API route
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real production app, you'd use a service like SendGrid, Mailgun, or Nodemailer
    console.log(`Sending email to cbhavsar1678@gmail.com from ${name} (${email})`);
    console.log(`Message: ${message}`);

    // Since we don't have SMTP credentials in this environment, 
    // we simulate a successful send.
    res.json({ success: true, message: "Signal received by CB Creative Studio." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
