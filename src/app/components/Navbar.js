"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, FileText } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("home");
  const [touchStart, setTouchStart] = useState(null);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  /* Theme */
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  /* ✅ FIXED Scroll Spy + Auto Close (ONLY CHANGE) */
  useEffect(() => {
    const onScroll = () => {
      if (open) setOpen(false);

      const scrollPos = window.scrollY + 150;

      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  /* Swipe to close */
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientY);
  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = e.changedTouches[0].clientY - touchStart;
    if (diff < -50) setOpen(false);
    setTouchStart(null);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--primary-light)]/90 dark:bg-[var(--primary-light)]/10 backdrop-blur-md border-b border-[var(--accent-light)]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--accent-dark)] dark:text-[var(--accent-light)]">
          Jaideep Gubbala
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`transition ${
                  active === l.id
                    ? "text-[var(--accent-dark)] dark:text-[var(--accent-light)]"
                    : "text-[var(--foreground)] dark:text-[var(--foreground-dark)] hover:text-[var(--accent-dark)]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <a
            href="https://flowcv.com/resume/9wscdkl8bsqo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-[var(--accent-dark)] dark:border-[var(--accent-light)] px-4 py-2 rounded-lg text-[var(--accent-dark)] dark:text-[var(--accent-light)] hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition"
          >
            <FileText size={18} /> Resume
          </a>

          <button onClick={toggleDarkMode} className="p-2 rounded-lg">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="md:hidden bg-[var(--primary-light)] dark:bg-[#0b0b0b] border-t border-[var(--accent-light)]/20"
          >
            <ul className="flex flex-col gap-5 p-6 text-center font-medium">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block transition ${
                      active === l.id
                        ? "text-[var(--accent-dark)] dark:text-[var(--accent-light)]"
                        : "text-[var(--foreground)] dark:text-[var(--foreground-dark)] hover:text-[var(--accent-dark)]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              <a
                href="https://flowcv.com/resume/9wscdkl8bsqo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 border border-[var(--accent-dark)] dark:border-[var(--accent-light)] px-5 py-2 rounded-lg hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition"
              >
                <FileText size={18} /> Resume
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
