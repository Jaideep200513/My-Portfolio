"use client";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="bg-[var(--background)] dark:bg-[var(--background-dark)] text-[var(--foreground)] dark:text-[var(--foreground-dark)] font-sans transition-all duration-300">
      <Navbar />

      {/* 🏠 Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          Hi, I'm Jaideep 👋
        </h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed opacity-80">
          Software Engineer | Backend & Cloud Enthusiast
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--accent-dark)] dark:text-[var(--accent-light)] px-6 py-3 rounded-xl hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--accent-dark)] dark:text-[var(--accent-light)] px-6 py-3 rounded-xl hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--accent-dark)] dark:text-[var(--accent-light)] px-6 py-3 rounded-xl hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* 🙋 About Section */}
      <section
        id="about"
        className="px-6 py-20 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/20"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center opacity-90">
          <p>
            Computer Science undergraduate with strong problem-solving skills and
            a solid foundation in core CS concepts. Passionate about building
            scalable backend systems and cloud-based applications, with hands-on
            experience in developing and deploying real-world projects.
          </p>
        </div>
      </section>

            {/* ⚙️ Skills Section */}
      <section
        id="skills"
        className="min-h-[80vh] px-6 py-20 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/20"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Languages",
              items: ["Java", "C++", "Python", "SQL"],
            },
            {
              title: "Core Competencies",
              items: [
                "Data Structures & Algorithms",
                "OOP",
                "Operating Systems",
                "Computer Networks",
                "DBMS",
              ],
            },
            {
              title: "Database",
              items: ["MySQL", "MongoDB"],
            },
            {
              title: "Cloud & DevOps",
              items: ["AWS", "Git & GitHub", "Linux"],
            },
            {
              title: "Web Development",
              items: [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "REST APIs",
              ],
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--accent-light)]/30"
            >
              <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-4">
                {s.title}
              </h3>
              <ul className="space-y-2 opacity-80">
                {s.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 💼 Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Expense Splitter",
              desc:
                "Designed and developed a full-stack Flask + SQLite expense management application with a responsive UI. Hosted a live demo on Render.",
              link: "https://github.com/Jaideep200513/smart-expense-splitter",
              demo: "https://smart-expense-splitter-hzkh.onrender.com/",
            },
            {
              title: "Dynamic Risk Assessment Tool",
              desc:
                "Developed a web tool with a Flask backend and responsive HTML/CSS/JavaScript frontend to assess project risks and predict bottlenecks. Hosted live demo on Hugging Face Spaces.",
              link: "https://github.com/Jaideep200513/dynamic-risk-tool",
              demo: "https://huggingface.co/spaces/Jaideep200513/dynamic-risk-tool?logs=container",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--accent-light)]/30"
            >
              <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-3">
                {p.title}
              </h3>
              <p className="opacity-80 mb-4">{p.desc}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] font-medium hover:underline"
                >
                  View Project →
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] font-medium hover:underline"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎓 Certifications Section */}
      <section id="certifications" className="min-h-screen px-6 py-20 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/20">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "AWS Academy Graduate – Cloud Architecting",
              issuer: "AWS Academy via Credly",
              date: "2025",
              link: "https://www.credly.com/badges/3c8d9bde-26ee-4477-90c6-c69523018136/public_url",
            },
            {
              title: "CS50: Introduction to Computer Science",
              issuer: "Harvard University via edX",
              date: "2025",
              link: "https://certificates.cs50.io/92eba02a-710b-4f68-8780-0e8b74d5193a.pdf?size=letter",
            },
            {
              title: "MATLAB Fundamentals",
              issuer: "MathWorks MATLAB Academy",
              date: "2024",
              link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=2c65b8cb-ad3f-4562-8620-7b1769f91e2b&",
            },
          ].map((cert, i) => (
            <div
              key={i}
              className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-[var(--accent-light)]/30"
            >
              <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-2">
                {cert.title}
              </h3>
              <p className="opacity-70 mb-1">{cert.issuer}</p>
              <p className="opacity-60 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] font-medium hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section
        id="contact"
        className="scroll-mt-28 min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--primary-light)]/30 dark:bg-[var(--primary-dark)]/30"
      >
        <h2 className="text-4xl font-bold mb-6 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          Get in Touch
        </h2>
        <p className="text-lg opacity-80 mb-6 max-w-xl">
          Let's connect and discuss ideas, collaborations, or opportunities.
        </p>

        <div className="space-y-4 opacity-90">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:jaideep.gubbala13@gmail.com"
              className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] hover:underline"
            >
              jaideep.gubbala13@gmail.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jaideep-gubbala-7460a43b1/"
              target="_blank"
              className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            🐙 GitHub:{" "}
            <a
              href="https://github.com/Jaideep200513"
              target="_blank"
              className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] hover:underline"
            >
              github.com/Jaideep200513
            </a>
          </p>
          <p>📍 Location: Hyderabad, India</p>
        </div>
      </section>

      <footer className="text-center py-6 opacity-70 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/30">
        © {new Date().getFullYear()} Jaideep Gubbala. Built with ☕ + Next.js
      </footer>
    </div>
  );
}