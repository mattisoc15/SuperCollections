import Image from "next/image";

export default function Ogetti() {
  return (
    <div className="flex flex-col w-full group cursor-pointer">
      
      {/* Immagine con proporzione fissa (Rettangolare come in figura) */}
      <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
        <Image
          src="/images/full.png"
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Testo Titolo */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-3">
        Insieme in ogni avventura
      </h3>

      {/* Link "Scopri" con Freccia */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-gray-900 border-b-2 border-transparent group-hover:border-black transition-all">
          scopri di più
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>

    </div>
  );
}