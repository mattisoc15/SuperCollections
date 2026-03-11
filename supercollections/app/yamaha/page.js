import Image from "next/image";
import Banner from "@/components/yamaha/Banner";
import Card from "@/components/yamaha/Card";
import Ogetti from "@/components/yamaha/Ogetti";
import Esplora from "@/components/yamaha/Esplora";
import Eventi from "@/components/yamaha/Eventi";

export default function Home() {
  return (
   <>
<Banner></Banner>
<div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-20 md:px-10 xl:px-15 2xl:px-40 md:mx-10 xl:mx-15 2xl:mx-40 pb-10">
  <Card />
  <Card />
  <Card />
  <Card />
</div>

<h1 className=" text-3xl font-bold mt-5  ">Esplora Yamaha</h1>

<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-10">
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
  <Ogetti />
</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-12 mt-10">
  {/* Ogni card deve avere una larghezza definita per "simulare" le colonne */}
  <div className="w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)] xl:w-[calc(16.66%-1.5rem)]">
    <Esplora />
  </div>
  <div className="w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)] xl:w-[calc(16.66%-1.5rem)]">
    <Esplora />
  </div>
  <div className="w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)] xl:w-[calc(16.66%-1.5rem)]">
    <Esplora />
  </div>
</div>
<Eventi></Eventi>
   </>
  );
}