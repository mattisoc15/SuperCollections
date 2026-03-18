import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white px-6 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Accordion / Menu Sezioni */}
        <div className="border-t border-gray-800">
          {["CORPORATE", "B2B", "PIÙ YAMAHA", "SUPPORTO"].map((item) => (
            <div
              key={item}
              className="flex justify-between items-center py-5 border-b border-gray-800 cursor-pointer hover:bg-white/5 px-2"
            >
              <span className="font-bold tracking-tighter text-lg">{item}</span>
              <span className="text-2xl font-light">+</span>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl">
            Conoscerai in anteprima le ultime offerte, gli eventi speciali, le
            nuove uscite e molto altro
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Inserisci la tua e-mail"
              className="w-full p-4 text-black outline-none focus:ring-2 focus:ring-[#D34127]"
            />
            <button
              type="submit"
              className="bg-[#D34127] hover:bg-[#b5351f] transition-colors py-4 px-8 font-bold uppercase tracking-widest text-sm"
            >
              Iscriviti
            </button>
          </form>
        </div>

        {/* Language Selector */}
        <div className="mt-10">
          <button className="flex items-center gap-2 border border-gray-700 bg-gray-900/50 px-4 py-2 rounded-md">
            <span className="text-sm">🇮🇹 Italy (Italian)</span>
          </button>
        </div>

        {/* Social Icons - Layout Circolare */}
        <div className="flex flex-wrap gap-3 mt-10">
          {/* Sostituisci i div con le tue icone effettive o Image */}
          {["ig", "fb", "tk", "in", "wa", "yt"].map((social) => (
            <div
              key={social}
              className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-gray-700 cursor-pointer uppercase text-[10px] font-bold"
            >
              {social}
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-[11px] text-gray-400">
          <p className="mb-6">
            © Copyright - 2026 Yamaha Motor Europe N.V. - All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 font-bold text-white uppercase tracking-tight underline underline-offset-4 decoration-gray-600">
            <Link href="/privacy">Informativa sulla privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/note-legali">Note legali</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
