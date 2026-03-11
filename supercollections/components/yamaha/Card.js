import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    /* MOBILE & MD: flex-col (testo sotto)
       LG+: block con altezza fissa (testo dentro)
    */
    <div className="relative flex flex-col lg:block w-full group cursor-pointer lg:h-[500px] overflow-hidden bg-white">
      
      {/* IMMAGINE 
          Mobile/Md: Posizione normale
          Lg+: Diventa sfondo assoluto
      */}
      <div className="relative w-full aspect-[16/10] lg:absolute lg:inset-0 lg:h-full lg:aspect-auto">
        <Image
          src="/images/moti.webp" 
          alt="Titolo"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay scuro: attivo SOLO da LG in su per leggere il testo bianco */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* TESTO
          Mobile/Md: Sotto, testo nero
          Lg+: Dentro, posizionato in basso, testo bianco
      */}
      <div className="flex flex-col p-6 lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:p-10 lg:text-white">
        
        <p className="text-[11px] font-bold text-gray-500 lg:text-white/80 uppercase tracking-[0.2em] mb-2">
          La rata su misura accende la strada
        </p>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4 leading-tight">
          Vantaggi Moto <br className="hidden lg:block" /> e Scooter
        </h2>
        
        <p className="text-gray-600 lg:text-white/90 text-[15px] leading-relaxed mb-8 max-w-md">
          Adrenalina, libertà e prestazioni per chi ama guidare senza limiti. 
          Agilità, comfort e praticità per chi vuole muoversi velocemente in città.
        </p>

        {/* BOTTONE: Bordo nero su mobile, bianco su LG+ */}
        <button className="flex items-center justify-between border border-black lg:border-white rounded-full px-8 py-3 w-fit transition-all duration-300 hover:bg-black hover:text-white lg:hover:bg-white lg:hover:text-black group/btn">
          <span className="text-[11px] font-bold uppercase mr-8">Scopri di più</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={3} 
            stroke="currentColor" 
            className="w-3.5 h-3.5 transform transition-transform group-hover/btn:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}