export default function Footer() {
  return (
    <div
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 lg:py-10 px-6 lg:px-12 h-full w-full flex flex-col justify-between">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              <div>
                <h3 className="mb-3 uppercase text-amber-400 text-xs tracking-widest">Итог</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  XVIII век — эпоха Просвещения — стал временем расцвета разума, свободы и красоты.
                  Архитектура, литература, живопись и скульптура этого периода сформировали
                  фундамент современной европейской культуры.
                </p>
              </div>
              <div>
                <h3 className="mb-3 uppercase text-amber-400 text-xs tracking-widest">Источники</h3>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>Wikipedia Commons (фото)</li>
                  <li>Britannica Encyclopedia</li>
                  <li>Музей Лувра, louvre.fr</li>
                  <li>Эрмитаж, hermitagemuseum.org</li>
                  <li>Web Gallery of Art, wga.hu</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 uppercase text-amber-400 text-xs tracking-widest">Дополнительно</h3>
                <ul className="space-y-1 text-neutral-300 text-sm">
                  <li>Янсон Х.В. «История искусства»</li>
                  <li>Дмитриева Н. «Краткая история искусств»</li>
                  <li>Ильина Т. «История искусства Западной Европы»</li>
                  <li>Лифшиц М. «Античный мир, мифология, эстетика»</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] text-white font-bold tracking-tight">
                  1700–1790
                </h1>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
                  Памятники культуры XVIII века
                </p>
              </div>
              <div className="text-right">
                <p className="text-neutral-400 text-sm">20 шедевров</p>
                <p className="text-neutral-600 text-xs mt-1">Архитектура · Литература · Живопись · Скульптура</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
