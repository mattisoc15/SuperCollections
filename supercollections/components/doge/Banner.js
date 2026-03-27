import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    // Il contenitore esterno gestisce i margini (padding) rispetto alla finestra
    <section className="w-full px-4 py-4 md:px-8 md:py-6">
      
      {/* Il contenitore dell'immagine ha la posizione relative e i bordi arrotondati */}
      <div className="relative w-full h-[50vh] md:h-[600px] overflow-hidden rounded-[2rem] shadow-lg">
        
        <Image
          src="/images/doge/venezia.jpg" // Assicurati che il percorso sia corretto
          alt="Veduta aerea di Venezia"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay per il contrasto del testo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Testo posizionato in basso a sinistra */}
        <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity">
              Escursioni Giornaliere a Venezia
            </Link>
            <span className="block mt-2 font-light italic text-2xl md:text-4xl">
              un incanto sospeso sull&apos;acqua.
            </span>
          </h1>
        </div>
        
      </div>
    </section>
  );
}