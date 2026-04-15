import Image from "next/image";
import Link from "next/link";

export default function Card({dati}) {
  return (
    <div className="flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden h-full w-[85vw] md:w-[380px] flex-shrink-0 snap-start">
      <div className="relative w-full h-52">
        <Image
          src={dati.immagine}
          alt={dati.titolo}
          fill
          className="object-cover"
        />
        {dati.mostraBadge && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#9d007d] text-white text-[10px] font-bold py-2 px-4 uppercase">
            ⏱ {dati.testoBadge}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 min-h-[3.5rem] leading-tight">
          {dati.titolo}
        </h3>

        <div className="space-y-1 text-sm text-gray-600 mb-6">
          <p>
            Partenza:
            <span className="font-bold text-gray-900">{dati.partenza}</span>
          </p>
          <p>
            Durata:
            <span className="font-bold text-gray-900">{dati.durata}</span>
          </p>
          <p>
            Disponibile dal:
            <span className="font-bold text-gray-900">
              - {dati.disponibilita}
            </span>
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Link
            href="#"
            className="bg-[#9d007d] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase hover:bg-[#800066] transition-colors"
          >
            Prenota
          </Link>
          <div className="text-right">
            <span className="block text-[10px] text-gray-400 uppercase">
              Da
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {dati.prezzo} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
