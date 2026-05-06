import { motion } from "motion/react";

const projects = [
  {
    title: "NeuroFlow CRM",
    client: "AI Startups",
    category: "Product Design • AI",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200",
    color: "from-blue-600/20 to-black"
  },
  {
    title: "HoloOS Interface",
    client: "Design System",
    category: "Interaction Design",
    img: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=1200",
    color: "from-purple-600/20 to-black"
  },
  {
    title: "EcoGenesis Pro",
    client: "Web3 Platform",
    category: "Full-stack Evolution",
    img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
    color: "from-emerald-600/20 to-black"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-neon-blue text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">Selected Projects</h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
          >
            <div className={`lg:col-span-7 overflow-hidden rounded-3xl border border-white/10 glass order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="aspect-video relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity`} />
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover saturate-[0.8] group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            </div>

            <div className={`lg:col-span-5 order-2 ${index % 2 === 0 ? 'lg:order-2 text-left' : 'lg:order-1 text-right lg:pr-12'}`}>
              <div className="flex items-center gap-4 mb-4 font-mono text-xs text-neon-blue uppercase tracking-widest justify-start group-even:justify-end">
                <span className="h-px w-8 bg-neon-blue opacity-50" />
                {project.category}
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:text-neon-blue transition-colors cursor-pointer tracking-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Exploring the boundaries of physical and digital interaction through 
                immersive prototyping and brand-first storytelling.
              </p>
              <button className="px-6 py-3 glass rounded-full hover:bg-white text-black transition-all hover:border-white font-bold group-hover:scale-105">
                View Case Study
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
