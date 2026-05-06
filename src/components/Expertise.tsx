import { motion } from "motion/react";
import { Cpu, Layout, Code2, Database, Figma, GitBranch } from "lucide-react";

const expertiseData = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Design & Strategy",
    skills: ["Product Thinking", "UX Strategy", "User Research", "Interaction Design", "Design Systems"],
    color: "from-neon-blue/20 to-transparent"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Technical Implementation",
    skills: ["React (AI-Driven)", "HTML5 / CSS3", "Bootstrap & MUI", "JavaScript", ".NET & SQL"],
    color: "from-neon-purple/20 to-transparent"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI & Prompt Eng.",
    skills: ["Google AI Studio", "Gemini Ecosystem", "NotebookLLM", "Rapid AI Prototyping", "Workflow Automation"],
    color: "from-cyan-400/20 to-transparent"
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Lifecycle & Tools",
    skills: ["Figma / Sketch", "Azure DevOps", "SourceTree (Git)", "HubSpot Dev Tools", "Adobe XD"],
    color: "from-white/10 to-transparent"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-neon-blue text-sm tracking-widest uppercase">Professional Pillars</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">Core Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`glass p-8 rounded-2xl relative overflow-hidden group transition-all duration-500 hover:border-neon-blue/50 h-full`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="text-neon-blue mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:border-neon-blue/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, i) => (
                  <li key={i} className="text-slate-400 font-mono text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neon-blue/50 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
