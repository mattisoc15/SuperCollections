import Image from 'next/image';

export default function Banner2(props) {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden rounded-[40px] shadow-lg">
      
      {/* Immagine di sfondo */}
      <Image
        src={props.src}
        alt={props.titolo}
        fill
        className="object-cover"
      />

      {/* Overlay scuro per far leggere il testo */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Box Testi */}
      <div className="absolute bottom-10 left-10 text-white right-10">
        
        <h2 className="text-3xl font-bold mb-2">
          {props.titolo} <span className="font-light uppercase text-xl">{props.sottotitolo}</span>
        </h2>
        
        <p className="text-lg mb-6 max-w-2xl">
          {props.descrizione}
        </p>

        <button className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full uppercase text-sm tracking-wider">
          {props.testoBottone}
        </button>
        
      </div>
    </div>
  );
}