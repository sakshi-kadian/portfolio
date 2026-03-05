import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#050505] text-white py-24 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Architectural Grid (Subtle) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#c084fc 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: Image (5 cols) - Increased slightly back to match text height better */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative group max-w-[400px] mx-auto lg:mx-0">
            <div className="absolute -inset-4 border border-white/5 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="absolute -inset-2 border border-[#c084fc]/20 rounded-3xl rotate-2 group-hover:rotate-0 transition-transform duration-500" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl z-10">
              <img
                src="/images/avatar.png"
                alt="Sakshi"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-xl z-20 hidden md:block"
            >
              <div className="text-[9px] text-[#c084fc] font-mono mb-1 uppercase tracking-widest">Compiler Opt</div>
              <div className="text-[11px] font-bold text-gray-200 tracking-tight">XLA / CUDA Kernels</div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: Text (7 cols) - Reduced font sizes for compact look */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="text-[11px] font-medium tracking-[0.3em] text-[#c084fc] uppercase mb-4 block">
              Architectural Ethos
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 tracking-tighter leading-[1.1]">
              Engineering <span className="text-[#d8b4fe]">trust.</span> <br className="hidden sm:block" />
              Architecting <span className="text-[#d8b4fe] italic">intelligence.</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-base leading-relaxed max-w-2xl">
              <p>
                I'm <span className="text-white font-medium">Sakshi</span>, and I build AI systems from the ground up because trust in intelligence must be engineered, not assumed. From memory-safe distributed systems in Rust to geometric neural architectures in JAX, I work closest to the metal where the real decisions happen.
              </p>
              <p>
                My work lives at the intersection of low-level performance and high-level reasoning. Whether it's designing neuro-symbolic pipelines or optimizing distributed GPU dispatch, I'm drawn to the hard problems where math and systems collide.
              </p>
              <p className="text-sm text-gray-500 italic">
                I give my projects whimsical names, as if they're characters in a story. But underneath the names, every line of code is a deliberate architectural decision.
              </p>
            </div>

            {/* BENTO CARDS: Compact versions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c084fc]/30 transition-colors"
              >
                <div className="h-1.5 w-6 bg-[#c084fc] rounded-full mb-3" />
                <h4 className="text-white font-semibold mb-1.5 text-sm uppercase tracking-wider">Systems Architecture</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Building high-throughput, distributed backbones that power modern AI at scale.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d8b4fe]/30 transition-colors"
              >
                <div className="h-1.5 w-6 bg-[#d8b4fe] rounded-full mb-3" />
                <h4 className="text-white font-semibold mb-1.5 text-sm uppercase tracking-wider">Geometric Learning</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Exploring E(3)-equivariant networks and physics-informed models for research.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
