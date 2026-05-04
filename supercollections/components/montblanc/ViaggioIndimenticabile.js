import Image from "next/image";
import Link from "next/link";

export default function ViaggioIndimenticabile({ items }) {
  return (
    <section className="bg-[#f7f5f0] py-20 px-6">
      <div className="max-w-[1800px] mx-auto flex flex-col items-center">
        
        {/* Titolo Sezione */}
        <div className="w-full mb-12">
          <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
            L'inizio di un viaggio indimenticabile
          </h2>
        </div>

        {/* Contenitore Scrollabile */}
        <div className="flex overflow-x-auto w-full gap-8 pb-10 scrollbar-hide snap-x snap-mandatory">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[75vw] md:w-[31%] xl:w-[15.5%] snap-start group"
            >
              {/* Immagine Prodotto */}
              <Link href="#" className="relative aspect-[4/5] block mb-6 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.nome}
                  fill
                  className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Info Prodotto */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-[11px] md:text-[12px] font-medium leading-tight tracking-tight text-gray-800 min-h-[40px]">
                  {item.nome}
                </h3>
                <p className="text-[12px] md:text-[14px] font-bold text-black">
                  {item.prezzo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottone "Scopri di più" centrato */}
        <div className="mt-8">
          <Link 
            href="#" 
            className="inline-block border border-black px-16 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            Scopri di più
          </Link>
        </div>

      </div>
    </section>
  );
}