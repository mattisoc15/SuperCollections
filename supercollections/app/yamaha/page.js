import Image from "next/image";
import Banner from "@/components/yamaha/Banner";
import Card from "@/components/yamaha/Card";
import Ogetti from "@/components/yamaha/Ogetti";
import Esplora from "@/components/yamaha/Esplora";
import Eventi from "@/components/yamaha/Eventi";
import Banner2 from "@/components/yamaha/Banner2";
import Banner3 from "@/components/yamaha/Banner3";
import Eventi2 from "@/components/yamaha/Eventi2";
import Map from "@/components/yamaha/Map";
import Navbar from "@/components/yamaha/Navbar";
import Footer from "@/components/yamaha/Footer";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-20 md:px-10 xl:px-15 2xl:px-40 md:mx-10 xl:mx-15 2xl:mx-40 pb-10">
        <Card
          titolo="vantaggi moto e scooter"
          paragrafo="La rata su misura accende la strada"
          paragrafo2="Adrenalina, libertà e prestazioni per chi ama guidare senza limiti. Agilità, comfort e praticità per chi vuole muoversi velocemente in città."
          immagine="/images/yamaha/moti.webp"
        />
        <Card
          titolo="INCENTIVI SATISFACTION SEA"
          paragrafo="vento in poppa con gli"
          paragrafo2="Diamo il via alla stagione 2026 con gli Incentivi Satisfaction Sea su tutta la gamma dei fuoribordo, dal piccolo 2,5 HP al 300 HP."
          immagine="/images/yamaha/ancora.webp"
        />
        <Card
          titolo="SPIRIT OF CHALLENGE"
          paragrafo="20 giugno 2026"
          paragrafo2="Dopo il successo dello scorso anno, torniamo a Varano per una giornata imperdibile."
          immagine="/images/yamaha/evento.webp"
        />
        <Card
          titolo="NUOVO TRICITY 300"
          paragrafo="FAI LA SCELTA GIUSTA"
          immagine="/images/yamaha/tricity.webp"
        />
      </div>

      <h1 className=" text-3xl font-bold mt-5 mx-10 ">Esplora Yamaha</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10">
        <Ogetti titolo="Moto" immagine="/images/yamaha/125.jpg" />
        <Ogetti titolo="Scooters" immagine="/images/yamaha/tmax.jpg" />
        <Ogetti titolo="Motori fuoribordo" immagine="/images/yamaha/motore.jpg" />
        <Ogetti titolo="Moto d'acqua" immagine="/images/yamaha/acqua.jpg" />
        <Ogetti titolo="Package" immagine="/images/yamaha/gommone.jpg" />
        <Ogetti titolo="ATV & Side dy Side" immagine="/images/yamaha/quad.jpg" />
        <Ogetti titolo="Veicoli Leggeri" immagine="/images/yamaha/cart.jpg" />
        <Ogetti titolo="Accessori" immagine="/images/yamaha/scarico.jpg" />
        <Ogetti
          titolo="Abbigliamento & Merchandise"
          immagine="/images/yamaha/abbigliamento.jpg"
        />
        <Ogetti titolo="Oli Per Motori" immagine="/images/yamaha/olio.jpg" />
        <Ogetti titolo="Pulizia & Protezione" immagine="/images/yamaha/pulizia.jpg" />
      </div>

      <div className="mt-16 px-4 sm:px-10 lg:px-20 max-w-[1500px] mx-auto">
        <Banner2 immagine="/images/yamaha/tanti.webp" />
      </div>

      <div className="bg-gray-100 py-20 px-5 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 w-full">
        <div className="w-full md:w-[450px]">
          <Eventi titolo="Ténéré Spirit" />
        </div>
        <div className="w-full md:w-[450px]">
          <Eventi titolo="INDOSSA LA STORIA" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="w-1/2 md:w-1/4 xl:w-1/6">
          <Esplora
            titolo="Insieme in ogni avventura"
            immagine="/images/yamaha/full.png"
          />
        </div>
        <div className="w-1/2 md:w-1/4 xl:w-1/6">
          <Esplora titolo="partner tecnici" immagine="/images/yamaha/allenatore.jpg" />
        </div>
        <div className="w-1/2 md:w-1/4 xl:w-1/6">
          <Esplora
            titolo="noleggia la tua yamaha"
            immagine="/images/yamaha/telefono.jpg"
          />
        </div>
      </div>
      <div className="flex justify-between items-end mb-8 mt-10 mx-10">
        <h2 className="text-3xl font-bold uppercase tracking-tighter">
          Prossimi Eventi
        </h2>
        <a href="#" className="text-sm font-semibold hover:underline">
          Visualizza tutto →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-4">
        <Eventi2
          titolo="vantaggi moto e scooter"
          paragrafo="28 – 29 Mar 2026Concessionarie Ufficiali Yamaha"
          paragrafo2="Inauguriamo la stagione con un Open Weekend in tutta Italia. Sabato 28 e Domenica 29 Marzo le"
          immagine="/images/yamaha/yamaha.jpg"
        />
        <Eventi2
          titolo="vantaggi moto e scooter"
          paragrafo="28 – 29 Mar 2026Alassio (SV), Campionato Italiano Moto"
          paragrafo2="Prima tappa per il Challenge riservato al Ténéré 700 all’interno del Campionato Italiano Motorally,"
          immagine="/images/yamaha/off.jpg"
        />
        <Eventi2
          titolo="vantaggi moto e scooter"
          paragrafo="18 – 19 Apr 2026Bobbio (PC)"
          paragrafo2="L'HAT Adventourfest è un evento dedicato agli appassionati di mototurismo-avventura. Una grande"
          immagine="/images/yamaha/capanna.png"
        />
      </div>

      <div className="mt-12 md:mt-24 px-6 md:px-12 xl:px-20 max-w-[1700px] mx-auto">
        <Banner3 />
      </div>
      <div className="mx-5 mt-5 mb-10">
        <Banner2 immagine="/images/yamaha/vecchia.webp" />
      </div>
      <Map />
      <Footer></Footer>
    </>
  );
}
