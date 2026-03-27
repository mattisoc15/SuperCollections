import Navbar from "@/components/doge/Navbar";
import Navbar2 from "@/components/doge/Navbar2";
import Banner from "@/components/doge/Banner";
import Testo from "@/components/doge/Testo";
import Card from "@/components/doge/card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Banner />
      <Testo />
      
      <section className="w-full px-4 md:px-12 py-10 bg-gray-50">
        {/* Contenitore Swipe: overflow-x-auto permette lo scorrimento, snap-x l'aggancio */}
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
    </>
  );
}