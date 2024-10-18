"use client";
import Frost from "./componets/frost";
import Card from "./componets/card";
import Image from "next/image";


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ChevronRight } from "lucide-react";
import Carrosel from "./componets/carrosel";

export default function Home() {

  return (
    <main className="w-full overflow-x-hidden ">
      <header className="fixed top-0 left-0 w-full bg-gray-800 opacity-50 text-white z-10 p-4">
        <h1 className="text-xl opacity-100 z-20 relative">Meu Cabeçalho Fixo</h1>
      </header>
      <section className="">
        <Frost />
      </section>
      <div className="p-main sm:p-sm_main overflow-x-hidden   flex flex-col items-center  ">
        <section className="w-full  overflow-hidden">
          <div className="w-full h-11 mb-4 border-b-[1px] uppercase border-opacity-25 border-gray-500">
            <h1 className="font-medium text-lg">destaques</h1>
          </div>


          <div>
            <Carrosel />
          </div>
        </section>
      </div>
    </main >
  );
}