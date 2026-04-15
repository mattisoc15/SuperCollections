import Navbar from "@/components/diadora/Navbar";
import Banner from "@/components/diadora/Banner";
import Pulsantiera from "@/components/diadora/Pulsantiera";
import Card from "@/components/diadora/Card";
import CardSemplice from "@/components/diadora/cardSemplice";
import Servizi from "@/components/diadora/Servizi";
import Image from "next/image";

export default function Diadora() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Banner
          collezione={datiBanner.collezione}
          titolo={datiBanner.titolo}
          src={datiBanner.src}
          testoBottone={datiBanner.testoBottone}
        />

        <Pulsantiera></Pulsantiera>

        <Banner
          collezione={datiBanner1.collezione}
          titolo={datiBanner1.titolo}
          src={datiBanner1.src}
          testoBottone={datiBanner1.testoBottone}
        />

        <section className="w-full bg-white pt-16 pb-8 px-4 md:px-12">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-baseline gap-x-12 gap-y-6">
            {/* Testo Attivo (Sottolineato) */}
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-[#333333] pb-2 border-b-[5px] border-[#333333]">
                Lifestyle: nuove ispirazioni
              </h2>
            </div>

            {/* Testo Inattivo (Grigio) */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#bcbcbc]">
                Sport: nuove icone
              </h2>
            </div>
          </div>
        </section>

      <section className="w-full py-12">
        {/* Contenitore dello scroll */}
        <div className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-10 snap-x snap-mandatory no-scrollbar">
          <Card dati={scarpa1} />
          <Card dati={scarpa2} />
          <Card dati={scarpa3} />
          <Card dati={scarpa4} />
        </div>
      </section>

      <section className="w-full py-20 bg-[#f9f9f9]">
        {/* Titolo nel Page come richiesto */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#333333] tracking-tight">
            Lifestyle classics
          </h2>
        </div>

        {/* Metodo Scroll Orizzontale */}
        <div 
          className="flex gap-8 md:gap-16 overflow-x-auto px-8 md:px-20 pb-10 snap-x snap-mandatory no-scrollbar justify-start md:justify-center"
        >
          <CardSemplice dati={classico1} />
          <CardSemplice dati={classico2} />
          <CardSemplice dati={classico3} />
          <CardSemplice dati={classico4} />
          <CardSemplice dati={classico5} />
        </div>
      </section>

      <Banner
          collezione={datiBanner2.collezione}
          titolo={datiBanner2.titolo}
          src={datiBanner2.src}
          testoBottone={datiBanner2.testoBottone}
        />

<section className="w-full bg-white pt-16 pb-8 px-4 md:px-12">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-baseline gap-x-12 gap-y-6">
            {/* Testo Inattivo (Grigio) */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-black">
                Potrebbe interessarti
              </h2>
            </div>
          </div>
        </section>

      <section className="w-full py-12">
        {/* Contenitore dello scroll */}
        <div className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-10 snap-x snap-mandatory no-scrollbar">
          <Card dati={scarpa1} />
          <Card dati={scarpa2} />
          <Card dati={scarpa3} />
          <Card dati={scarpa4} />
        </div>
      </section>
      <Servizi></Servizi>
      </div>
    </>
  );
}

const datiBanner = {
  collezione: "Running collection",
  titolo: "Il cuore del running italiano",
  testoBottone: "Scopri Atomo Star",
  src: "/images/diadora/scarpaverde.jpg",
};
const datiBanner1 = {
  collezione: "Heritage collection",
  titolo: "Oltre la Pista",
  testoBottone: "Scopri Equipe Revenge",
  src: "/images/diadora/cinese.jpg",
};
const datiBanner2 = {
  collezione: "Calcio",
  titolo: "Made in Montebelluna, dal 1984",
  testoBottone: "Scopri Brasil Icon",
  src: "/images/diadora/scarpanera.jpg",
};


const scarpa1 = {
  immagine: "/images/diadora/scarpe/1.jpg",
  titolo: "PRESTIGE AGED ITALIA",
  prezzo: "230,00",
  descrizione: "Sneaker Heritage in pell...",
  varianti: "2 Colori",
  isItaly: true
};

const scarpa2 = {
  immagine: "/images/diadora/scarpe/2.jpg",
  titolo: "PRESTIGE HIGH METAL USED",
  prezzo: "200,00",
  descrizione: "Sneaker Heritage in pell...",
  varianti: "1 Colore",
  isItaly: false
};

const scarpa3 = {
  immagine: "/images/diadora/scarpe/3.jpg",
  titolo: "MYTHOS STAR LEA",
  prezzo: "170,00",
  descrizione: "Sneaker sportiva in pelle...",
  varianti: "1 Colore",
  isItaly: false
};

const scarpa4 = {
  immagine: "/images/diadora/scarpe/4.jpg",
  titolo: "GOLD INDOOR",
  prezzo: "140,00",
  descrizione: "Sneaker terrace in pelle...",
  varianti: "3 Colori",
  isItaly: false
};

const classico1 = {
  immagine: "/images/diadora/scarpe/5.png",
  nome: "Prestige",
};

const classico2 = {
  immagine: "/images/diadora/scarpe/4.png",
  nome: "Trainer",
};

const classico3 = {
  immagine: "/images/diadora/scarpe/3.png",
  nome: "B.560",
};

const classico4 = {
  immagine: "/images/diadora/scarpe/2.png",
  nome: "B.Elite",
};

const classico5 = {
  immagine: "/images/diadora/scarpe/1.png",
  nome: "Game",
};