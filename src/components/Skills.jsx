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
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 style={{ color: "#E34F26" }} />, label: "HTML" },
  { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, label: "CSS" },
  { icon: <SiJavascript style={{ color: "#F7DF1E" }} />, label: "JavaScript" },
  { icon: <SiTypescript style={{ color: "#3178C6" }} />, label: "TypeScript" },
  { icon: <FaReact style={{ color: "#61DAFB" }} />, label: "React" },
  { icon: <SiNextdotjs style={{ color: "#000000" }} />, label: "Next.js" },
  { icon: <FaNodeJs style={{ color: "#339933" }} />, label: "Node.js" },
  { icon: <SiExpress style={{ color: "#FFFFFF" }} />, label: "Express.js" },
  { icon: <SiMysql style={{ color: "#00758F" }} />, label: "MySQL" },
  { icon: <SiMongodb style={{ color: "#47A248" }} />, label: "MongoDB" },
  { icon: <SiTailwindcss style={{ color: "#38B2AC" }} />, label: "Tailwind" },
  { icon: <FaBootstrap style={{ color: "#7952B3" }} />, label: "Bootstrap" },
  { icon: <SiJquery style={{ color: "#0769AD" }} />, label: "jQuery" }, // ✅ Fixed
  { icon: <SiMui style={{ color: "#007FFF" }} />, label: "Material UI" },
  { icon: <SiFramer style={{ color: "#0055FF" }} />, label: "Framer Motion" },
  { icon: <SiPostman style={{ color: "#FF6C37" }} />, label: "Postman" },
  { icon: <SiPostgresql style={{ color: "#336791" }} />, label: "PostgreSQL" },
  { icon: <SiCanva style={{ color: "#00C4CC" }} />, label: "Canva" },
  { icon: <SiFigma style={{ color: "#F24E1E" }} />, label: "Figma" },
  { icon: <SiPython style={{ color: "#3776AB" }} />, label: "Python" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-6 sm:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-10 text-[#8C5D5D]">
          MY SKILLS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#1f1f1f] p-5 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{s.icon}</div>
              <span className="text-sm mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
