import Image from "next/image";
import Link from "next/link";

export default function Oggetti({ items }) {
  return (
    <section className="bg-[#f7f5f0] py-16 px-6">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] mb-12 text-gray-900">
          Look di tendenza per la nuova stagione
        </h2>

        {/* Contenitore Scrollabile */}
        <div className="flex overflow-x-auto gap-8 pb-10 scrollbar-hide snap-x snap-mandatory">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[70vw] md:w-[30vw] xl:w-[16%] snap-start group"
            >
              {/* Immagine */}
              <Link href="#" className="relative aspect-[4/5] block mb-6 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.nome}
                  fill
                  className="object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Dettagli */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-[11px] md:text-[12px] font-medium leading-tight tracking-tight text-gray-800 uppercase min-h-[40px]">
                  {item.nome}
                </h3>
                <p className="text-[12px] md:text-[14px] font-bold text-black">
                  {item.prezzo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}