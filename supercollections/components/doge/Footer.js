import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-6 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Griglia: 1 colonna mobile, 4 su schermi XL */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 text-center xl:text-left">
          
          {/* 1. Logo e Indirizzo */}
          <div className="flex flex-col items-center xl:items-start">
            <img src="/images/doge/logo.png" alt="Logo" className="h-24 w-auto mb-6 object-contain" />
            <div className="text-gray-800">
              <h3 className="text-[#8c1c5c] font-bold text-xl mb-2">Il Doge di Venezia</h3>
              <p className="text-sm leading-relaxed">Via Treportina, 30 I-30013<br />Cavallino Treporti - Venezia</p>
            </div>
          </div>

          {/* 2. Contatti Prodotti */}
          <div>
            <h3 className="text-[#8c1c5c] font-bold text-lg mb-4 uppercase">Contatti per prodotti su misura</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>Tel: +39 041 530 23 63</p>
              <p>Fax: +39 041 530 40 16</p>
              <p className="font-bold">info@dogedivenezia.it</p>
            </div>
          </div>

          {/* 3. Contatti Individuali */}
          <div>
            <h3 className="text-[#8c1c5c] font-bold text-lg mb-4 uppercase">Contatti Individuali / Escursioni</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>Tel: +39 041 530 23 63</p>
              <p className="font-bold">api@dogedivenezia.it</p>
            </div>
          </div>

          {/* 4. Social e Pagamenti */}
          <div className="flex flex-col items-center xl:items-start space-y-8">
            <div>
              <h3 className="text-[#8c1c5c] font-bold text-lg mb-4">Seguici</h3>
              <div className="flex justify-center xl:justify-start gap-3">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* X */}
                <a href="#" className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768 M13.232 10.768L20 4"></path></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[#8c1c5c] font-bold text-lg mb-4">I nostri metodi di pagamento</h3>
              <div className="flex justify-center xl:justify-start">
                <img src="/images/doge/carte.png" alt="Pagamenti" className="h-10 w-auto border rounded-md p-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}