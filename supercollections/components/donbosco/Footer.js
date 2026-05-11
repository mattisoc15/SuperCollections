import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-6 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Griglia: 1 colonna mobile, 4 su schermi XL */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 text-center xl:text-left">
          
          {/* 1. Logo e Indirizzo */}
          <div className="flex flex-col items-center xl:items-start">
            <img src="/images/donbosco/logo.jpg" alt="Logo" className="h-24 w-auto mb-6 object-contain" />
          </div>

          {/* 2. Contatti Prodotti */}
          <div>
            <h3 className="text-[#8c1c5c] font-bold text-lg mb-4 uppercase">Contatti per Informazioni</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>Tel: +39 041 530 23 63</p>
              <p>Fax: +39 041 530 40 16</p>
              <p className="font-bold">info@dogedivenezia.it</p>
            </div>
          </div>

          {/* 3. Contatti Individuali */}
          <div>
            <h3 className="text-[#8c1c5c] font-bold text-lg mb-4 uppercase">Contatti Segreteria</h3>
            <div className="text-gray-700 text-sm space-y-2">
              <p>Tel: +39 041 530 23 63</p>
              <p className="font-bold">segreteria@donboscosandona.it</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}