const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1fr] gap-10 items-center">

        {/* Avatar */}
        <div className="flex justify-center md:justify-center relative">
          <img
            src="/images/avatar.png"
            alt="avatar"
            className="rounded-xl object-contain w-56 h-auto shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-5xl font-semibold mb-6 text-[#8C5D5D] text-center md:text-left">
            ABOUT ME
          </h2>
          <p className="text-base leading-relaxed text-[#E2E2E2] text-center md:text-left">
            I’m <span className="text-[#C78C8C] font-medium">Sakshi</span> — a developer who blends creativity with logic to craft clean, intuitive digital experiences.
            <br /><br />
            I love transforming ideas into <span className="italic text-[#A98D8D]">interactive, user-friendly interfaces</span> and exploring how technology can empower well-being, storytelling, and innovation.
            <br /><br />
            With a focus on <span className="text-[#C78C8C] font-medium">full-stack development</span> and <span className="text-[#C78C8C] font-medium">UI/UX design</span>, I aim to build digital tools that are thoughtful, accessible, and inspiring.
          </p>

          {/* Highlight Box */}
          <div className="mt-6 p-4 rounded-lg bg-[#1f1f1f] border border-[#2a2a2a] text-sm text-gray-300 max-w-m mx-auto md:mx-0">
            <p>
              <span className="font-semibold text-[#8C5D5D]">Currently exploring:</span> Emotion-aware AI, design systems, and human-centered design for impactful and mindful digital experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
