import Image from "next/image";

export default function Eventi() {
  return (
    /* h-[400px] o aspect-video definiscono l'altezza della card da md in su */
    <div className="relative flex flex-col group cursor-pointer w-full overflow-hidden bg-white shadow-sm border border-gray-200 md:aspect-video md:h-auto">
      
      {/* IMMAGINE */}
      <div className="relative w-full aspect-video md:aspect-none md:absolute md:inset-0 md:h-full">
        <Image
          src="/images/yamaha.jpg"
          alt="Evento"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay: attivo da md in poi per garantire la leggibilità del testo bianco */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* TESTI */}
      {/* Su mobile: relativo e testo nero. Da MD: assoluto in basso e testo bianco */}
      <div className="relative z-10 flex flex-col p-6 md:absolute md:bottom-0 md:left-0 md:w-full md:text-white md:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase leading-tight mb-2 text-black md:text-white">
          You Selected <br className="hidden md:block" /> Occasion Week
        </h2>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs font-bold uppercase border-b-2 border-black md:border-white">
            Scopri di più
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={3} 
            stroke="currentColor" 
            className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}