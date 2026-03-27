import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#8b225c] text-white py-2 px-4 md:px-8 flex flex-row justify-between items-center text-[10px] md:text-xs font-medium tracking-wide">
      
      {/* Sezione Lingue (Sinistra) - Sempre visibile */}
      <div className="flex gap-2">
        <span className="cursor-pointer hover:opacity-80 transition">IT</span> / 
        <span className="cursor-pointer hover:opacity-80 transition">EN</span> / 
        <span className="cursor-pointer hover:opacity-80 transition">DE</span> / 
        <span className="cursor-pointer hover:opacity-80 transition">FR</span> / 
        <span className="cursor-pointer hover:opacity-80 transition">ES</span> / 
        <span className="cursor-pointer hover:opacity-80 transition">PL</span>
      </div>

      {/* Sezione Destra */}
      <div className="flex items-center gap-4 xl:gap-8">
        
        {/* Contatti: NASCOSTI di base, VISIBILI solo da XL in su */}
        <div className="hidden xl:flex items-center gap-4">
          <p>
            Servizi Professionali: <a href="mailto:info@dogedivenezia.it" className="hover:underline">info@dogedivenezia.it</a> - +39 041 530 23 63
          </p>
          <span className="opacity-50">|</span>
          <p>
            Escursioni Giornaliere: <a href="mailto:api@dogedivenezia.it" className="hover:underline">api@dogedivenezia.it</a> / +39 041 530 23 63
          </p>
        </div>

        {/* Social - Sempre visibili */}
        <div className="flex items-center gap-3">
          <span className="font-bold hidden sm:inline">Social:</span>
          <div className="flex gap-2">
            
            {/* Facebook */}
            <a href="#" className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#8b225c] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.388 14.185 5 15.324 5H18V0h-3.667C10.594 0 9 1.587 9 4.833V8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#8b225c] transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="#" className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#8b225c] transition-colors">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}