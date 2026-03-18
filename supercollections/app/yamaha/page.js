import Image from "next/image";
import Banner from "@/components/yamaha/Banner";
import Card from "@/components/yamaha/Card";
import Ogetti from "@/components/yamaha/Ogetti";
import Esplora from "@/components/yamaha/Esplora";
import Eventi from "@/components/yamaha/Eventi";
import Banner2 from "@/components/yamaha/Banner2";
import Banner3 from "@/components/yamaha/Banner3";
import Eventi2 from "@/components/yamaha/Eventi2";

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
      <div className="mt-16 px-4 sm:px-10 lg:px-20 max-w-[1500px] mx-auto">
        <Banner2 />
      </div>
      <div className="bg-gray-100 py-20 px-5 flex flex-wrap justify-center gap-8">
        {/* Larghezza aumentata per non farle sembrare "strette" */}
        <div className="w-full md:w-[450px]">
          <Eventi />
        </div>
        <div className="w-full md:w-[450px]">
          <Eventi />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Applica queste classi a ogni card */}
        <div className="w-1/2 md:w-1/4 xl:w-1/6">
          <Esplora />
        </div>
        <div className="w-1/2 md:w-1/4 xl:w-1/6">
          <Esplora />
        </div>
        <div className="w-1/2 md:w-1/4 xl:w-1/6">
          <Esplora />
        </div>
      </div>
      <div className="flex justify-between items-end mb-8 mt-10">
        <h2 className="text-3xl font-bold uppercase tracking-tighter">
          Prossimi Eventi
        </h2>
        <a href="#" className="text-sm font-semibold hover:underline">
          Visualizza tutto →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4">
        <Eventi2 />
        <Eventi2 />
        <Eventi2 />
      </div>

      <div className="mt-12 md:mt-24 px-6 md:px-12 xl:px-20 max-w-[1700px] mx-auto">
        <Banner3 />
      </div>
      <div className="mx-5 mt-5">
        <Banner2></Banner2>
      </div>
    </>
  );
}
