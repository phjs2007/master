"use client";
import Frost from "./componets/frost";



import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Heart, ShoppingCart } from "lucide-react";
import Carrosel from "./componets/carrosel";
import Cardslide from "./componets/card-slide";
import Card from "./componets/card";

export default function Home() {

  return (
    <main className="w-full overflow-x-hidden  h-fit box-border">
      <header className="fixed top-0 left-0 w-full bg-gray-800 opacity-50 text-white z-10 p-4">
        <h1 className="text-xl opacity-100 z-20 relative">Meu Cabeçalho Fixo</h1>
      </header>
      <section  className="w-full">
        <Frost />
      </section>
      <div className="overflow-x-hidden p-main sm:p-sm_main box-border lg:m-sm_main flex flex-col space-y-20">

        <section className="w-full  overflow-hidden gap-5 flex flex-col">

          <div className="w-full h-11 mb-4 border-b-[1px] uppercase border-opacity-25 border-gray-500">
            <h1 className="font-medium text-lg">destaques</h1>
          </div>

          <Swiper
           slidesPerView={1}
           style={{ width: "100%" }}
           navigation = {true}
           loop={true}

           modules={[ Navigation]}> 

{[...Array(10)].map((_, index) => (
                <SwiperSlide key={index}>
                    <Cardslide />
                </SwiperSlide>
            ))}
                
               </Swiper>
          
          <div>
            <Carrosel />
          </div>
        </section>

        <section className="space-y-10">
        <div className="w-full h-11 mb-4 border-b-[2px] uppercase border-opacity-55 border-gray-500">
            <h1 className="font-medium text-lg">Clássicos</h1>
          </div>

          <Swiper
          slidesPerView={1}
          style={{ width: "100%" }}
          navigation = {true}
          loop={true}

          modules={[ Navigation]}>
            <SwiperSlide >
            <div className="flex flex-col gap-4  sm:grid sm:grid-cols-2 sm:grid-rows-4  lg:grid-cols-4 lg:grid-rows-2 sm:gap-4">
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="flex flex-col gap-4  sm:grid sm:grid-cols-2 sm:grid-rows-6  md:grid-cols-4 md:grid-rows-2 sm:gap-4">
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </main >
  );
}