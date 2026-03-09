import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Эпоха Просвещения"
          className="w-full h-full object-cover"
          style={{ filter: "sepia(40%) brightness(0.7)" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-6 font-light">
          Эпоха Просвещения
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          КУЛЬТУРА
          <br />
          <span className="font-light italic">1700–1790-х</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 font-light leading-relaxed">
          Архитектура · Литература · Живопись · Скульптура
        </p>
        <p className="mt-4 text-sm opacity-60 uppercase tracking-widest">
          20 шедевров мировой культуры
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-white/50 mx-auto"
        />
      </div>
    </div>
  );
}
