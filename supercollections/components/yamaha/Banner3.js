import Image from "next/image";
import Link from "next/link";

export default function Banner3() {
  return (
    <div className="w-full flex flex-col xl:flex-row bg-white overflow-hidden">
      {/* SEZIONE IMMAGINE: Sopra su mobile, a destra su XL */}
      {/* L'ordine HTML è invertito usando order-first/last o semplicemente spostando i div */}
      <div className="relative w-full xl:w-[60%] h-[300px] md:h-[450px] xl:h-[600px] xl:order-2">
        <Image
          src="/images/moto.webp"
          alt="Destination Yamaha Motor"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* SEZIONE TESTO: Sotto su mobile, a sinistra su XL */}
      <div className="w-full xl:w-[40%] flex flex-col justify-center py-10 xl:py-0 xl:pr-16 xl:order-1">
        <h2 className="text-[32px] md:text-[45px] xl:text-[60px] font-[1000] uppercase leading-[0.9] tracking-tighter text-black italic mb-4">
          Un mondo di <br /> avventure <br /> per tutti
        </h2>

        <h3 className="text-[#E60012] font-black uppercase tracking-widest text-sm mb-4">
          Destination Yamaha Motor
        </h3>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
          Destination Yamaha Motor è una piattaforma di viaggio online rivolta a
          tutti coloro che hanno una passione per l'avventura e il desiderio di
          scoprire nuove ed emozionanti esperienze con i mezzi Yamaha.
        </p>

        <div>
          <Link
            href="/learn-more"
            className="inline-flex items-center gap-4 bg-black text-white text-xs font-bold px-10 py-5 uppercase tracking-[0.2em] hover:bg-[#E60012] transition-all duration-300 group"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
