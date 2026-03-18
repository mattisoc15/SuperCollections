import Image from "next/image";

export default function Eventi2() {
  return (
    <section className="px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group cursor-pointer">
          <div className="relative aspect-video mb-4 overflow-hidden bg-gray-100">
            <Image
              src="/images/fuori.png"
              alt="Father and Son Weekend"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info Evento */}
          <div className="space-y-2">
            <p className="text-[11px] text-gray-500 uppercase font-medium tracking-wider">
              21 – 22 Mar 2026 • Enduro Republic - Grazzan...
            </p>

            <h3 className="text-xl font-extrabold uppercase leading-tight tracking-tight">
              Father&Son Weekend
            </h3>

            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              Due giorni speciali pensati per condividere la passione per le due
              ruote: padre e figlio potranno vivere insieme un’esperienza
              unica...
            </p>

            <div className="pt-2">
              <span className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Scopri di più <span className="text-lg">→</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
