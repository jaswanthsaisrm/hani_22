import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaLockOpen, FaPause, FaPlay } from "react-icons/fa6";

export default function Unlock({ unlocked }) {
  const audioRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);

  function handleClick() {
    if (!unlocked) return;
    setRevealed(true);
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(console.error);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="relative grid min-h-screen place-items-center bg-gradient-to-b from-pink-50 via-cream to-white px-5 py-24">
      <motion.div
        className="w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/55 p-7 text-center shadow-soft backdrop-blur-md sm:p-10"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-rose-700/70">
          one last thing...
        </p>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl">
          {unlocked
            ? "I didn't want to just type this..."
            : "A tiny surprise is waiting"}
        </h2>
        <p className="mx-auto mt-5 max-w-sm leading-7 text-rose-900/70">
          {unlocked
            ? "So I recorded it instead."
            : "Bloom a few flowers or open a couple of notes to unlock it."}
        </p>

        {/* Audio always in DOM so ref is always valid */}
        <audio ref={audioRef} src="/voice-note.mp3" preload="auto" />

        <motion.button
          type="button"
          onClick={handleClick}
          disabled={!unlocked}
          className={`mx-auto mt-9 flex h-20 w-20 items-center justify-center rounded-full text-2xl shadow-soft transition ${
            unlocked ? "bg-rose-950 text-white" : "bg-white/80 text-rose-300"
          }`}
          animate={
            unlocked
              ? {
                  boxShadow: [
                    "0 0 0 rgba(244,114,182,0)",
                    "0 0 42px rgba(244,114,182,.55)",
                    "0 0 0 rgba(244,114,182,0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2.2, repeat: Infinity }}
          aria-label={unlocked ? "Play voice note" : "Voice note locked"}
        >
          {unlocked ? playing ? <FaPause /> : <FaPlay /> : <FaLock />}
        </motion.button>

        {unlocked && (
          <motion.div
            className="mt-8 rounded-2xl bg-cream/80 p-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-3 text-sm font-medium text-rose-900/70">
              <FaLockOpen />
              <span>
                {revealed ? "voice note ready" : "tap to reveal the voice note"}
              </span>
            </div>
            {revealed && (
              <audio
                src="/voice-note.mp3.mp3"
                className="mt-4 w-full"
                controls
              />
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
