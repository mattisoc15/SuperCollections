import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-gray-900">
        {/* Immagine di sfondo */}
        <Image
          src="/images/moto.webp"
          alt="Yamaha Tracer 9 GT+"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Contenuto */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20">
          <div className="max-w-[1400px] w-full mx-auto">
            <p className="text-white text-[10px] md:text-md font-[900] tracking-[0.3em] uppercase mb-1 drop-shadow-md">
              Ingrana la marcia verso il futuro
            </p>

            {/* mb-8 rimosso e sostituito con mb-5 per gli schermi md */}
            <h1 className="text-white text-3xl md:text-5xl font-[1000] italic tracking-tighter uppercase leading-[0.8] mb-8 md:mb-5 drop-shadow-2xl">
              Tracer 9 GT+
            </h1>

            {/* Pulsante visibile solo da md in su con spazio 5 */}
            <div className="hidden md:block">
              <Link
                href="/scopri"
                className="rounded-2xl inline-flex items-center gap-3 bg-white text-black text-[10px] md:text-xs font-black px-10 py-4 uppercase tracking-widest hover:bg-[#E60012] hover:text-white transition-all duration-300 group"
              >
                Scopri ora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3.5"
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
      </section>

      {/* Sezione Mobile (rimane invariata come da tua struttura) */}
      <div className="bg-gray-500 p-3 md:hidden">
        <Link
          href="/scopri"
          className="w-full justify-center rounded-2xl inline-flex items-center gap-3 bg-white text-black text-[10px] font-black px-6 py-3 uppercase tracking-widest hover:bg-[#E60012] hover:text-white transition-all duration-300 group"
        >
          Scopri ora
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
