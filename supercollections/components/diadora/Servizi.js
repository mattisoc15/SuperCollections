import Image from "next/image";
import Link from "next/link";

export default function Servizi() {
  return (
    <section className="w-full bg-[#F7F7F7] py-20 px-4 md:px-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Titolo Sezione */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#333333] tracking-tight">
            I nostri servizi
          </h2>
        </div>

        {/* Griglia dei Servizi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
          {/* Servizio 1: Spedizione */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-16 h-16 mb-6">
              <Image 
                src="/images/diadora/spedizione.png" // Assicurati che il percorso sia corretto
                alt="Spedizione" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 leading-tight max-w-[250px]">
              Spedizione on demand disponibile
            </h3>
            <Link 
              href="#" 
              className="text-sm md:text-base font-medium text-[#333333] underline underline-offset-[6px] decoration-1 hover:opacity-60 transition-opacity"
            >
              Scopri di più sulle spedizioni
            </Link>
          </div>

          {/* Servizio 2: Customer Service */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-16 h-16 mb-6">
              <Image 
                src="/images/diadora/servizio.png" 
                alt="Servizio Clienti" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 leading-tight max-w-[250px]">
              Servizio clienti sempre attivo
            </h3>
            <Link 
              href="#" 
              className="text-sm md:text-base font-medium text-[#333333] underline underline-offset-[6px] decoration-1 hover:opacity-60 transition-opacity"
            >
              Contatta il servizio clienti
            </Link>
          </div>

          {/* Servizio 3: Resi */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-16 h-16 mb-6">
              <Image 
                src="/images/diadora/reso.png" 
                alt="Resi" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4 leading-tight max-w-[250px]">
              Resi gratuiti entro 30 giorni
            </h3>
            <Link 
              href="#" 
              className="text-sm md:text-base font-medium text-[#333333] underline underline-offset-[6px] decoration-1 hover:opacity-60 transition-opacity"
            >
              Scopri di più sulla politica di reso
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}