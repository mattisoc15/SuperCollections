import Image from "next/image";

export default function Eventi2(props) {
  return (
    <section className="px-6 py-10">
      <div className="grid grid-cols-1 gap-8">
        <div className="group cursor-pointer">
          <div className="relative aspect-video mb-4 overflow-hidden bg-gray-100">
            <Image
              src={props.immagine}
              alt="Father and Son Weekend"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info Evento */}
          <div className="space-y-2">
            <p className="text-[11px] text-gray-500 uppercase font-medium tracking-wider">
              {props.paragrafo}
            </p>

            <h3 className="text-xl font-extrabold uppercase leading-tight tracking-tight">
              {props.titolo}
            </h3>

            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {props.paragrafo2}
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
