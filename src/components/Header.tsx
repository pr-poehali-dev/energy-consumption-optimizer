interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">
          XVIII век
        </div>
        <nav className="flex gap-8">
          <a href="#architecture" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-wide">
            Архитектура
          </a>
          <a href="#literature" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-wide">
            Литература
          </a>
          <a href="#painting" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-wide">
            Живопись
          </a>
          <a href="#sculpture" className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-xs tracking-wide">
            Скульптура
          </a>
        </nav>
      </div>
    </header>
  );
}
