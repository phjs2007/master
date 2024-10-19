"use client";
import Frost from "./componets/frost";
import Card from "./componets/card";
import Image from "next/image";



import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ChevronRight, Heart, ShoppingCart } from "lucide-react";
import Carrosel from "./componets/carrosel";
import Slide from "./componets/slide";

export default function Home() {

  return (
    <main className="w-full overflow-x-hidden  h-fit box-border">
      <header className="fixed top-0 left-0 w-full bg-gray-800 opacity-50 text-white z-10 p-4">
        <h1 className="text-xl opacity-100 z-20 relative">Meu Cabeçalho Fixo</h1>
      </header>
      <section  className="w-full">
        <Frost />
      </section>
      <div className="overflow-x-hidden sm:p-sm_main box-border lg:m-sm_main">

        <section className="w-full  overflow-hidden gap-5 flex flex-col">

          <div className="w-full h-11 mb-4 border-b-[1px] uppercase border-opacity-25 border-gray-500">
            <h1 className="font-medium text-lg">destaques</h1>
          </div>

          <Swiper
           slidesPerView={1}
           style={{ width: "100%" }}> 
        <SwiperSlide>
        <div className="w-full bg-bg-custom h-96 text-black sm:text-white sm:h-96 mb-6 bg-center bg-no-repeat sm:bg-cover relative -z-10  p-4">
          <div className=" flex  items-end  h-full">
            <div className="grid grid-cols-1 grid-rows-2 gap-3 sm:gap-1 justify-center items-center text-slate-50 w-full">
                      <div className="col-span-2">
                          <p className="sm:text-sm md:text-base text-lg font-light ">Compre agora e ganhe um jogo de graça</p>
                      </div>
                      <div className="row-start-2">
                          <h1 className="text-sm sm:text-base w-full font-semibold tracking-widest ">Agora disponível</h1>
                      </div>
                      <div className=" mr-[2px] sm:mr-3 row-start-2 flex space-x-4 sm:space-x-2 lg:space-x-4 justify-center items-center ">
                          <p className="font-semibold text-sm sm:text-2xl text- sm:text-white">R$119.99</p>
                          <button className="border p-1 sm:p-2 "><Heart size={25} /></button>
                          <button className=" sm-p-1  flex p-1 sm:p-2  bg-custom-gradient font-semibold ">
                              <ShoppingCart size={30} />
                              <span className="hidden sm:hidden md:block md:text-lg text-amber-600 sm:text-white  ">Add to cart</span> </button>
                      </div>
                  </div>
          </div>
          </div>
                </SwiperSlide>
                
                
               </Swiper>
          
          <div>
            <Carrosel />
          </div>
        </section>
      </div>
    </main >
  );
}