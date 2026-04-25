import React from "react";
import { motion } from "framer-motion";

const lines = ["Hey Beautiful...", "It's your day today", "You're 22 now"];

export default function Hero({ name = "Beautiful" }) {
  const displayLines = [`Hey ${name}...`, lines[1], lines[2]];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.div
        className="absolute inset-0 scale-105 bg-[linear-gradient(135deg,rgba(251,207,232,.86),rgba(196,181,253,.72)),url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.18 }}
        transition={{ duration: 18, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-cream/30 to-cream" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.75 } },
        }}
      >
        {displayLines.map((line, index) => (
          <motion.p
            key={line}
            className={`font-display leading-tight text-rose-950 drop-shadow-sm ${
              index === 2 ? "text-5xl sm:text-7xl lg:text-8xl" : "text-4xl sm:text-6xl lg:text-7xl"
            }`}
            variants={{
              hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {line}
            {index === 2 && <span className="ml-3 text-lavender">✨</span>}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.28em] text-rose-900/70"
        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        scroll slowly
      </motion.div>
    </section>
  );
}
