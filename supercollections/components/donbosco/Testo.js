import Image from "next/image";
import Link from "next/link";

export default function testo() {
  return (
    <section className="text-center w-full px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Titolo Principale */}
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">
          Nessuno ti mostrerà <span className="text-[#9d2d73]">L'oratorio</span> come noi
        </h2>

        {/* Descrizione / Paragrafo */}
        <div className="mt-4 space-y-4 max-w-4xl">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
            Lasciati trasportare da una brezza cristiana mentre ammiri l'oratorio Don Bosco
            Vivi l&apos;emozione di vedere <span className="text-[#9d2d73] font-semibold">L'oratorio</span> dal 
            suo elemento più autentico: la cristianita
          </p>
        </div>

      </div>
    </section>
  );
}