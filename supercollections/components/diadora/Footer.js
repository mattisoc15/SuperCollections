import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black px-4 py-10 md:px-10 border-t border-gray-200 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Sezione Superiore: Newsletter + Colonne Link */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Newsletter e Social */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-4">Iscriviti alla newsletter</h3>
            <p className="text-sm mb-4">
              Per te il 15% di sconto* sul primo acquisto.<br />
              <span className="italic text-xs text-gray-600">
                *I prodotti scontati e la collezione running sono esclusi dalla promozione.
              </span>
            </p>
            
            <div className="relative max-w-sm mb-6">
              <input 
                type="email" 
                placeholder="Inserisci il tuo indirizzo e-mail" 
                className="w-full border border-gray-400 rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-black"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#333] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition-colors">
                <span className="sr-only">Invia</span>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.59Z" />
                </svg>
              </button>
            </div>

            {/* Social Icons (Placeholder) */}
            <div className="flex space-x-6 text-xl">
              <i className="cursor-pointer"></i>
              <i className="cursor-pointer"></i>
              <i className="cursor-pointer"></i>
              <i className="cursor-pointer text-2xl"></i>
            </div>
          </div>

          {/* Colonne Link - Assistenza */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2">Assistenza</h4>
            <ul className="text-sm space-y-2">
              <li>Dashboard assistenza</li>
              <li>Contattaci</li>
              <li>Il tuo account</li>
              <li>Traccia il tuo ordine</li>
              <li>Spedizioni e Consegne</li>
              <li>Resi e Rimborsi</li>
              <li>Pagamenti e Sicurezza</li>
              <li>Registrazione e Ordini</li>
              <li>Sicurezza prodotto</li>
              <li>Avvisi e richiami prodotto</li>
              <li>Dichiarazione di Accessibilità</li>
            </ul>
          </div>

          {/* Colonne Link - Informazioni su */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2">Informazioni su</h4>
            <ul className="text-sm space-y-2">
              <li>Guida alle taglie</li>
              <li>Lavora con noi</li>
              <li>Area Download</li>
              <li>Corporate B2B</li>
              <li>Store Locator</li>
              <li>Dichiarazioni di conformità e Note Informative</li>
              <li>Bilanci di Sostenibilità - Archivio</li>
              <li>Packaging Info</li>
            </ul>
          </div>

          {/* Colonne Link - World */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2">World</h4>
            <ul className="text-sm space-y-2">
              <li>Culture</li>
              <li>Diadora World</li>
              <li>Sostenibilità</li>
              <li>Tecnologie</li>
              <li>Atleti ed Atlete</li>
              <li>Sneaker Agenda</li>
            </ul>
          </div>

          {/* Colonne Link - Shortcuts */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2 text-gray-400 md:text-black">Shortcuts</h4>
            <ul className="text-sm space-y-2">
              <li>Stratozero</li>
              <li>Stratouno: capi senza cuciture</li>
              <li>Fibrazero</li>
              <li>Abbigliamento Termico</li>
              <li>Scarpe Made in Italy</li>
              <li>Scarpe Trail Running</li>
              <li>Scarpe Bianche</li>
              <li>Scarpe Nere</li>
              <li>Equipe</li>
              <li>B.560</li>
              <li>Mercury</li>
              <li>Mythos Propulsion 280</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Sezione Inferiore: Recensioni e Pagamenti */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Valutazione Feedaty */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400 text-sm">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="font-bold text-sm">4.7/5</span>
            <span className="text-xs text-gray-500">Valutazione media Feedaty su 15379 recensioni</span>
          </div>

          {/* Metodi di Pagamento */}
          <div className="flex flex-wrap justify-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all">
            {/* Sostituisci questi con i loghi reali o componenti Image */}
            <span className="font-bold italic text-blue-800">VISA</span>
            <span className="font-bold italic">Mastercard</span>
            <span className="font-bold italic text-blue-600">AMEX</span>
            <span className="font-bold italic">DISCOVER</span>
            <span className="font-bold italic text-blue-400">G Pay</span>
            <span className="font-bold italic">Klarna</span>
            <span className="font-bold italic text-blue-500">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}