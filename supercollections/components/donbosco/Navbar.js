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
              src="/images/donbosco/logo.jpg"
              alt="Diadora Logo"
              width={120}
              height={40}
              priority
              className=" rounded-xl"
            />
          </Link>
        </div>

        {/* MENU CENTRALE (Seconda immagine: visibile solo su desktop) */}
        <ul className="hidden lg:flex items-center space-x-6">
          {["HOME", "PROPOSTA ESTATE", "CHI SIAMO", "NEWS",].map((item) => (
            <li key={item}>
              <Link href="#" className="text-sm uppercase tracking-wider font-semibold text-black hover:opacity-70 transition-opacity">
                {item}
              </Link>
            </li>
          ))} 
        </ul>

        {/* ICONE DESTRA (Prima immagine: layout compatto per schermi medi) */}
        <div className="flex items-center space-x-5">
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