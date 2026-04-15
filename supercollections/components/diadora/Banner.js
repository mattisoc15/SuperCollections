import Image from "next/image";

export default function Banner({ collezione, titolo, testoBottone, src }) {
  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] lg:h-screen bg-[#0a0a0a] overflow-hidden">
      <Image
        src={src}
        alt="Diadora Hero"
        fill
        priority
        className="object-cover 
          /* Immagine 1 (Medium): Focus sulla parte posteriore della scarpa (ritaglio come da tua foto) */
          object-[85%_center] 
          /* Immagine 2 (Desktop): Centra la scarpa per vederla tutta */
          lg:object-center"
      />
      
      {/* Overlay Testuale posizionato a sinistra come negli screenshot */}
      <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-8 md:p-16 z-20">
        <div className="max-w-2xl">
          <p className="text-white text-sm md:text-lg font-bold uppercase tracking-wide mb-2">
            {collezione}
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-black leading-none mb-8">
            {titolo}
          </h1>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            {testoBottone}
          </button>
        </div>
      </div>
    </div>
  );
}