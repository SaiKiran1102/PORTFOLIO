import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Hotel & Vehicle Management Apps",
    description:
      "Designed web apps using Flask + MongoDB with login, booking, and admin dashboards to manage real-time data and user flow.",
    techStack: ["Flask", "MongoDB", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-repo/hotel-vehicle-management",
  },
  {
    title: "Character-Level RNN for Text Generation",
    description:
      "Built a custom RNN in TensorFlow trained on news headlines to generate realistic, context-aware text.",
    techStack: ["TensorFlow", "Python", "RNN", "NLP"],
    link: "https://github.com/your-repo/rnn-text-generation",
  },
  {
    title: "GRU Model for MNIST Classification",
    description:
      "Implemented a GRU model from scratch to classify handwritten digits with competitive accuracy and explored sequence modeling techniques.",
    techStack: ["Python", "TensorFlow", "GRU", "MNIST"],
    link: "https://github.com/your-repo/gru-mnist",
  },
  {
    title: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    techStack: ["React", "Node.js", "AWS", "Docker"],
    link: "#",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    techStack: ["Python", "TensorFlow", "D3.js", "Flask"],
    link: "#",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    techStack: ["Socket.IO", "Express", "React", "Redis"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, key) => (
              <div
                key={key}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};