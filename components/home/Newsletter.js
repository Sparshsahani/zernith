"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const submit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 1800);
      return;
    }

    setStatus("sending");
    // simulate async subscribe
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[var(--primary)]">
      {/* subtle background blobs */}
      <div className="absolute -left-8 -top-8 w-72 h-72 bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.01)] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-16 bottom-8 w-56 h-56 bg-gradient-to-tr from-[rgba(166,126,59,0.06)] to-[rgba(255,255,255,0.01)] rounded-full blur-3xl pointer-events-none"></div>

      <div className="container text-center relative z-10 text-black px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-black text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">
            Stay Updated
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 px-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-[rgba(0,0,0,0.75)] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Get exclusive deals, new arrivals, and fragrance tips delivered to
            your inbox
          </p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          className="max-w-lg mx-auto px-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          viewport={{ once: true }}
          aria-live="polite"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <motion.input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-black border border-gray-200 text-white placeholder-gray-400 focus:outline-none focus:border-black/60 transition-colors text-sm sm:text-base"
              whileFocus={{ scale: 1.01 }}
              aria-label="Email address"
              required
            />

            <motion.button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-full hover:bg-black/90 hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              disabled={status === "sending" || status === "success"}
              aria-live="polite"
            >
              {status === "sending" ? (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeOpacity="0.15"
                  />
                  <path
                    d="M22 12a10 10 0 00-10-10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              ) : status === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                "Subscribe"
              )}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: status === "error" || status === "success" ? 1 : 0,
              y: 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-4 min-h-[1.25rem]"
          >
            {status === "error" && (
              <p className="text-sm text-rose-400">
                Please enter a valid email address.
              </p>
            )}

            {status === "success" && (
              <p className="text-sm text-black font-semibold">
                Thanks — you&apos;re subscribed!
              </p>
            )}
          </motion.div>

          <p className="text-xs text-black/60 mt-3 sm:mt-4 px-2">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
