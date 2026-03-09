import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Эпоха Просвещения — абстракция"
            className="w-full h-full object-cover"
            style={{ filter: "sepia(60%) brightness(0.5)" }}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <p className="absolute top-12 right-6 text-amber-300 uppercase z-10 text-xs md:text-sm tracking-[0.3em]">
        Эпоха Просвещения
      </p>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          «Разум —<br />
          <span className="italic font-light">единственный</span><br />
          судья»
        </p>
        <p className="text-neutral-300 text-lg md:text-xl font-light">
          Вольтер
        </p>
      </div>

      <p className="absolute bottom-12 left-6 right-6 text-neutral-400 text-sm z-10 text-center max-w-2xl mx-auto leading-relaxed">
        XVIII век подарил миру идеи свободы, равенства и разума —
        воплощённые в камне, холсте, словах и бронзе
      </p>
    </div>
  );
}
