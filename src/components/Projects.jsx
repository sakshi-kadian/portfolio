import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-semibold mb-10 text-[#8C5D5D]">MY PROJECTS</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-5 rounded-xl w-80 text-white shadow-md hover:scale-105 transition-transform flex flex-col h-[400px]"
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="rounded mb-3 h-44 w-full object-cover"
                />
              </a>
              <h3 className="text-base font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-300 my-2 flex-grow leading-snug">
                {project.desc}
              </p>
              <p className="text-xs text-gray-400 mb-4">Tech: {project.tech}</p>
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#8C5D5D] px-4 py-1 rounded hover:bg-[#704747] transition"
                >
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
