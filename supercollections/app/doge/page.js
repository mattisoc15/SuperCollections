import Navbar from "@/components/doge/Navbar";
import Navbar2 from "@/components/doge/Navbar2";
import Banner from "@/components/doge/Banner";
import Testo from "@/components/doge/Testo";
import Card from "@/components/doge/Card";
import Card2 from "@/components/doge/Card2";
import Testo2 from "@/components/doge/Testo2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Banner />
      <Testo />
      
      <section className="w-full px-4 md:px-12 py-10 bg-gray-50">
        <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">
          <Card 
            immagine="/images/doge/burano.jpg" 
            titolo="Tour giornaliero in barca da Fusina: Murano, Burano e Torcello con guida a bordo e tempo libero"
            partenza="Fusina"
            durata="8h 30min"
            disponibilita="Disponibile"
            prezzo="45,00"
            mostraBadge={false}
          />

          <Card 
            immagine="/images/doge/murano.jpg"
            titolo="Tour in barca da Venezia: Murano e Burano con dimostrazione del vetro e tempo libero"
            partenza="venezzia"
            durata="4h 50min"
            disponibilita="Disponibile"
            prezzo="25,00"
            mostraBadge={false}
          />

          <Card 
            immagine="/images/doge/canale.jpg"
            titolo="Venezia dall'acqua: Un brindisi alla bellezza"
            partenza="Venezia"
            durata="1h 15min"
            disponibilita="Disponibile"
            prezzo="25,00"
            mostraBadge={false}
          />
        </div>
      </section>

      <Testo2 />

      <section className="w-full px-4 md:px-12 py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          
          <Card2 
            iconSrc="/images/doge/telefono.png"
            title="Prenotazione Istantanea"
            description="Prenota il tuo tour a Venezia in pochi click, senza attese."
          />

          <Card2 
            iconSrc="/images/doge/soldi.png"
            title="Miglior Prezzo Garantito"
            description="Offriamo i migliori prezzi per un'esperienza indimenticabile."
          />

          <Card2 
            iconSrc="/images/doge/carta.png"
            title="Pagamenti 100% Sicuri"
            description="Goditi il tuo tour con pagamenti sicuri e affidabili."
          />

          <Card2 
            iconSrc="/images/doge/ponte.png"
            title="Del Territorio"
            description="Veneziani da generazioni: passione e amore per la città."
          />

        </div>
      </section>
    </>
  );
}