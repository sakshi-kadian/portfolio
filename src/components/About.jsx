import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#050505] text-white py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image/Avatar Area */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d8b4fe] to-[#c084fc] rounded-2xl rotate-6 opacity-20 blur-lg"></div>
            <img
              src="/images/avatar.png"
              alt="Sakshi"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10 z-10"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="block text-sm font-medium tracking-[0.2em] text-[#c084fc] uppercase mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-4xl sm:text-5xl font-display font-bold mb-6"
          >
            Crafting code with <span className="text-[#d8b4fe]">creativity.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-gray-400 leading-relaxed mb-6 text-base"
          >
            I'm <span className="text-white font-medium">Sakshi</span> — a developer who blends creativity with logic to craft clean, intuitive digital experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-gray-400 leading-relaxed mb-6 text-base"
          >
            I specialize in building scalable web applications and designing user interfaces that are both functional and visually stunning. I love transforming ideas into interactive, user-friendly interfaces and exploring how technology can empower well-being, storytelling, and innovation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-gray-400 leading-relaxed mb-8 text-base"
          >
            My journey involves a constant exploration of new technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-[#d8b4fe] font-semibold mb-2">Currently exploring</h3>
            <p className="text-sm text-gray-300">
              Emotion-aware AI, design systems, and human-centered design for impactful and mindful digital experiences.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
