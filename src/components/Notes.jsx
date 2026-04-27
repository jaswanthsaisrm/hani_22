import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const groups = [
  {
    title: "Things I noticed",
    notes: [
      [
        "I love how naturally you care for people always looking out for them, even in the smallest ways.",
        "best elder sibling one could get",
        "/sisters.jpeg",
      ],
      [
        "How selflessly giving you are.",
        "Learn how to take for once and dont settle anymore you are pushing 22.You are getting old nigga",
        "/2ndNote.jpeg",
      ],
    ],
  },
  {
    title: "You are special because",
    notes: [
      [
        "You do not let the world or your hardships put you down. You keep chasing your dreams and goals and you are so inspiring to me.",
        "BADDIE WITH MOTION",
        "/3rdNote.jpeg",
      ],
      [
        "You have maxed out in all aspects in life from looks to personality to kindness to talents and thats just really rare.",
        "if only you maxed out self control you wouldnt have embarrsed yourself in the bus",
        "/4thNote.jpeg",
      ],
    ],
  },
  {
    title: "Things I never said",
    notes: [
      [
        "I know you have been through a lot and I admire your strength and resilience.",
        "You are stronger than you think.",
      ],
      [
        "I hope you choose yourself loudly this year.",
        "You deserve to be loved gently, including by you.",
      ],
    ],
  },
];

const rotations = [-4, 3, -2, 4, -3, 2];

function getNoteData(note) {
  const [text, hidden, image] = note;
  return { text, hidden, image };
}

export default function Notes({ onOpenNote }) {
  const [active, setActive] = useState(null);

  function openNote(item, index) {
    setActive({ ...item, note: getNoteData(item.note), index });
    onOpenNote();
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-violet-50 via-cream to-pink-50 px-5 py-20 sm:py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-sm uppercase tracking-[0.3em] text-rose-700/70">
          notes of love
        </p>

        <div className="mt-12 grid gap-9 lg:grid-cols-3 lg:gap-8">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="mb-5 text-center font-display text-2xl leading-tight text-rose-900">
                {group.title}
              </h3>
              <div className="grid items-start gap-7 sm:grid-cols-2 lg:grid-cols-1">
                {group.notes.map((note, noteIndex) => {
                  const index = groupIndex * 2 + noteIndex;
                  const noteData = getNoteData(note);

                  return (
                    <motion.button
                      key={noteData.text}
                      type="button"
                      onClick={() => openNote({ group: group.title, note }, index)}
                      className="flex min-h-[21rem] flex-col rounded-sm bg-white p-4 text-left shadow-soft outline-none sm:min-h-[22rem] lg:min-h-[20rem]"
                      style={{ rotate: rotations[index] }}
                      whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      }}
                    >
                      {noteData.image ? (
                        <img
                          src={noteData.image}
                          alt=""
                          className="mb-5 h-48 w-full shrink-0 rounded-sm object-cover object-center sm:h-52 lg:h-44 xl:h-52"
                        />
                      ) : (
                        <div className="mb-5 h-32 shrink-0 rounded-sm bg-gradient-to-br from-blush via-cream to-lavender sm:h-36 lg:h-28 xl:h-36" />
                      )}
                      <p className="font-display text-xl leading-snug text-rose-950 sm:text-[1.35rem] lg:text-xl xl:text-2xl">
                        {noteData.text}
                      </p>
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
            className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-rose-950/30 px-5 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.article
              className="max-h-[calc(100vh-3rem)] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-5 shadow-soft sm:p-6"
              initial={{ opacity: 0, y: 40, scale: 0.92, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              {active.note.image ? (
                <img
                  src={active.note.image}
                  alt=""
                  className="mb-5 h-60 w-full rounded-2xl object-cover object-center sm:h-72"
                />
              ) : (
                <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-lavender via-pink-100 to-cream sm:h-56" />
              )}
              <p className="text-xs uppercase tracking-[0.24em] text-rose-600/70">
                {active.group}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-rose-950 sm:text-3xl">
                {active.note.text}
              </h3>
              <p className="mt-5 text-lg leading-8 text-rose-900/78">
                {active.note.hidden}
              </p>
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
