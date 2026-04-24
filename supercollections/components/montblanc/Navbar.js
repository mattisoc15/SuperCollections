import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white text-black font-sans">
      
      {/* --- MOBILE & MEDIUM (Dalla seconda immagine) --- */}
      <div className="xl:hidden flex flex-col border-b border-gray-100">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Menu Icon Inline */}
          <button className="hover:opacity-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          </button>
          
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl font-black tracking-tighter uppercase italic">MONTBLANC</span>
          </Link>

          {/* Bag Icon Inline */}
          <button className="hover:opacity-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
        </div>

        {/* Search Bar Mobile */}
        <div className="px-5 pb-5">
          <div className="relative flex items-center border-b border-black">
            <span className="absolute left-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input 
              type="text" 
              placeholder="Cerca (parole chiave ecc.)" 
              className="w-full pl-8 py-2 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* --- DESKTOP XL+ (Dalla prima immagine) --- */}
      <div className="hidden xl:flex flex-col items-center px-10 py-8 border-b border-gray-100">
        
        {/* Top Section: Language, Logo, Icons */}
        <div className="w-full flex items-center justify-between">
          <div className="flex-1">
            <span className="text-[10px] font-bold border-b border-black pb-0.5 cursor-pointer uppercase">IT</span>
          </div>

          <Link href="/" className="flex-1 text-center">
            <span className="text-3xl font-black tracking-tighter uppercase italic leading-none">MONTBLANC</span>
          </Link>

          <div className="flex-1 flex justify-end items-center space-x-7">
            {/* Search */}
            <button className="hover:opacity-50">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            {/* User */}
            <button className="hover:opacity-50">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            {/* Heart */}
            <button className="hover:opacity-50">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            {/* Bag */}
            <button className="hover:opacity-50">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="mt-10">
          <ul className="flex items-center space-x-7">
            {["Novità", "Regali", "Penne di Lusso", "Ricariche e Cancelleria", "Borse", "Bagagli da Viaggio", "Accessori", "Orologi", "Cuffie", "Fragranze"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-[11px] font-bold tracking-[0.18em] uppercase hover:text-gray-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400 hover:text-black transition-colors">
                Scopri
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}