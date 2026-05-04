import Image from "next/image";
import Link from "next/link";

export default function BannerMamma() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e5e5e5]">
      {/* 1. IMMAGINE MOBILE/TABLET (Fino a XL) 
          Riflette lo Screenshot 2026-04-29 alle 09.10.50.jpg
      */}
      <div className="block xl:hidden relative w-full aspect-[4/5] sm:aspect-video">
        <Image
          src="/images/montblanc/festa-mamma.jpeg"
          alt="Celebra la festa della mamma"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay Contenuto Mobile: Centrato in basso */}
        <div className="absolute inset-0 flex flex-col justify-end items-center p-8 bg-black/10 text-center">
          <h2 className="text-white text-sm md:text-lg font-bold uppercase tracking-[0.2em] mb-2">
            Celebra la festa della mamma
          </h2>
          <p className="text-white text-[10px] md:text-sm mb-6 font-light">
            Regali da custodire per sempre
          </p>
          <Link 
            href="#" 
            className="w-full max-w-xs bg-white text-black py-3 px-8 text-[11px] uppercase tracking-widest font-bold hover:bg-gray-100 transition"
          >
            Scopri ora
          </Link>
        </div>
      </div>

      {/* 2. IMMAGINE DESKTOP (Da XL in su)
          Riflette lo Screenshot 2026-04-29 alle 09.11.20.jpg
      */}
      <div className="hidden xl:block relative w-full h-[600px]">
        <Image
          src="/images/mamma-desktop.jpg" // Sostituisci con il tuo path
          alt="Celebra la festa della mamma"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay Contenuto Desktop: Posizionato a sinistra */}
        <div className="absolute inset-0 flex flex-col justify-end p-20 container mx-auto">
          <div className="max-w-md text-white pb-10">
            <h2 className="text-lg font-bold uppercase tracking-[0.2em] mb-2">
              Celebra la festa della mamma
            </h2>
            <p className="text-sm mb-8 font-light italic">
              Regali da custodire per sempre
            </p>
            <Link 
              href="#" 
              className="inline-block bg-white text-black py-4 px-12 text-[11px] uppercase tracking-widest font-bold hover:bg-gray-200 transition"
            >
              Scopri ora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}