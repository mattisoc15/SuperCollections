import Image from "next/image";
import Link from "next/link";

export default function Pulsantiera() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titolo */}
        <h2 className="text-5xl md:text-6xl font-black text-[#333333] mb-10 tracking-tight">
          Le nostre collezioni
        </h2>

        {/* Contenitore Pulsanti */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Uomo", "Donna", "Sport", "Heritage", "Sportswear"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="bg-[#333333] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-black transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}