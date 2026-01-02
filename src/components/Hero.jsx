import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d8b4fe] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f0abfc] rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 z-10">
        <div className="space-y-8">
          {/* Main Heading - Slides DOWN from TOP */}
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-6xl sm:text-8xl md:text-9xl font-display font-light tracking-tight leading-[0.95]"
          >
            Hey, I'm{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="inline-block font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#f0abfc]"
            >
              Sakshi
            </motion.span>
            !
          </motion.h1>

          {/* Description - Each paragraph slides UP from BOTTOM */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-base sm:text-lg md:text-lg text-gray-400 max-w-3xl font-light leading-relaxed"
            >
              Passionate developer and designer transforming ideas into intelligent digital experiences, blending code and design to build systems that are both scalable and elegant.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-sm sm:text-base md:text-base text-gray-500 max-w-3xl font-light leading-relaxed"
            >
              From React and Next.js to Node.js and Python, I craft beautiful, performant, and interactive end-to-end solutions with a focus on seamless user experience and modern design.
            </motion.p>
          </div>

          {/* Subtle Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="h-[1px] bg-gradient-to-r from-[#d8b4fe] to-transparent"
          />
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
