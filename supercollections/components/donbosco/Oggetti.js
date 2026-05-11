import Image from "next/image";
import Link from "next/link";

export default function Oggetti({ items }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] mb-12 text-gray-900">
          Informazioni generali
        </h2>

        {/* Contenitore Scrollabile */}
        <div className="flex overflow-x-auto gap-8 pb-10 scrollbar-hide snap-x snap-mandatory">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[70vw] md:w-[30vw] xl:w-[16%] snap-start group"
            >
              {/* Aspect Ratio modificato per un effetto più "schiacciato" */}
              <Link href="#" className="relative aspect-[3/2] block mb-6 overflow-hidden bg-gray-50">
                <Image
                  src={item.src}
                  alt={item.nome}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1280px) 30vw, 16vw"
                  /* 'object-cover' assicura che l'immagine riempia il nuovo formato senza deformarsi */
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Dettagli */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-[11px] md:text-[12px] font-medium leading-tight tracking-tight text-gray-800 uppercase min-h-[40px]">
                  {item.nome}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}