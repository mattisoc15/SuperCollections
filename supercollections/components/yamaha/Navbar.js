import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white px-4 md:px-6 py-3 shadow-md flex items-center justify-between w-full font-sans border-b border-gray-100 fixed z-100">
      {/* 1. LOGO E ANNIVERSARY (Sinistra) */}
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <Link href="/">
          <img
            src="images/logo.png"
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
        <div className="h-8 w-[1px] bg-gray-300 hidden sm:block"></div>
        <div className="hidden sm:flex flex-col items-center leading-none border-2 border-black rounded-full px-1.5 py-0.5">
          <span className="text-sm font-bold">70</span>
          <span className="text-[6px] font-bold uppercase tracking-tighter">
            Anniversary
          </span>
        </div>
      </div>

      {/* SEZIONE SCRITTE - Link con lo stesso stile visivo dei testi */}
      <div className="flex items-center gap-2 2xl:gap-5 px-2 overflow-hidden">
        <Link
          href="/modelli"
          className="hidden md:block text-[10px] xl:text-[11px] font-[900] tracking-tight text-black whitespace-nowrap cursor-default no-underline"
        >
          I NOSTRI MODELLI
        </Link>

        <Link
          href="/accessori"
          className="hidden md:block text-[10px] xl:text-[11px] font-[900] tracking-tight text-black whitespace-nowrap cursor-default no-underline"
        >
          ACCESSORI
        </Link>

        <Link
          href="/abbigliamento"
          className="hidden md:block text-[10px] xl:text-[11px] font-[900] tracking-tight text-black whitespace-nowrap cursor-default no-underline"
        >
          ABBIGLIAMENTO & MERCHANDISE
        </Link>

        <Link
          href="/eventi"
          className="hidden md:block text-[10px] xl:text-[11px] font-[900] tracking-tight text-black whitespace-nowrap cursor-default no-underline"
        >
          EVENTI & EXPERIENCE
        </Link>

        <Link
          href="/servizi"
          className="hidden md:block text-[10px] xl:text-[11px] font-[900] tracking-tight text-black whitespace-nowrap cursor-default no-underline"
        >
          SERVIZI & MANUTENZIONE
        </Link>
      </div>

      {/* 3. SEZIONE ICONE (Destra) */}
      <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
        {/* Ricerca (nascosta su mobile molto piccolo) */}
        <svg
          className="w-6 h-6 cursor-pointer hidden sm:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        {/* Pin Posizione */}
        <svg className="w-6 h-6 cursor-pointer fill-black" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>

        {/* Carrello */}
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>

        {/* User con X */}
        <div className="relative cursor-pointer">
          <svg className="w-7 h-7 fill-black" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <div className="absolute -bottom-0.5 -right-1 bg-[#E60012] rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
            <svg
              className="w-2 h-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="4"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>

        {/* Bandiera Italiana */}
        <div className="sm:flex w-7 h-5 rounded-sm overflow-hidden border border-gray-200 shadow-sm cursor-pointer hidden">
          <div className="bg-[#009246] w-1/3"></div>
          <div className="bg-white w-1/3"></div>
          <div className="bg-[#ce2b37] w-1/3"></div>
        </div>

        {/* Menu Hamburger (Appare quando le scritte spariscono) */}
        <svg
          className="w-8 h-8 cursor-pointer xl:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  );
}
