import Image from "next/image";

export default function Card2(props) {
  return (
    <div className="bg-white rounded-[40px] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center border border-gray-50 h-full transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Icona dinamica da props */}
      <div className="relative w-16 h-16 mb-6">
        <Image 
          src={props.iconSrc} 
          alt={props.title} 
          fill 
          className="object-contain opacity-90"
        />
      </div>

      {/* Titolo Bordeaux/Viola */}
      <h3 className="text-[#801a57] text-xl font-bold mb-3 leading-tight">
        {props.title}
      </h3>

      {/* Descrizione dinamica */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        {props.description}
      </p>
    </div>
  );
}