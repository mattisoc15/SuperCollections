import Image from "next/image";

export default function Eventi() {
  return (
    <div className="relative flex flex-col md:block xl:flex xl:flex-col group cursor-pointer w-full overflow-hidden">
      
      {/* IMMAGINE */}
      <div className="relative w-full aspect-[16/10] md:absolute md:inset-0 md:h-full xl:relative xl:h-auto xl:aspect-[16/10]">
        <Image
          src="/images/yamaha.jpg"
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay: visibile solo quando il testo è sopra (md e lg), sparisce su xl */}
        <div className="hidden md:block xl:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* TESTI */}
      <div className="flex flex-col p-5 md:absolute md:bottom-0 md:left-0 md:w-full md:p-8 md:text-white xl:relative xl:p-5 xl:text-black">
        
        {/* Data o Sottotitolo piccolo */}
        <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">
          09 — 15 Mar 2026 • Concessionarie"
        </p>
        
        {/* Titolo Principale */}
        <h2 className="text-xl md:text-3xl xl:text-2xl font-black uppercase leading-tight mb-3">
          You Selected Occasion Week
        </h2>
        
        {/* Descrizione: la nascondiamo su MD per non coprire troppo l'immagine, la mostriamo su XL */}
        <p className="text-sm leading-relaxed mb-6 line-clamp-2 md:hidden xl:block opacity-80">
          Scopri le migliori occasioni selezionate per te presso i nostri centri ufficiali.
        </p>

        {/* Link/Bottone */}
        <div className="flex items-center gap-2 group/link">
          <span className="text-xs font-bold uppercase border-b-2 border-transparent group-hover/link:border-current transition-all">
            Scopri di più
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 transform transition-transform group-hover/link:translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}