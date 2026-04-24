import Image from "next/image";
import Navbar from "@/components/montblanc/Navbar";
import Banner from "@/components/montblanc/Banner";
import Oggetti from "@/components/montblanc/Oggetti"; // Importato come Oggetti

export default function Diadora() {
  return (
    <>
      <Navbar />
      <Banner />
      <Oggetti items={prodotti} />
    </>
  );
}

const prodotti = [
  { id: 1, nome: "Tote Montblanc Envelope", prezzo: "€ 1,600.00", src: "/images/montblanc/borsa.png" },
  { id: 2, nome: "Astuccio per 1 Strumento da Scrittura", prezzo: "€ 160.00", src: "/images/montblanc/astuccio.png" },
  { id: 3, nome: "Stilografica Meisterstück Classique", prezzo: "€ 850.00", src: "/images/montblanc/penna.png" },
  { id: 4, nome: "Borsa Weekender 43 in Denim 4810", prezzo: "€ 2,100.00", src: "/images/montblanc/borsa-scura.png" },
  { id: 5, nome: "Occhiali da Sole Quadrati", prezzo: "€ 390.00", src: "/images/montblanc/occhiale.png" },
  { id: 6, nome: "Bracciale Regolabile", prezzo: "€ 260.00", src: "/images/montblanc/bracciale.png" },
];