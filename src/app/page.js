"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";
import ContactForm from "./components/ContactForm";

/* Floating card wrapper — lifts + deepens shadow on hover */
function FloatCard({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 40px -8px rgba(92,58,33,0.25), 0 8px 16px -4px rgba(92,58,33,0.15)",
        transition: { type: "spring", stiffness: 260, damping: 22 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[var(--background)] dark:bg-[var(--background-dark)] text-[var(--foreground)] dark:text-[var(--foreground-dark)] font-sans transition-all duration-300">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <AnimatedSection variant="fade-up" delay={0.15}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
            Hi, I'm Jaideep
          </h1>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.3}>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-[var(--foreground-secondary)]">
            Software Engineer | Backend &amp; Cloud Enthusiast
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.45}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--link)] dark:text-[var(--link)] px-6 py-3 rounded-xl hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--link)] dark:text-[var(--link)] px-6 py-3 rounded-xl hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--link)] dark:text-[var(--link)] px-6 py-3 rounded-xl hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 py-20 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/20"
      >
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl font-bold text-center mb-8 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
            About Me
          </h2>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={0.15}>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-center text-[var(--foreground-secondary)]">
            <p>
              Computer Science undergraduate with strong problem-solving skills and
              a solid foundation in core CS concepts. Passionate about building
              scalable backend systems and cloud-based applications, with hands-on
              experience in developing and deploying real-world projects.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-[80vh] px-6 py-20 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/20"
      >
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
            Skills
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            { title: "Languages", items: ["Java", "C++", "Python", "SQL"] },
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
            { title: "Database", items: ["MySQL", "MongoDB"] },
            { title: "Cloud & DevOps", items: ["AWS", "Git & GitHub", "Linux"] },
            {
              title: "Web Development",
              items: ["HTML", "CSS", "JavaScript", "Node.js", "REST APIs"],
            },
          ].map((s, i) => (
            <AnimatedSection key={i} variant="scale-in" delay={i * 0.1}>
              <FloatCard className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-6 rounded-2xl shadow-md border border-[var(--accent-light)]/30 h-full">
                <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-4">
                  {s.title}
                </h3>
                <ul className="space-y-2 text-[var(--foreground-secondary)]">
                  {s.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </FloatCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
            Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Expense Splitter",
              desc: "Designed and developed a full-stack Flask + SQLite expense management application with a responsive UI. Hosted a live demo on Render.",
              link: "https://github.com/Jaideep200513/smart-expense-splitter",
              demo: "https://smart-expense-splitter-hzkh.onrender.com/",
            },
            {
              title: "Dynamic Risk Assessment Tool",
              desc: "Developed a web tool with a Flask backend and responsive HTML/CSS/JavaScript frontend to assess project risks and predict bottlenecks. Hosted live demo on Hugging Face Spaces.",
              link: "https://github.com/Jaideep200513/dynamic-risk-tool",
              demo: "https://huggingface.co/spaces/Jaideep200513/dynamic-risk-tool?logs=container",
            },
          ].map((p, i) => (
            <AnimatedSection key={i} variant="fade-up" delay={i * 0.15}>
              <FloatCard className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-6 rounded-2xl shadow-md border border-[var(--accent-light)]/30 h-full">
                <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-3">
                  {p.title}
                </h3>
                <p className="text-[var(--foreground-secondary)] mb-4">{p.desc}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link)] font-medium hover:underline"
                  >
                    View Project →
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link)] font-medium hover:underline"
                  >
                    Live Demo →
                  </a>
                </div>
              </FloatCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="min-h-screen px-6 py-20 bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/20"
      >
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
            Certifications
          </h2>
        </AnimatedSection>

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
            <AnimatedSection key={i} variant="scale-in" delay={i * 0.12}>
              <FloatCard className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-6 rounded-2xl shadow-md border border-[var(--accent-light)]/30 h-full">
                <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-2">
                  {cert.title}
                </h3>
                <p className="text-[var(--foreground-secondary)] mb-1">{cert.issuer}</p>
                <p className="text-[var(--foreground-muted)] text-sm mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--link)] font-medium hover:underline"
                >
                  View Certificate →
                </a>
              </FloatCard>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-20 px-6 py-24 bg-[var(--primary-light)]/30 dark:bg-[var(--primary-dark)]/30"
      >
        {/* Heading */}
        <AnimatedSection variant="fade-up">
          <h2 className="text-4xl font-bold text-center mb-4 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
            Get in Touch
          </h2>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={0.1}>
          <p className="text-center text-lg text-[var(--foreground-secondary)] mb-14 max-w-xl mx-auto">
            Let's connect and discuss ideas, collaborations, or opportunities.
          </p>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT — Contact Details */}
          <AnimatedSection variant="fade-up" delay={0.2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
                Contact Details
              </h3>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "jaideep.gubbala13@gmail.com",
                  href: "mailto:jaideep.gubbala13@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "LinkedIn Profile",
                  href: "https://www.linkedin.com/in/jaideep-gubbala-7460a43b1",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/Jaideep200513",
                  href: "https://github.com/Jaideep200513",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Hyderabad, India",
                  href: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-4 rounded-2xl border border-[var(--accent-light)]/30 shadow-sm"
                >
                  <span className="mt-0.5 text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
                    <item.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground-muted)] mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[var(--link)] font-medium hover:underline break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--foreground-secondary)] font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* RIGHT — Email Form Card */}
          <ContactForm />
        </div>
      </section>

      <AnimatedSection variant="fade-up">
        <footer className="text-center py-6 text-[var(--foreground-muted)] bg-[var(--primary-light)]/40 dark:bg-[var(--primary-dark)]/30">
          © {new Date().getFullYear()} Jaideep Gubbala. Built with Next.js
        </footer>
      </AnimatedSection>
    </div>
  );
}