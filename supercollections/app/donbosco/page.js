import Image from "next/image";
import Navbar from "@/components/donbosco/Navbar";
import FeaturedGrid from "@/components/donbosco/Banner";
import Testo from "@/components/donbosco/Testo";
import Oggetti from "@/components/donbosco/Oggetti";
import Footer from "@/components/donbosco/Footer";

export default function Diadora() {
  return (
    <>
      <Navbar />
      <Testo />
      <FeaturedGrid items={prodottiMatisse} />
      <Oggetti items={prodotti} />
      <Footer />
    </>
  );
}

const prodottiMatisse = [
  {
    id: 1,
    titolo: "Le Origini e la Cartolina Storica",
    desc: "Questa sezione introduce la nascita dell'oratorio, citando i primi passi mossi dai Salesiani a San Donà. L'immagine centrale è una preziosa cartolina d'epoca scritta a mano, datata primi del '900, che testimonia i primi contatti e l'affetto della comunità verso l'istituzione.",
    btnText: "Scopri di più",
    src: "/images/donbosco/calcio-oratorio.jpg",
  },
  {
    id: 2,
    titolo: "Documenti e Cronaca Storica",
    desc: "Un lungo testo descrittivo che funge da 'cuore' storico della pagina. Include riferimenti a date chiave, come l'arrivo ufficiale nel 1920, e i primi verbali. L'immagine mostra una scansione di un documento d'archivio stampato, che dettaglia i regolamenti o le cronache dell'epoca.",
    btnText: "Scopri di più",
    src: "/images/donbosco/campo.jpg",
  },
  {
    id: 3,
    titolo: "L'Architettura e le Prime Strutture",
    desc: "Una fotografia d'epoca in bianco e nero mostra l'edificio originale dell'Oratorio. La struttura appare solida e imponente, circondata da ampi spazi aperti, tipici del paesaggio rurale di San Donà di quegli anni.",
    btnText: "Scopri di più",
    src: "/images/donbosco/casone.jpg",
  },
  {
    id: 4,
    titolo: "La Comunità e i Direttori",
    desc: "Due foto storiche mostrano grandi gruppi di ragazzi e fedeli raccolti sotto i portici e nel cortile. Accanto, è presente una tabella cronologica che elenca tutti i Direttori dell'Oratorio dal 1921 fino ai giorni nostri (da Don Giovanni Lucchesi a Don Nicola Munari).",
    btnText: "Scopri di più",
    src: "/images/donbosco/lettera.jpg",
  },
  {
    id: 5,
    titolo: "L'Oratorio Oggi: Sport e Futuro",
    desc: "L'ultima parte della pagina si sposta sulla modernità. Una foto notturna a colori mostra l'inaugurazione del nuovo campo da calcio in erba sintetica, con autorità e giovani atleti schierati. Il testo descrive l'importanza dello sport come strumento educativo attuale.",
    btnText: "Scopri di più",
    src: "/images/donbosco/oratorio-1930.jpg",
  },
];

const prodotti = [
  {
    id: 1,
    nome: "Un Secolo di Storia",
    src: "/images/donbosco/ogetto1.jpg",
  },
  {
    id: 2,
    nome: "Il Metodo di Don Bosco",
    src: "/images/donbosco/ogetto2.webp",
  },
  {
    id: 3,
    nome: "Il Cortile e lo Sport",
    src: "/images/donbosco/ogetto3.jpg",
  },
  {
    id: 4,
    nome: "Una Guida Costante",
    src: "/images/donbosco/ogetto4.jpeg",
  },
];
