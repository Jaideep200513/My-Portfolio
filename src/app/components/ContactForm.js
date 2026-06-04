"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Loader2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_znn1h7d";
const EMAILJS_TEMPLATE_ID = "template_lmmk1le";
const EMAILJS_PUBLIC_KEY  = "3Xir8v3fWuVIncf5y";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast]     = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      showToast("success", "Message sent! I'll get back to you soon.");
    } catch (err) {
      console.error(err);
      showToast("error", "Oops, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Toast ──────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit   ={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed top-20 left-1/2 z-[100] -translate-x-1/2"
          >
            <div
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl shadow-xl backdrop-blur-md border text-sm font-medium
                ${
                  toast.type === "success"
                    ? "bg-[var(--primary-light)]/90 dark:bg-[#242424]/90 border-green-400/40 text-green-700 dark:text-green-400"
                    : "bg-[var(--primary-light)]/90 dark:bg-[#242424]/90 border-red-400/40   text-red-700   dark:text-red-400"
                }`}
            >
              {toast.type === "success"
                ? <CheckCircle size={16} className="shrink-0" />
                : <XCircle size={16} className="shrink-0" />
              }
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Form Card ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        /* Float on hover — same spring as FloatCard */
        whileHover={{
          y: -10,
          boxShadow:
            "0 20px 40px -8px rgba(92,58,33,0.25), 0 8px 16px -4px rgba(92,58,33,0.15)",
          transition: { type: "spring", stiffness: 260, damping: 22 },
        }}
        className="bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] p-7 rounded-2xl shadow-md border border-[var(--accent-light)]/30 w-full"
      >
        <h3 className="text-2xl font-semibold text-[var(--accent-dark)] dark:text-[var(--accent-light)] mb-6">
          Send a Message
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="user_name"
              className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground-muted)]"
            >
              Name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[var(--link)]/50"
              style={{
                backgroundColor: "var(--input-bg)",
                color: "var(--input-text)",
                borderColor: "var(--input-border)",
              }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="user_email"
              className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground-muted)]"
            >
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[var(--link)]/50"
              style={{
                backgroundColor: "var(--input-bg)",
                color: "var(--input-text)",
                borderColor: "var(--input-border)",
              }}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground-muted)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[var(--link)]/50 resize-none"
              style={{
                backgroundColor: "var(--input-bg)",
                color: "var(--input-text)",
                borderColor: "var(--input-border)",
              }}
            />
          </div>


          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            className="mt-1 w-full py-3 rounded-xl font-semibold text-[#fdf6ee] bg-[var(--accent-dark)] dark:bg-[var(--accent-light)] dark:text-black hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                Sending
              </span>
            ) : (
              "Send Message →"
            )}
          </motion.button>
        </form>
      </motion.div>
    </>
  );
}
