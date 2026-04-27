import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "You make ordinary moments feel magical.",
  "Your eyes have their own little gravity.",
  "I hope today feels as gentle as you are.",
  "There is so much magic in the way you love.",
  "Twenty two looks beautiful on you.",
  "You deserve the kind of love that stays.",
  "A tiny garden for every tiny reason you matter.",
];

const positions = [
  "left-[15%] top-[56%]",
  "left-[38%] top-[68%]",
  "left-[63%] top-[54%]",
  "left-[78%] top-[72%]",
  "left-[23%] top-[76%]",
  "left-[52%] top-[46%]",
  "left-[84%] top-[48%]",
];

function Flower({ index, revealed, onBloom }) {
  return (
    <button
      type="button"
      onClick={onBloom}
      className={`absolute ${positions[index]} h-24 w-24 -translate-x-1/2 -translate-y-1/2 touch-manipulation border-0 bg-transparent`}
      aria-label="Bloom a flower"
    >
      <AnimatePresence>
        {revealed && (
          <motion.span
            className="absolute -left-12 -top-9 w-48 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-rose-900 shadow-lg backdrop-blur"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {messages[index]}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.span
        className="relative block h-full w-full"
        initial={false}
        animate={
          revealed ? { scale: 1, rotate: 0 } : { scale: 0.58, rotate: -14 }
        }
        whileHover={{ scale: revealed ? 1.05 : 0.7 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 190, damping: 14 }}
      >
        {[0, 60, 120, 180, 240, 300].map((rotation) => (
          <span
            key={rotation}
            className="absolute left-1/2 top-1/2 h-12 w-7 origin-bottom rounded-full bg-gradient-to-b from-pink-200 to-fuchsia-300"
            style={{
              transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
            }}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200 shadow" />
        <span className="absolute left-1/2 top-[64%] h-24 w-1 -translate-x-1/2 rounded-full bg-emerald-300" />
      </motion.span>
    </button>
  );
}

export default function FlowerGarden({ onBloom }) {
  const [revealed, setRevealed] = useState([]);
  const visibleFlowers = Math.min(messages.length, 3 + revealed.length);
  const petalCount = Math.min(28, 8 + revealed.length * 4);
  const petals = useMemo(
    () =>
      Array.from({ length: petalCount }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        delay: (index % 9) * 0.42,
        duration: 8 + (index % 5),
      })),
    [petalCount],
  );

  function revealNext() {
    setRevealed((current) => {
      const nextIndex = current.length % messages.length;
      onBloom();
      return current.includes(nextIndex) ? current : [...current, nextIndex];
    });
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-pink-50 to-violet-50 px-5 py-24">
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-[-10%] h-4 w-3 rounded-full bg-pink-200/70"
          style={{ left: petal.left }}
          animate={{
            y: ["0vh", "118vh"],
            x: [0, 28, -18, 12],
            rotate: [0, 120, 260],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-rose-700/70">
          a little garden
        </p>
        <h2 className="mt-4 font-display text-4xl text-rose-950 sm:text-6xl">
          Tap where the flowers sleep
        </h2>
      </motion.div>

      <div className="relative mx-auto mt-10 h-[62vh] max-w-5xl rounded-[2rem] bg-white/25 shadow-soft backdrop-blur-sm">
        {messages.slice(0, visibleFlowers).map((_, index) => (
          <Flower
            key={index}
            index={index}
            revealed={revealed.includes(index)}
            onBloom={revealNext}
          />
        ))}
      </div>
    </section>
  );
}
