import React from "react";
import { motion } from "framer-motion";

export default function Finale() {
  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-b from-white to-cream px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="whitespace-pre-line font-display text-4xl leading-tight text-rose-950 sm:text-6xl">
          {"That's all...\nI just wanted to make you smile today."}
        </p>
        <motion.p
          className="mt-12 font-display text-5xl text-rose-700 sm:text-7xl"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.9 }}
        >
          Happy Birthday ❤️
        </motion.p>
      </motion.div>
    </section>
  );
}
