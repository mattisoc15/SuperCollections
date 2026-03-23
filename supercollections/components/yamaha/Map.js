import Image from "next/image";

export default function Ogetti() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      
      {/* 1. LA MAPPA (Sfondo reale) */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Mappa Concessionari"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          // Usiamo OpenStreetMap che non richiede chiavi ed è sempre visibile
          src="https://www.openstreetmap.org/export/embed.html?bbox=9.0483,45.3942,9.3028,45.5312&layer=mapnik"
          className="w-full h-full grayscale-[30%] opacity-80"
        ></iframe>
        {/* Overlay per uniformare il colore come Yamaha */}
        <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
      </div>

      {/* 2. IL BOX DI RICERCA (Centrato e dritto) */}
      <div className="absolute inset-x-0 top-10 z-10 flex justify-center px-4">
        <div className="w-full max-w-4xl bg-white shadow-[0_10px_50px_rgba(0,0,0,0.2)] p-6 md:p-8 border-t-4 border-black">
          
          {/* Titolo con icona Pin */}
          <div className="flex items-center gap-3 mb-6">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="black" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
            </svg>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black leading-none">
              Trova il tuo concessionario
            </h2>
          </div>

          {/* Input di ricerca */}
          <div className="relative">
            <input
              type="text"
              placeholder="Immetti il tuo indirizzo o un codice postale"
              className="w-full py-4 px-5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black italic text-gray-500 font-light text-base"
            />
            
            {/* Icona Mirino (Localizzazione) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black hover:scale-110 transition-transform">
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 2v3m0 14v3m10-10h-3M5 12H2"></path>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}