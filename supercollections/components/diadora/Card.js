import Image from "next/image";

export default function Card({ dati }) {
  return (
    // Il flex-shrink-0 è fondamentale qui per non far schiacciare la card
    <div className="w-[300px] md:w-[380px] flex-shrink-0 snap-start flex flex-col group cursor-pointer">
      <div className="relative aspect-square w-full bg-[#f6f6f6] overflow-hidden">
        {dati.isItaly && (
          <div className="absolute top-4 left-4 z-10 w-6 h-6">
             <Image src="/images/diadora/it.svg" alt="Italy" width={24} height={24} className="rounded-full" />
          </div>
        )}
        <Image
          src={dati.immagine}
          alt={dati.titolo}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="mt-4 px-1">
        <h3 className="font-bold text-sm uppercase tracking-tight">{dati.titolo}</h3>
        <p className="font-bold text-lg">€ {dati.prezzo}</p>
        <div className="flex justify-between text-[11px] text-gray-500 mt-2">
          <span>{dati.descrizione}</span>
          <span className="text-black font-medium">{dati.varianti}</span>
        </div>
      </div>
    </div>
  );
}