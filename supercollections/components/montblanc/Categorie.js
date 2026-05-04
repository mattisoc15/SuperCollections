import Image from "next/image";
import Link from "next/link";

export default function Categorie({ categorie }) {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-[1800px] mx-auto">
        {/* Griglia:
          - grid-cols-2: 2 colonne da mobile fino a schermi medi (Immagine 1)
          - xl:grid-cols-4: 4 colonne da schermi XL in su (Immagine 2)
        */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-12">
          {categorie.map((cat) => (
            <Link key={cat.id} href={cat.url || "#"} className="group flex flex-col items-center">
              {/* Contenitore Immagine */}
              <div className="relative aspect-square w-full bg-[#f6f6f6] overflow-hidden mb-4">
                <Image
                  src={cat.src}
                  alt={cat.titolo}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Titolo Categoria */}
              <h3 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-center text-black">
                {cat.titolo}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}