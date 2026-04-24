import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* 1. Immagine per schermi MEDI e piccoli (Mobile/Tablet) */}
      <div className="block xl:hidden relative w-full h-full">
        <Image
          src="/images/montblanc/uomo-zaiono.jpg" // Sostituisci con il tuo path
          alt="Selezione Primaverile Mobile"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 2. Immagine per schermi XL e superiori (Desktop) */}
      <div className="hidden xl:block relative w-full h-full">
        <Image
          src="/images/montblanc/uomo-zaiono.jpg" // Sostituisci con il tuo path
          alt="Selezione Primaverile Desktop"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay Contenuto (Testo e Bottoni) */}
      <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 md:p-16">
        <div className="max-w-xl text-white">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
            Selezione Primaverile
          </h2>
          <p className="text-sm md:text-base mb-6">
            Celebriamo la nuova stagione
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/collezione" 
              className="border border-white bg-transparent hover:bg-white hover:text-black transition py-2 px-6 text-center text-sm uppercase tracking-tighter"
            >
              Scopri la collezione
            </Link>
            <Link 
              href="/borse" 
              className="border border-white bg-transparent hover:bg-white hover:text-black transition py-2 px-6 text-center text-sm uppercase tracking-tighter"
            >
              Esplora borse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}