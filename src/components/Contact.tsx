import { motion } from "motion/react";
import { useState } from "react";
import { Mail, ArrowRight, Github, Twitter, Linkedin, Instagram, ChevronUp, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[40px] p-12 md:p-24 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <span className="font-mono text-neon-blue text-sm tracking-widest uppercase mb-4 block">Let's Connect</span>
             <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-12">
               Let's Build the <br />
               <span className="text-glow text-neon-blue">Future Together.</span>
             </h2>
          </motion.div>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto py-12 glass rounded-3xl border-neon-blue/30 flex flex-col items-center gap-6"
            >
              <CheckCircle2 className="w-16 h-16 text-neon-blue" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Signal Received!</h3>
                <p className="text-slate-400">Your message has been transmitted through the creative ether.</p>
              </div>
              <button 
                onClick={() => setStatus("idle")}
                className="font-mono text-xs text-neon-blue uppercase tracking-widest border-b border-neon-blue/0 hover:border-neon-blue transition-all"
              >
                Send another signal
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4 mb-16">
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Neural Identity (Name)"
                className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors"
                disabled={status === "sending"}
              />
              <input 
                 type="email" 
                 required
                 value={formData.email}
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 placeholder="Communication Protocol (Email)"
                 className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors"
                 disabled={status === "sending"}
               />
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Encoded Message (Tell us about your project)"
                rows={4}
                className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                disabled={status === "sending"}
              />
              
              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neon-blue transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "sending" ? (
                  <>Transmitting... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Signal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-sm font-mono mt-2 uppercase tracking-wide">Signal interruption. Please retry.</p>
              )}
            </form>
          )}

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors font-mono text-sm uppercase tracking-widest group">
              <Github className="w-4 h-4 group-hover:scale-125 transition-transform" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors font-mono text-sm uppercase tracking-widest group">
              <Linkedin className="w-4 h-4 group-hover:scale-125 transition-transform" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors font-mono text-sm uppercase tracking-widest group">
              <Twitter className="w-4 h-4 group-hover:scale-125 transition-transform" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-neon-blue transition-colors font-mono text-sm uppercase tracking-widest group">
              <Instagram className="w-4 h-4 group-hover:scale-125 transition-transform" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest relative">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <span>© 2026 CB CREATIVE STUDIO • BUILT WITH GEMINI</span>
          <span className="hidden md:inline opacity-30">|</span>
          <span>DESIGNED FOR THE NEXT ERA OF HUMAN-AI INTERACTION</span>
        </div>
        
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="glass p-3 rounded-full hover:bg-neon-blue hover:text-black transition-all border-neon-blue/20 hover:border-neon-blue group"
        >
          <ChevronUp className="w-4 h-4 group-hover:animate-bounce" />
          <span className="sr-only">Scroll to top</span>
        </motion.button>
      </footer>
    </section>
  );
}
