import { items, categories } from "@/data/culture18";

interface CardProps {
  item: (typeof items)[0];
  index: number;
}

function CultureCard({ item, index }: CardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-0 border border-neutral-200 overflow-hidden bg-white hover:shadow-xl transition-shadow duration-500">
      <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/mountain-landscape.jpg";
          }}
        />
      </div>
      <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-neutral-200 leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-widest text-amber-600 font-medium">
            {item.style}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2 leading-tight">
          {item.title}
        </h3>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex gap-2">
            <span className="font-semibold text-neutral-500 w-16 shrink-0">Год:</span>
            <span>{item.year}</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-neutral-500 w-16 shrink-0">Автор:</span>
            <span>{item.author}</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-neutral-500 w-16 shrink-0">Стиль:</span>
            <span>{item.style}</span>
          </li>
          <li className="flex gap-2 pt-2 border-t border-neutral-100">
            <span className="font-semibold text-neutral-500 w-16 shrink-0">Описание:</span>
            <span className="leading-relaxed">{item.description}</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-neutral-500 w-16 shrink-0">Цель:</span>
            <span className="leading-relaxed">{item.purpose}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Featured() {
  return (
    <div className="bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {categories.map((cat) => {
          const catItems = items.filter((i) => i.category === cat.id);
          return (
            <section key={cat.id} id={cat.id} className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-neutral-300" />
                <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-medium shrink-0">
                  {cat.label}
                </h2>
                <div className="h-px flex-1 bg-neutral-300" />
              </div>
              <div className="space-y-6">
                {catItems.map((item, idx) => (
                  <CultureCard key={item.id} item={item} index={idx} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
