import { motion, useScroll, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "AI Lab", href: "#ailab" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4" : "py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
                borderRadius: ["20%", "50%", "20%"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center font-bold text-black shadow-[0_0_20px_rgba(0,242,255,0.4)]"
            >
              CB
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tighter leading-none">CB</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-neon-blue opacity-70">Creative Studio</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-neon-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-neon-blue transition-all">
              Resume
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        className="fixed inset-0 z-[60] glass bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <button 
          className="absolute top-8 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display font-bold hover:text-neon-blue"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-6 mt-8">
          <Github className="w-6 h-6 text-slate-400" />
          <Linkedin className="w-6 h-6 text-slate-400" />
          <Mail className="w-6 h-6 text-slate-400" />
        </div>
      </motion.div>
    </>
  );
}
