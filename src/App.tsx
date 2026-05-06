/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import AILab from "./components/AILab";
import Contact from "./components/Contact";
import BackgroundEffect from "./components/BackgroundEffect";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black font-sans overflow-x-hidden selection:bg-neon-blue selection:text-black">
      <CustomCursor />
      <BackgroundEffect />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <AILab />
        <Contact />
      </main>

      {/* Global Ambient Glows */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}

