import Image from "next/image";
import Navbar from "@/components/montblanc/Navbar";
import Banner from "@/components/montblanc/Banner";
import Oggetti from "@/components/montblanc/Oggetti";
import Card from "@/components/montblanc/Categorie";
import BannerMamma from "@/components/montblanc/BannerMamma";
import FeaturedGrid from "@/components/montblanc/FeaturedGrid";
import ViaggioIndimenticabile from "@/components/montblanc/ViaggioIndimenticabile";
import CollezioniHighlight from "@/components/montblanc/CollezioniHighlight";
import Footer from "@/components/montblanc/Footer";

export default function Diadora() {
  return (
    <>
      <Navbar />
      <Banner />
      <Oggetti items={prodotti} />
      <Card categorie={categorieMontblanc} />
      <BannerMamma />
      <FeaturedGrid items={prodottiMatisse} />
      <ViaggioIndimenticabile items={prodottiViaggio} />
      <CollezioniHighlight items={collezioniStory} />
      <Footer menu={footerMenu} />
    </>
  );
}

const prodotti = [
  {
    id: 1,
    nome: "Tote Montblanc Envelope",
    prezzo: "€ 1,600.00",
    src: "/images/montblanc/borsa.png",
  },
  {
    id: 2,
    nome: "Astuccio per 1 Strumento da Scrittura",
    prezzo: "€ 160.00",
    src: "/images/montblanc/astuccio.png",
  },
  {
    id: 3,
    nome: "Stilografica Meisterstück Classique",
    prezzo: "€ 850.00",
    src: "/images/montblanc/penna.png",
  },
  {
    id: 4,
    nome: "Borsa Weekender 43 in Denim 4810",
    prezzo: "€ 2,100.00",
    src: "/images/montblanc/borsa-scura.png",
  },
  {
    id: 5,
    nome: "Occhiali da Sole Quadrati",
    prezzo: "€ 390.00",
    src: "/images/montblanc/occhiale.png",
  },
  {
    id: 6,
    nome: "Bracciale Regolabile",
    prezzo: "€ 260.00",
    src: "/images/montblanc/bracciale.png",
  },
];

const categorieMontblanc = [
  { id: 1, titolo: "Penne di lusso", src: "/images/montblanc/lusso.jpg" },
  { id: 2, titolo: "Borse", src: "/images/montblanc/borse.jpg" },
  {
    id: 3,
    titolo: "Piccola Pelletteria",
    src: "/images/montblanc/sgorbio.jpg",
  },
  { id: 4, titolo: "Accessori", src: "/images/montblanc/accesori.jpg" },
  { id: 5, titolo: "Novità", src: "/images/montblanc/tracolla.jpg" },
  {
    id: 6,
    titolo: "Refill e Cancelleria",
    src: "/images/montblanc/quaderni.jpg",
  },
  { id: 7, titolo: "Tecnologia di lusso", src: "/images/montblanc/carta.jpg" },
  { id: 8, titolo: "Orologi", src: "/images/montblanc/orologio.jpg" },
];

const prodottiMatisse = [
  {
    id: 1,
    titolo: "HOMAGE TO HENRI MATISSE",
    desc: "Scopri la collezione che celebra la visione giocosa e rivoluzionaria di Matisse",
    btnText: "Esplora la collezione completa",
    src: "/images/montblanc/penne-fighe.jpeg",
  },
  {
    id: 2,
    titolo: "OROLOGI DI PREGIO",
    desc: "Ti sveliamo i nostri nuovi segnatempo",
    btnText: "Scopri",
    src: "/images/montblanc/figo.jpg",
  },
];

const prodottiViaggio = [
  {
    id: 1,
    nome: "Pochette in Pelle Sartorial",
    prezzo: "€ 690.00",
    src: "/images/montblanc/pochete-nera.png",
  },
  {
    id: 2,
    nome: "Stilografica Meisterstück Bordeaux 149",
    prezzo: "€ 1,350.00",
    src: "/images/montblanc/penna-nera.png",
  },
  {
    id: 3,
    nome: "Porta Quaderno Medio Montblanc Envelope",
    prezzo: "€ 520.00",
    src: "/images/montblanc/porta-quaderno.png",
  },
  {
    id: 4,
    nome: "Stilografica Meisterstück Placcata in Oro LeGrand",
    prezzo: "€ 890.00",
    src: "/images/montblanc/penna-rossa.png",
  },
  {
    id: 5,
    nome: "Portafoglio 10 Tasche con Portamonete",
    prezzo: "€ 460.00",
    src: "/images/montblanc/portafoglio-nero.png",
  },
  {
    id: 6,
    nome: "Astuccio per 1 Strumento High Artistry",
    prezzo: "€ 700.00",
    src: "/images/montblanc/porta-penna.png",
  },
];

const collezioniStory = [
  {
    id: 1,
    titolo: "PORTAFOGLI E PORTA CARTE",
    desc: "L'accessorio per eccellenza",
    btnText: "Acquista la collezione",
    src: "/images/montblanc/tavolo.jpeg",
  },
  {
    id: 2,
    titolo: "STARWALKER",
    desc: "Strumenti da scrittura sofisticati ispirati ai viaggi spaziali",
    btnText: "Acquista la collezione",
    src: "/images/montblanc/scrivere.jpg",
  },
  {
    id: 3,
    titolo: "GUIDA AI REGALI MONTBLANC",
    desc: "Regali per ogni traguardo",
    btnText: "Scopri di più",
    src: "/images/montblanc/cena.jpeg",
  },
];

const footerMenu = [
  {
    titolo: "Servizio Clienti",
    links: ["Contattaci", "FAQ", "Spedizioni", "Resi e Sostituzioni", "Garanzia e Riparazioni", "Trova una Boutique"]
  },
  {
    titolo: "Categorie",
    links: ["Strumenti da Scrittura", "Pelletteria", "Orologi", "Accessori", "Tecnologia", "Nuovi Arrivi"]
  },
  {
    titolo: "Il mondo Montblanc",
    links: ["La nostra storia", "Sostenibilità", "Cultura della Scrittura", "Careers", "Newsroom"]
  },
  {
    titolo: "Iscriviti alla Newsletter",
    links: ["Iscriviti ora per ricevere aggiornamenti sulle nuove collezioni e servizi esclusivi."]
  }
];