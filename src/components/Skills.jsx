import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiJquery,
  SiMui,
  SiFramer,
  SiPostman,
  SiPostgresql,
  SiCanva,
  SiFigma,
  SiPython,
  SiAuth0,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 />, label: "HTML", color: "#E34F26" },
  { icon: <FaCss3Alt />, label: "CSS", color: "#1572B6" },
  { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#ffffff" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#339933" },
  { icon: <SiExpress />, label: "Express.js", color: "#ffffff" },
  { icon: <SiMysql />, label: "MySQL", color: "#00758F" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38B2AC" },
  { icon: <FaBootstrap />, label: "Bootstrap", color: "#7952B3" },
  { icon: <SiJquery />, label: "jQuery", color: "#0769AD" },
  { icon: <SiMui />, label: "Material UI", color: "#007FFF" },
  { icon: <SiFramer />, label: "Framer Motion", color: "#0055FF" },
  { icon: <SiPostman />, label: "Postman", color: "#FF6C37" },
  { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
  { icon: <SiCanva />, label: "Canva", color: "#00C4CC" },
  { icon: <SiFigma />, label: "Figma", color: "#F24E1E" },
  { icon: <SiAuth0 />, label: "OAuth 2.0", color: "#EB5424" },
  { icon: <SiPython />, label: "Python", color: "#3776AB" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#050505] text-white py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Technical <span className="text-[#d8b4fe]">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <div
                className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ color: s.color }}
              >
                {s.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
