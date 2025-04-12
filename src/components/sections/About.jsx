import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

const content = {
  mlTools: ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
  programmingSkills: ["Python", "Java", "C", "Flask", "MongoDB", "MySQL", "CSS", "HTML", "JavaScript", "PHP"],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "ANITS",
    duration: "2022–2026",
    cgpa: "8.8/10",
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures",
      "AI",
      "Cloud Computing",
      "Big Data Analytics"
    ]
  },
  projects: [
    {
      title: "Character-Level RNN for Text Generation",
      description:
        "Built a custom RNN in TensorFlow trained on news headlines to generate realistic, context-aware text."
    },
    {
      title: "GRU Model for MNIST Classification",
      description:
        "Implemented a GRU model from scratch to classify handwritten digits with competitive accuracy and explored sequence modeling techniques."
    },
    {
      title: "Hotel & Vehicle Management Apps",
      description:
        "Designed web apps using Flask + MongoDB with login, booking, and admin dashboards to manage real-time data and user flow."
    }
  ],
  researchInterests: [
    "Deep Learning architectures and optimization strategies",
    "Natural Language Processing (NLP) for human-like AI systems",
    "Computer Vision using CNNs and Transformers",
    "Explainable AI (XAI) and interpretability in models",
    "Reinforcement Learning and decision-making agents",
    "AutoML and scalable model deployment"
  ]
};

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="text-center mb-8">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              📄 Download My Resume
            </a>
          </div>

          <motion.div
            className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-6">
              I'm an AI and Machine Learning enthusiast currently pursuing a
              B.Tech in Computer Science. I specialize in building intelligent
              systems using deep learning, NLP, and predictive modeling. My work
              focuses on combining strong theoretical foundations with practical
              implementation to solve real-world problems through AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> ML & Data Tools </h3>
                <div className="flex flex-wrap gap-2">
                  {content.mlTools.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 \
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programming & Tools </h3>
                <div className="flex flex-wrap gap-2">
                  {content.programmingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 \
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>{content.education.degree}</strong> – {content.education.institute} ({content.education.duration})
                </li>
                <li>
                  Relevant Courses: {content.education.courses.join(", ")}
                </li>
                <li>
                  CGPA: {content.education.cgpa}
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4"> 🧪 Projects & Research </h3>
              <div className="space-y-4 text-gray-300">
                {content.projects.map((project, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold">{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4"> 🔬 Research Interests </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {content.researchInterests.map((interest, i) => (
                <li key={i}>{interest}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
