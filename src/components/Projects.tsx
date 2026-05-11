import { motion } from "motion/react";

const projects = [
  {
    title: "Tea Enterprise",
    category: "WEB DESIGN / UX / USER INTERFACE",
    description: "An immersive e-commerce experience crafted to elevate the art of tea through cinematic storytelling and a refined, high-end interface. This project streamlines the digital journey from leaf to cup, balancing sophisticated aesthetics with seamless, conversion-focused user flows.",
    img: "http://cbcreativestudio.in/images/portfolio/chandan.jpg",
    color: "from-amber-600/20 to-black"
  },
  {
    title: "CHFC Organization",
    category: "WEB DESIGN / USER INTERFACE",
    description: "A structured and high-performance digital platform designed to establish professional authority through clean layouts and intuitive navigation. The interface focuses on clarity and strategic content hierarchy to foster trust and streamline information access for stakeholders.",
    img: "http://cbcreativestudio.in/images/portfolio/chfc.jpg",
    color: "from-blue-600/20 to-black"
  },
  {
    title: "BRING THE LORD BACK",
    category: "WEB DESIGN / UX / USER INTERFACE",
    description: "A visually powerful digital narrative designed to evoke a sense of heritage and grandeur through an atmospheric, \"royal\" aesthetic. The interface prioritizes immersive storytelling and premium interactions to create a sophisticated, culturally resonant user experience.",
    img: "http://cbcreativestudio.in/images/portfolio/bringthe-lord.jpg",
    color: "from-red-600/20 to-black"
  },
  {
    title: "Real Estate Agent",
    category: "WEB DESIGN / UX / USER INTERFACE",
    description: "A premium property showcase designed to blend high-end visual storytelling with a seamless, conversion-driven search experience. The interface features sophisticated layouts and intuitive filters to guide users effortlessly toward their next luxury investment.",
    img: "http://cbcreativestudio.in/images/portfolio/thepropertyshop.jpg",
    color: "from-emerald-600/20 to-black"
  },
  {
    title: "Design for People",
    category: "WEB DESIGN / UX / USER INTERFACE",
    description: "A minimalist digital showcase that emphasizes structural elegance and spatial harmony through a clean, sophisticated layout. The platform prioritizes high-impact visuals and intuitive navigation to mirror the firm’s commitment to human-centric architectural design.",
    img: "http://cbcreativestudio.in/images/portfolio/rockpile.jpg",
    color: "from-indigo-600/20 to-black"
  },
  {
    title: "Beauty Care",
    category: "Branding / Logo Design / Flyer / Print",
    description: "A cohesive visual identity and print campaign designed to radiate elegance and modern sophistication within the wellness space. This project focuses on high-quality typography and a refined color palette to create a premium, tactile experience across all physical touchpoints.",
    img: "http://cbcreativestudio.in/images/portfolio/binita.jpg",
    color: "from-pink-600/20 to-black"
  },
  {
    title: "Consulting & Software",
    category: "WEB DESIGN / UX / USER INTERFACE",
    description: "A strategic digital ecosystem designed to simplify complex technical solutions through a clean, authoritative interface and intuitive user journeys. The platform balances high-performance functionality with a sophisticated visual language to establish market leadership and drive professional engagement.",
    img: "http://cbcreativestudio.in/images/portfolio/valuedge.jpg",
    color: "from-sky-600/20 to-black"
  },
  {
    title: "Pet Sitters",
    category: "WEB DESIGN / UX / UI / Logo",
    description: "A charming and trustworthy digital platform that combines a friendly brand identity with a seamless, user-centric booking experience. The interface focuses on building community confidence through intuitive navigation and a warm, sophisticated visual language tailored for pet owners.",
    img: "http://cbcreativestudio.in/images/portfolio/pet-sitters.jpg",
    color: "from-orange-600/20 to-black"
  },
  {
    title: "Design UX UI",
    category: "WEB DESIGN / UX / USER INTERFACE",
    description: "A comprehensive exploration of user-centered methodology, showcasing the balance between strategic wireframing and high-fidelity visual execution. This project highlights a commitment to solving complex digital challenges through clean aesthetics, intuitive workflows, and a polished, professional finish.",
    img: "http://cbcreativestudio.in/images/portfolio/designuxui.jpg",
    color: "from-violet-600/20 to-black"
  },
  {
    title: "101 eCommerce",
    category: "WEB DESIGN / UX / UI / Logo",
    description: "A bold visual identity system featuring a modern logo and high-impact print materials designed to bridge the gap between digital and physical commerce. The project emphasizes a clean, versatile aesthetic that ensures brand consistency across professional visiting cards and intuitive online interfaces.",
    img: "http://cbcreativestudio.in/images/portfolio/101ecommerce.jpg",
    color: "from-cyan-600/20 to-black"
  },
  {
    title: "Timber Exchange",
    category: "WEB DESIGN / UX / UI / Logo",
    description: "A robust brand identity and professional print suite designed to reflect the strength and organic texture of the timber industry. This project blends a modern, geometric logo with high-quality tactile layouts to create a credible and sophisticated presence across both digital and physical platforms.",
    img: "http://cbcreativestudio.in/images/portfolio/timberxe.jpg",
    color: "from-stone-600/20 to-black"
  },
  {
    title: "Architecture Visualization",
    category: "WEB DESIGN / USER INTERFACE",
    description: "A high-end digital gallery designed to showcase photorealistic environments through a cinematic, glassmorphic interface. The platform prioritizes minimalist navigation and expansive layouts to allow complex 3D renders to take center stage with a sophisticated, professional finish.",
    img: "http://cbcreativestudio.in/images/portfolio/3d-architecture-visualization.jpg",
    color: "from-teal-600/20 to-black"
  },
  {
    title: "Newsletter Magazine",
    category: "Graphic Design / Print",
    description: "A sophisticated, multi-channel editorial layout featuring a dynamic grid system and high-end typography designed for both global digital distribution and premium physical print. This project harmonizes complex content structures with a clean, modern aesthetic to deliver a seamless reading experience across international markets.",
    img: "http://cbcreativestudio.in/images/portfolio/newsletter-coverpage.jpg",
    color: "from-rose-600/20 to-black"
  },
  {
    title: "Go Global",
    category: "Branding / Logo Design",
    description: "A minimalist and forward-thinking visual identity crafted to embody the spirit of international expansion through a clean, versatile logo system. The project extends into a professional print suite, featuring high-end visiting cards that balance modern typography with a sophisticated, globally resonant aesthetic.",
    img: "http://cbcreativestudio.in/images/portfolio/goglobal.jpg",
    color: "from-yellow-600/20 to-black"
  },
  {
    title: "Training and QA",
    category: "Branding / Logo / UI / Web",
    description: "A crisp and authoritative brand system designed to communicate precision and professional excellence through a modern logo and high-impact print collateral. This project bridges technical expertise with a clean, structured interface to ensure a seamless and trustworthy experience for both web and physical touchpoints.",
    img: "http://cbcreativestudio.in/images/portfolio/unicode.jpg",
    color: "from-green-600/20 to-black"
  },
  {
    title: "Beauty Care Flyer",
    category: "Branding / Print / Flyer",
    description: "A premium visual identity and promotional suite crafted to reflect elegance and modern wellness through a refined logo and high-end print design. The project utilizes a sophisticated color palette and balanced layouts to create a tactile, luxury feel for physical marketing collateral.",
    img: "http://cbcreativestudio.in/images/portfolio/binita-flyer.jpg",
    color: "from-fuchsia-600/20 to-black"
  },
  {
    title: "Software Development",
    category: "Branding / Logo / UI / Web",
    description: "Crafted a strategic brand identity and a high-end responsive web interface. From logo conception to UI execution, the project focused on scalability, cinematic design, and professional credibility.",
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
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 hover:text-neon-blue transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
