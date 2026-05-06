import { motion } from "motion/react";
import NeuralCanvas from "./NeuralCanvas";

export default function About() {
  const letters = "DESIGN PHILOSOPHY".split("");

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square flex items-center justify-center glass rounded-3xl overflow-hidden border-white/5"
        >
          <NeuralCanvas />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-pulse" />
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neon-blue/70">Neural_Engine_Active</span>
          </div>
        </motion.div>

        <div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8"
          >
            <span className="font-mono text-neon-blue text-sm tracking-widest uppercase mb-4 block">Our DNA</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Bridging the gap between <span className="text-glow text-neon-blue">Human Intuition</span> and <span className="text-glow text-neon-purple">Machine Intelligence.</span>
            </h2>
          </motion.div>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
             className="text-slate-400 text-lg md:text-xl leading-relaxed font-light mb-10"
          >
            I believe that the future of digital products isn't just about pixels 
            and code—it's about empathy, context, and intelligent automation. 
            My process involves deep research followed by high-fidelity motion prototyping 
            to ensure every interaction feels alive.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-4">
             {[
               { val: "8+", label: "Years Experience" },
               { val: "50+", label: "Products Built" },
               { val: "AI-1st", label: "Philosophy" },
               { val: "∞", label: "Creativity" },
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 + i * 0.1 }}
                 viewport={{ once: true }}
                 className="glass p-4 rounded-xl border-white/5"
               >
                  <div className="text-2xl font-display font-bold text-white">{stat.val}</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
