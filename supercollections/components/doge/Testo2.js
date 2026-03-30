import Image from "next/image";
import Link from "next/link";

export default function Testo2() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-gray-50 font-sans">
      {/* Sopratitolo */}
      <p className="text-gray-700 text-lg md:text-xl mb-4">
        Esplora <span className="font-bold">Venezia</span> con servizi di alto livello e competenza.
      </p>

      {/* Titolo Principale */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-800 leading-tight max-w-5xl mb-8">
        Qualità e Professionalità per il tuo{" "}
        <span className="text-[#801a57] font-bold">Tour a Venezia.</span>
      </h1>

      {/* Paragrafo Descrittivo */}
      <p className="text-gray-600 text-base md:text-lg max-w-4xl leading-relaxed">
        I nostri tour offrono un'esperienza unica, guidata da esperti che ti condurranno alla scoperta dei 
        tesori nascosti della Serenissima. Vivrai la città in modo autentico e coinvolgente.
      </p>
    </section>
  );
}