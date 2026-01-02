import projects from "../data/projects";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#050505] text-white py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-12"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-[#c084fc] uppercase mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Featured <span className="text-[#d8b4fe]">Projects</span>
          </h2>
          <p className="text-gray-400 italic max-w-2xl">
            Turning ideas into elegant, functional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{ y: -12 }}
              className="group bg-[#121212] rounded-2xl overflow-hidden border border-white/5 hover:border-[#B76E79]/40 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(183,110,121,0.3)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#6A3742] hover:text-black transition-colors"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#d8b4fe] transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-mono text-[#c084fc] bg-[#c084fc]/10 px-3 py-1 rounded-md">
                    {project.tech}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
