import Image from "next/image";
import Link from "next/link";

export default function CollezioniHighlight({ items }) {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex overflow-x-auto gap-6 pb-10 scrollbar-hide snap-x snap-mandatory">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[85vw] md:w-[45vw] xl:w-[32.5%] snap-start group"
            >
              {/* Immagine con Aspect Ratio Orizzontale */}
              <Link href="#" className="relative aspect-[3/2] block mb-6 overflow-hidden bg-[#f6f6f6]">
                <Image
                  src={item.src}
                  alt={item.titolo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Testi e Bottone Outline */}
              <div className="flex flex-col items-start space-y-3">
                <h3 className="text-[13px] md:text-[15px] font-bold uppercase tracking-[0.1em] text-black">
                  {item.titolo}
                </h3>
                <p className="text-[12px] md:text-[14px] text-gray-700 font-light leading-relaxed">
                  {item.desc}
                </p>
                <Link 
                  href="#" 
                  className="mt-4 inline-block border border-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
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