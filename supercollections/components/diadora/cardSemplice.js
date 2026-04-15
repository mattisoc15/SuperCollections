import Image from "next/image";

export default function CardSemplice({ dati }) {
  return (
    <div className="flex-shrink-0 w-[180px] md:w-[220px] flex flex-col items-center group cursor-pointer snap-center">
      {/* Immagine con hover leggero */}
      <div className="relative w-full aspect-[4/3] mb-4">
        <Image
          src={dati.immagine}
          alt={dati.nome}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Nome Modello */}
      <h3 className="text-xl md:text-2xl font-bold text-[#333333] tracking-tight">
        {dati.nome}
      </h3>
    </div>
  );
}