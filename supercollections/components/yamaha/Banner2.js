import Image from "next/image";
import Link from "next/link";

export default function Banner2() {
  return (
    <div className="w-full">
      {/* Titolo SOPRA l'immagine - Margine pulito */}
      <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-black">
        Prenota un <span className="text-[#E60012]">test ride</span> gratuito
      </h2>

      {/* Box Immagine - Altezza ridotta (verticale stretto) */}
      <section className="relative w-full h-[30vh] md:h-[35vh] overflow-hidden bg-gray-900 group">
        <Image 
          src="/images/moto.webp" 
          alt="Yamaha Test Ride" 
          fill 
          priority
          className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Overlay sfumato solo nell'angolo per far risaltare il tasto */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-80" />

        {/* Pulsante in BASSO a SINISTRA */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <Link 
            href="/scopri" 
            className="inline-flex items-center gap-3 bg-white text-black text-[10px] md:text-xs font-bold px-6 py-3 md:px-8 md:py-4 uppercase tracking-[0.2em] hover:bg-[#E60012] hover:text-white transition-all duration-300 shadow-2xl group/btn"
          >
            Scopri ora
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="3" 
              stroke="currentColor" 
              className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}