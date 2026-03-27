import Image from "next/image";

export default function Navbar2() {
  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* --- NAVBAR PRINCIPALE (Bianca) --- */}
      <nav className="bg-white py-4 px-4 md:px-12 flex justify-between items-center shadow-md">
        
        {/* Logo */}
        <div className="relative w-44 h-12 md:w-56 md:h-14 shrink-0">
          <Image 
            src="/images/doge/logo.png" 
            alt="Doge di Venezia"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Menu (Tutto in linea, non grassetto tranne Home Page) */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-7 text-black font-normal text-[13px] xl:text-[15px] uppercase tracking-wider whitespace-nowrap">
          {/* Home Page: BORDEAUX e GRASSETTO */}
          <li className="cursor-pointer text-[#8b225c] font-extrabold hover:text-[#5a163b] transition-colors">
            Home Page
          </li>
          
          {/* Altre voci: NERO e NORMALE */}
          <li className="cursor-pointer hover:text-[#8b225c] transition-colors">
            Escursioni Giornaliere
          </li>
          <li className="cursor-pointer hover:text-[#8b225c] transition-colors">
            Servizi Professionali
          </li>
          <li className="cursor-pointer hover:text-[#8b225c] transition-colors">
            Chi Siamo
          </li>
          <li className="cursor-pointer hover:text-[#8b225c] transition-colors">
            La Flotta
          </li>
          <li className="cursor-pointer hover:text-[#8b225c] transition-colors">
            News e documenti
          </li>
        </ul>

        {/* Menu Mobile Icon */}
        <div className="lg:hidden text-[#8b225c] cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </nav>
    </header>
  );
}