import Image from "next/image";
import Link from "next/link";

export default function testo() {
  return (
    <section className="w-full px-6 py-12 md:px-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Sopratitolo */}
        <p className="text-gray-700 text-lg md:text-xl font-medium tracking-tight">
          Escursioni Giornaliere in barca con guida a bordo
        </p>

        {/* Titolo Principale */}
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
          Nessuno ti mostrerà <span className="text-[#9d2d73]">Venezia</span> come noi
        </h2>

        {/* Descrizione / Paragrafo */}
        <div className="mt-4 space-y-4 max-w-4xl">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
            Lasciati trasportare da una brezza marina mentre ammiri i palazzi storici, 
            i ponti iconici e i tesori nascosti della città. 
            Vivi l&apos;emozione di vedere <span className="text-[#9d2d73] font-semibold">Venezia</span> dal 
            suo elemento più autentico: l&apos;acqua.
          </p>
        </div>

      </div>
    </section>
  );
}