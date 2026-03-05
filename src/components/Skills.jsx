import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaJava, FaNetworkWired, FaProjectDiagram, FaDatabase, FaServer
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMysql, SiMongodb,
  SiTailwindcss, SiJquery, SiMui, SiFramer, SiPostman, SiPostgresql,
  SiCanva, SiFigma, SiPython, SiAuth0, SiPytorch, SiTensorflow,
  SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiNeo4J, SiFastapi, SiDocker, SiHuggingface,
  SiThreedotjs, SiCplusplus, SiC, SiR,
  SiRust, SiKubernetes, SiNvidia, SiGooglecloud, SiOpenai, SiGoogle,
  SiOnnx, SiK6, SiSocketdotio, SiSurrealdb,
  SiPrometheus, SiWeightsandbiases,
  SiRedis, SiGraphql, SiVercel
} from "react-icons/si";
import { TbAtom2 } from "react-icons/tb";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Artificial Intelligence & Systems Engineering",
    skills: [
      { icon: <SiGoogle />, label: "JAX / Haiku / Optax", color: "#5475FF" },
      { icon: <SiNvidia />, label: "CUDA", color: "#76B900" },
      { icon: <SiGooglecloud />, label: "XLA", color: "#4285F4" },
      { icon: <SiRust />, label: "Tokio (Async Rust)", color: "#CE412B" },
      { icon: <FaNetworkWired />, label: "Distributed Systems", color: "#00D1FF" },
      { icon: <FaServer />, label: "gRPC / Protobuf", color: "#2496ED" },
      { icon: <SiDocker />, label: "Docker", color: "#2496ED" },
      { icon: <SiKubernetes />, label: "Kubernetes", color: "#326CE5" },
      { icon: <SiK6 />, label: "k6 (Load Testing)", color: "#7D64FF" },
      { icon: <SiFastapi />, label: "FastAPI", color: "#009688" },
      { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
      { icon: <SiPrometheus />, label: "Prometheus / Grafana", color: "#E6522C" },
    ],
  },
  {
    title: "Machine Learning & Neural Architectures",
    skills: [
      { icon: <SiPytorch />, label: "PyTorch (PyG)", color: "#EE4C2C" },
      { icon: <SiTensorflow />, label: "TensorFlow", color: "#FF6F00" },
      { icon: <SiOnnx />, label: "ONNX", color: "#005CED" },
      { icon: <SiHuggingface />, label: "Transformers", color: "#FFD21E" },
      { icon: <SiOpenai />, label: "LLMs / LangChain", color: "#74aa9c" },
      { icon: <SiNeo4J />, label: "Neo4J (Graph)", color: "#008CC1" },
      { icon: <FaDatabase />, label: "ChromaDB (Vector)", color: "#00D1FF" },
      { icon: <SiSurrealdb />, label: "SurrealDB", color: "#FF00AD" },
      { icon: <SiScikitlearn />, label: "scikit-learn", color: "#F7931E" },
      { icon: <SiPandas />, label: "Pandas", color: "#150458" },
      { icon: <SiNumpy />, label: "NumPy", color: "#013243" },
      { icon: <FaProjectDiagram />, label: "NetworkX", color: "#E10098" },
      { icon: <TbAtom2 />, label: "RDKit", color: "#3838B8" },
      { icon: <SiJupyter />, label: "Jupyter", color: "#F37626" },
      { icon: <SiWeightsandbiases />, label: "Weights & Biases", color: "#FFBE00" },
    ],
  },
  {
    title: "Core Programming",
    skills: [
      { icon: <SiRust />, label: "Rust", color: "#CE412B" },
      { icon: <SiPython />, label: "Python", color: "#3776AB" },
      { icon: <SiCplusplus />, label: "C++", color: "#00599C" },
      { icon: <SiC />, label: "C", color: "#A8B9CC" },
      { icon: <FaJava />, label: "Java", color: "#007396" },
      { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
      { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
      { icon: <SiR />, label: "R", color: "#276DC3" },
      { icon: <SiMysql />, label: "SQL", color: "#00758F" },
    ],
  },
  {
    title: "End-to-End Product & Design",
    skills: [
      { icon: <SiNextdotjs />, label: "Next.js", color: "#ffffff" },
      { icon: <FaReact />, label: "React (Fiber/WebGL)", color: "#61DAFB" },
      { icon: <SiSocketdotio />, label: "WebSockets", color: "#ffffff" },
      { icon: <SiThreedotjs />, label: "Three.js", color: "#ffffff" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "#38B2AC" },
      { icon: <SiFigma />, label: "Figma", color: "#F24E1E" },
      { icon: <SiCanva />, label: "Canva", color: "#00C4CC" },
      { icon: <SiFramer />, label: "Framer Motion", color: "#0055FF" },
      { icon: <FaNodeJs />, label: "Node.js", color: "#339933" },
      { icon: <SiExpress />, label: "Express.js", color: "#ffffff" },
      { icon: <SiAuth0 />, label: "OAuth 2.0 / Auth0", color: "#EB5424" },
      { icon: <SiMysql />, label: "MySQL", color: "#00758F" },
      { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
      { icon: <SiMui />, label: "Material UI", color: "#007FFF" },
      { icon: <SiJquery />, label: "jQuery", color: "#0769AD" },
      { icon: <FaBootstrap />, label: "Bootstrap", color: "#7952B3" },
      { icon: <FaHtml5 />, label: "HTML5", color: "#E34F26" },
      { icon: <FaCss3Alt />, label: "CSS3", color: "#1572B6" },
      { icon: <SiPostman />, label: "Postman", color: "#FF6C37" },
      { icon: <SiRedis />, label: "Redis", color: "#DC382D" },
      { icon: <SiGraphql />, label: "GraphQL", color: "#E10098" },
      { icon: <SiVercel />, label: "Vercel", color: "#ffffff" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#050505] text-white py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-12"
        >
          <span className="block text-sm font-medium tracking-[0.2em] text-[#c084fc] uppercase mb-4">
            My Palette
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="text-[#d8b4fe]">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-24">
          {categories.map((cat, catIdx) => (
            <div key={catIdx}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-medium text-gray-200 mb-8 flex items-center gap-6"
              >
                <span className="h-px w-12 bg-[#c084fc]" />
                {cat.title}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {cat.skills.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -10,
                      backgroundColor: "rgba(192, 132, 252, 0.12)",
                      borderColor: "rgba(192, 132, 252, 0.4)",
                      boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02, duration: 0.5, ease: "easeOut" }}
                    className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500"
                  >
                    <div
                      className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-500"
                      style={{ color: s.color }}
                    >
                      {s.icon}
                    </div>
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center tracking-wide transition-colors">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
