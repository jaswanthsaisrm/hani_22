import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const groups = [
  {
    title: "Things I noticed",
    notes: [
      {
        text: "The way your eyes change when you are excited.",
        hidden: "I notice more than I say.",
        image: "/sisters.jpeg",
      },
      {
        text: "How you make people feel included.",
        hidden: "It is one of your quiet superpowers.",
      },
    ],
  },
  {
    title: "Things I like about you",
    notes: [
      {
        text: "Your softness, even when the day is heavy.",
        hidden: "It makes the world less sharp.",
      },
      {
        text: "Your laugh when you forget to hold it back.",
        hidden: "That one stays with me.",
      },
    ],
  },
  {
    title: "Things I never said",
    notes: [
      {
        text: "You matter to me in small everyday ways.",
        hidden: "More than a birthday website can fit.",
      },
      {
        text: "I hope you choose yourself loudly this year.",
        hidden: "You deserve to be loved gently, including by you.",
      },
    ],
  },
];

const rotations = [-4, 3, -2, 4, -3, 2];

export default function Notes({ onOpenNote }) {
  const [active, setActive] = useState(null);

  function openNote(item, index) {
    setActive({ ...item, index });
    onOpenNote();
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-violet-50 via-cream to-pink-50 px-5 py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-sm uppercase tracking-[0.3em] text-rose-700/70">notes of love</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-4xl sm:text-6xl">
          Small things I kept in my heart
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="mb-6 text-center font-display text-2xl text-rose-900">{group.title}</h3>
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
                {group.notes.map((note, noteIndex) => {
                  const index = groupIndex * 2 + noteIndex;
                  return (
                    <motion.button
                      key={note.text}
                      type="button"
                      onClick={() => openNote({ group: group.title, note }, index)}
                      className="min-h-72 rounded-sm bg-white p-4 text-left shadow-soft outline-none"
                      style={{ rotate: rotations[index] }}
                      whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    >
                      {note.image ? (
                        <img
                          src={note.image}
                          alt="Sisters together"
                          className="mb-5 h-40 w-full rounded-sm object-cover object-center"
                        />
                      ) : (
                        <div className="mb-5 h-40 rounded-sm bg-gradient-to-br from-blush via-cream to-lavender" />
                      )}
                      <p className="font-display text-2xl leading-snug text-rose-950">{note.text}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-40 grid place-items-center bg-rose-950/30 px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.article
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft"
              initial={{ opacity: 0, y: 40, scale: 0.92, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              {active.note.image ? (
                <img
                  src={active.note.image}
                  alt="Sisters together"
                  className="mb-5 h-56 w-full rounded-2xl object-cover object-center"
                />
              ) : (
                <div className="mb-5 h-56 rounded-2xl bg-gradient-to-br from-lavender via-pink-100 to-cream" />
              )}
              <p className="text-xs uppercase tracking-[0.24em] text-rose-600/70">{active.group}</p>
              <h3 className="mt-3 font-display text-3xl text-rose-950">{active.note.text}</h3>
              <p className="mt-5 text-lg leading-8 text-rose-900/78">{active.note.hidden}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="mt-7 w-full rounded-full bg-rose-950 px-5 py-3 text-sm font-semibold text-white"
              >
                keep it close
              </button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
