import Image from "next/image";

export default function Ogetti({ src, titolo }) {
  return (
    /* SINGOLO RIQUADRO 
       Nota: occupa il 100% dello spazio che il "genitore" gli assegna
    */
    <div className="flex flex-col items-center group cursor-pointer w-full">
      
      {/* Contenitore Immagine con effetto hover */}
      <div className="relative w-full aspect-square mb-3 md:mb-4 transition-transform duration-300 group-hover:-translate-y-2">
        <Image
          src={src || "/images/acqua.jpg"} // Usa la prop 'src'
          alt={titolo || "Prodotto"}
          fill
          className="object-contain" 
        />
      </div>

      {/* Etichetta Prodotto */}
      <h3 className="text-center text-xs md:text-sm lg:text-base font-bold text-gray-900 tracking-tight leading-snug uppercase">
        {titolo || "Categoria"}
      </h3>
      
    </div>
  );
}