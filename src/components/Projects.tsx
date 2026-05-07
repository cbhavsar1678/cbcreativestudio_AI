import { motion } from "motion/react";

const projects = [
  {
    title: "Tea Enterprise",
    category: "WEB DESIGN / UX / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/chandan.jpg",
    color: "from-amber-600/20 to-black"
  },
  {
    title: "CHFC Organization",
    category: "WEB DESIGN / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/chfc.jpg",
    color: "from-blue-600/20 to-black"
  },
  {
    title: "BRING THE LORD BACK",
    category: "WEB DESIGN / UX / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/bringthe-lord.jpg",
    color: "from-red-600/20 to-black"
  },
  {
    title: "Real Estate Agent",
    category: "WEB DESIGN / UX / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/thepropertyshop.jpg",
    color: "from-emerald-600/20 to-black"
  },
  {
    title: "Design for People",
    category: "WEB DESIGN / UX / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/rockpile.jpg",
    color: "from-indigo-600/20 to-black"
  },
  {
    title: "Beauty Care",
    category: "Branding / Logo Design / Flyer / Print",
    img: "http://cbcreativestudio.in/images/portfolio/binita.jpg",
    color: "from-pink-600/20 to-black"
  },
  {
    title: "Consulting & Software",
    category: "WEB DESIGN / UX / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/valuedge.jpg",
    color: "from-sky-600/20 to-black"
  },
  {
    title: "Pet Sitters",
    category: "WEB DESIGN / UX / UI / Logo",
    img: "http://cbcreativestudio.in/images/portfolio/pet-sitters.jpg",
    color: "from-orange-600/20 to-black"
  },
  {
    title: "Design UX UI",
    category: "WEB DESIGN / UX / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/designuxui.jpg",
    color: "from-violet-600/20 to-black"
  },
  {
    title: "101 eCommerce",
    category: "WEB DESIGN / UX / UI / Logo",
    img: "http://cbcreativestudio.in/images/portfolio/101ecommerce.jpg",
    color: "from-cyan-600/20 to-black"
  },
  {
    title: "Timber Exchange",
    category: "WEB DESIGN / UX / UI / Logo",
    img: "http://cbcreativestudio.in/images/portfolio/timberxe.jpg",
    color: "from-stone-600/20 to-black"
  },
  {
    title: "Architecture Visualization",
    category: "WEB DESIGN / USER INTERFACE",
    img: "http://cbcreativestudio.in/images/portfolio/3d-architecture-visualization.jpg",
    color: "from-teal-600/20 to-black"
  },
  {
    title: "Newsletter Magazine",
    category: "Graphic Design / Print",
    img: "http://cbcreativestudio.in/images/portfolio/newsletter-coverpage.jpg",
    color: "from-rose-600/20 to-black"
  },
  {
    title: "Go Global",
    category: "Branding / Logo Design",
    img: "http://cbcreativestudio.in/images/portfolio/goglobal.jpg",
    color: "from-yellow-600/20 to-black"
  },
  {
    title: "Training and QA",
    category: "Branding / Logo / UI / Web",
    img: "http://cbcreativestudio.in/images/portfolio/unicode.jpg",
    color: "from-green-600/20 to-black"
  },
  {
    title: "Beauty Care Flyer",
    category: "Branding / Print / Flyer",
    img: "http://cbcreativestudio.in/images/portfolio/binita-flyer.jpg",
    color: "from-fuchsia-600/20 to-black"
  },
  {
    title: "Software Development",
    category: "Branding / Logo / UI / Web",
    img: "http://cbcreativestudio.in/images/portfolio/citrus.jpg",
    color: "from-lime-600/20 to-black"
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
