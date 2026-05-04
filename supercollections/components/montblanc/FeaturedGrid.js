import Image from "next/image";
import Link from "next/link";

export default function FeaturedGrid({ items }) {
  // Esempio struttura items:
  // [
  //   { id: 1, titolo: "HOMAGE TO HENRI MATISSE", desc: "Scopri la collezione...", btnText: "Esplora...", src: "/matisse.jpg" },
  //   { id: 2, titolo: "OROLOGI DI PREGIO", desc: "Ti sveliamo i nostri...", btnText: "Scopri", src: "/orologi.jpg" }
  // ]

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Grid: 
            - 1 colonna di base (mobile/tablet) -> Screenshot 1
            - xl:grid-cols-2 (desktop) -> Screenshot 2
        */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Contenitore Immagine */}
              <div className="relative aspect-video xl:aspect-square w-full overflow-hidden bg-[#f6f6f6] mb-6">
                <Image
                  src={item.src}
                  alt={item.titolo}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Contenuto Testuale */}
              <div className="flex flex-col items-start space-y-3">
                <h3 className="text-[14px] md:text-[16px] font-bold uppercase tracking-[0.15em] text-black">
                  {item.titolo}
                </h3>
                <p className="text-[12px] md:text-[14px] text-gray-700 font-light">
                  {item.desc}
                </p>
                
                {/* Bottone Stile Montblanc */}
                <Link 
                  href="#" 
                  className="mt-4 inline-block border border-black px-10 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
                >
                  {item.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}