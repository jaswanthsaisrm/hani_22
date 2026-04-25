import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero.jsx";
import FlowerGarden from "./components/FlowerGarden.jsx";
import Notes from "./components/Notes.jsx";
import Unlock from "./components/Unlock.jsx";
import Finale from "./components/Finale.jsx";

function CakeLanding({ onEnter }) {
  return (
    <motion.main
      className="fixed inset-0 z-50 grid min-h-screen place-items-center overflow-hidden bg-[#fff8f0] px-5 text-center"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(251,207,232,.72),transparent_30%),radial-gradient(circle_at_80%_72%,rgba(196,181,253,.62),transparent_34%),linear-gradient(180deg,#fff8f0_0%,#fff1f8_100%)]" />
      <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
      <motion.button
        type="button"
        onClick={onEnter}
        className="group relative flex flex-col items-center border-0 bg-transparent outline-none"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        whileTap={{ scale: 0.98 }}
        aria-label="Light the birthday story"
      >
        <motion.div
          className="relative mb-9 h-[360px] w-[330px] sm:h-[410px] sm:w-[390px]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute left-1/2 top-3 z-30 h-20 w-20 -translate-x-1/2 rounded-full bg-amber-300/45 blur-xl"
            animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-3 z-40 h-12 w-8 -translate-x-1/2 rounded-[60%_40%_55%_45%] bg-gradient-to-b from-yellow-100 via-amber-300 to-orange-500 shadow-[0_0_34px_rgba(251,191,36,.9)]"
            animate={{
              scale: [1, 1.14, 0.96, 1.08, 1],
              rotate: [-4, 4, -2, 3, -4],
              borderRadius: ["60% 40% 55% 45%", "45% 55% 45% 55%", "58% 42% 50% 50%"],
            }}
            transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute left-1/2 top-14 z-30 h-28 w-7 -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-200 via-white to-rose-300 shadow-lg">
            <span className="absolute left-1/2 top-2 h-[86px] w-1 -translate-x-1/2 rounded-full bg-rose-400/45" />
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-700" />
          </div>

          <div className="absolute bottom-5 left-1/2 h-14 w-[330px] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-rose-200/25 via-white/80 to-violet-200/25 shadow-[0_28px_70px_rgba(99,63,99,.22)] sm:w-[390px]" />
          <div className="absolute bottom-[52px] left-1/2 h-28 w-[292px] -translate-x-1/2 rounded-b-[46px] rounded-t-[30px] bg-gradient-to-b from-[#ffe6f1] via-[#ffc7dd] to-[#f6a8ca] shadow-soft sm:w-[342px]">
            <div className="absolute inset-x-0 top-0 h-10 rounded-t-[30px] bg-gradient-to-b from-white to-[#ffe6f1]" />
            <div className="absolute left-0 top-0 h-16 w-full overflow-hidden rounded-t-[30px]">
              {[10, 58, 110, 164, 220, 276].map((left, index) => (
                <span
                  key={left}
                  className="absolute top-5 h-12 w-9 rounded-b-full bg-white"
                  style={{ left: `${left}px`, transform: `scaleY(${index % 2 ? 0.82 : 1})` }}
                />
              ))}
            </div>
            <div className="absolute left-8 top-16 h-2 w-16 rounded-full bg-white/40" />
            <div className="absolute right-10 top-20 h-2 w-20 rounded-full bg-rose-100/50" />
          </div>

          <div className="absolute bottom-[140px] left-1/2 h-24 w-[246px] -translate-x-1/2 rounded-b-[38px] rounded-t-[26px] bg-gradient-to-b from-[#efe7ff] via-[#d8c8ff] to-[#bdaaf6] shadow-[0_18px_50px_rgba(124,91,166,.18)] sm:w-[292px]">
            <div className="absolute inset-x-0 top-0 h-9 rounded-t-[26px] bg-gradient-to-b from-white to-[#f3edff]" />
            <div className="absolute left-0 top-0 h-14 w-full overflow-hidden rounded-t-[26px]">
              {[14, 57, 104, 151, 198, 244].map((left, index) => (
                <span
                  key={left}
                  className="absolute top-4 h-10 w-8 rounded-b-full bg-white"
                  style={{ left: `${left}px`, transform: `scaleY(${index % 2 ? 1 : 0.75})` }}
                />
              ))}
            </div>
            <div className="absolute left-7 top-14 h-2 w-14 rounded-full bg-white/35" />
            <div className="absolute right-8 top-16 h-2 w-16 rounded-full bg-violet-100/45" />
          </div>

          <div className="absolute bottom-[218px] left-1/2 h-20 w-[194px] -translate-x-1/2 rounded-b-[32px] rounded-t-[24px] bg-gradient-to-b from-[#fff2db] via-[#ffd7a8] to-[#f8b977] shadow-[0_16px_45px_rgba(175,95,90,.15)] sm:w-[224px]">
            <div className="absolute inset-x-0 top-0 h-8 rounded-t-[24px] bg-gradient-to-b from-white to-[#fff0d8]" />
            <div className="absolute left-0 top-0 h-12 w-full overflow-hidden rounded-t-[24px]">
              {[12, 48, 86, 124, 162].map((left, index) => (
                <span
                  key={left}
                  className="absolute top-4 h-9 w-7 rounded-b-full bg-white"
                  style={{ left: `${left}px`, transform: `scaleY(${index % 2 ? 0.72 : 1})` }}
                />
              ))}
            </div>
          </div>

          {[
            "left-[72px] top-[238px] bg-rose-400",
            "right-[76px] top-[252px] bg-violet-400",
            "left-[106px] top-[178px] bg-amber-300",
            "right-[104px] top-[182px] bg-rose-300",
            "left-[138px] bottom-[92px] bg-white",
            "right-[128px] bottom-[92px] bg-violet-200",
          ].map((pos) => (
            <span key={pos} className={`absolute z-20 h-3 w-3 rounded-full ${pos} shadow-sm`} />
          ))}
        </motion.div>
        <p className="font-display text-5xl text-rose-950 drop-shadow-sm sm:text-7xl">Make a wish</p>
        <p className="mt-4 max-w-md text-sm uppercase tracking-[0.32em] text-rose-700/75">
          tap the candle
        </p>
      </motion.button>
    </motion.main>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [flowerInteractions, setFlowerInteractions] = useState(0);
  const [openedNotes, setOpenedNotes] = useState(0);

  const unlocked = useMemo(
    () => flowerInteractions >= 4 || openedNotes >= 2,
    [flowerInteractions, openedNotes],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream text-rose-950">
      <AnimatePresence>
        {!entered && <CakeLanding onEnter={() => setEntered(true)} />}
      </AnimatePresence>
      <Hero name="Beautiful" />
      <FlowerGarden onBloom={() => setFlowerInteractions((count) => count + 1)} />
      <Notes onOpenNote={() => setOpenedNotes((count) => count + 1)} />
      <Unlock unlocked={unlocked} />
      <Finale />
    </div>
  );
}
