import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* LOGO (Sempre visibile) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/diadora/logo.svg"
              alt="Diadora Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* MENU CENTRALE (Seconda immagine: visibile solo su desktop) */}
        <ul className="hidden lg:flex items-center space-x-6">
          {["Uomo", "Donna", "Bambini", "Sport", "Heritage", "Culture"].map((item) => (
            <li key={item}>
              <Link href="#" className="text-sm uppercase tracking-wider font-semibold text-black hover:opacity-70 transition-opacity">
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#" className="text-sm uppercase tracking-wider font-bold text-red-700 hover:opacity-70 transition-opacity">
              Mid-Season Sales
            </Link>
          </li>
        </ul>

        {/* ICONE DESTRA (Prima immagine: layout compatto per schermi medi) */}
        <div className="flex items-center space-x-5">
          {/* Cerca: su schermi medi appare solo l'icona, su desktop anche il testo */}
          <button className="flex items-center space-x-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden lg:inline text-sm font-medium">Cerca</span>
          </button>

          {/* Cuore / Preferiti */}
          <button aria-label="Preferiti">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Carrello */}
          <button aria-label="Carrello">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

          {/* Hamburger Menu (Presente in entrambe le immagini) */}
          <button aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}