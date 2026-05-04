import Link from "next/link";

export default function Footer({ menu }) {
  return (
    <footer className="bg-white text-black pt-16 pb-12 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Griglia Principale: 
            - 1 colonna su schermi medi (MD) in giù
            - 4 colonne su schermi XL
        */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 border-b border-gray-200 pb-16">
          {menu.map((sezione, index) => (
            <div key={index} className="flex flex-col space-y-6">
              {/* Titolo Sezione: Nero, Bold, Spaziato */}
              <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-black">
                {sezione.titolo}
              </h4>
              
              {/* Lista Link: Grigio scuro/Nero */}
              <ul className="flex flex-col space-y-4">
                {sezione.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href="#" 
                      className="text-[12px] md:text-sm text-gray-600 hover:text-black transition-colors font-light"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Parte Inferiore: Copyright e Località */}
        <div className="mt-10 flex flex-col xl:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-wrap justify-center xl:justify-start gap-6 text-[10px] uppercase tracking-[0.15em] text-gray-400">
            <span>© 2026 Montblanc</span>
            <Link href="#" className="hover:text-black transition-colors">Note Legali</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Condizioni di Vendita</Link>
          </div>

          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
            Italia / Italiano
          </div>
        </div>

      </div>
    </footer>
  );
}