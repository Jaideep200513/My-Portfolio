"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  // Prevent flash of unstyled content
  if (!mounted) return null;

  return (
    <nav className="fixed w-full top-0 left-0 bg-[var(--primary-light)]/80 dark:bg-[var(--primary-light)]/10 backdrop-blur-md shadow-lg z-50 transition-all border-b border-[var(--accent-light)]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--accent-dark)] dark:text-[var(--accent-light)] tracking-wide">
          Jaideep Gubbala
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-[var(--foreground)]/80 dark:text-[var(--foreground-dark)]/90 font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-[var(--accent-dark)] dark:hover:text-[var(--accent-light)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          {/* Custom Button */}
          <a
            href="https://flowcv.com/resume/9wscdkl8bsqo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block border border-[var(--accent-dark)] dark:border-[var(--accent-light)] text-[var(--accent-dark)] dark:text-[var(--accent-light)] px-4 py-2 rounded-lg hover:bg-[var(--accent-dark)] dark:hover:bg-[var(--accent-light)] hover:text-white dark:hover:text-black transition-all font-medium"
          >
            Resume
          </a>

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-[var(--accent-dark)] dark:text-[var(--accent-light)] p-2 hover:bg-[var(--accent-light)]/20 dark:hover:bg-[var(--accent-light)]/10 rounded-lg transition-all"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-[var(--accent-dark)] dark:text-[var(--accent-light)]"
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[var(--primary-light)]/90 dark:bg-[var(--primary-light)]/10 backdrop-blur-md md:hidden shadow-inner"
          >
            <ul className="flex flex-col space-y-4 p-6 text-center text-[var(--foreground)]/90 dark:text-[var(--foreground-dark)]/90 font-medium">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block hover:text-[var(--accent-dark)] dark:hover:text-[var(--accent-light)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}