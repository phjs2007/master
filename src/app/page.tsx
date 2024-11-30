"use client";
import Frost from "./componets/frost";
import Image from "next/image";



import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Heart, ShoppingCart } from "lucide-react";
import Carrosel from "./componets/carrosel";
import Cardslide from "./componets/card-slide";
import Card from "./componets/card";
import Link from "next/link";
import Cardmedio from "./componets/card-medio";

export default function Home() {

  return (
    <main className="w-full overflow-x-hidden  h-fit box-border">
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
          <SwiperSlide className="space-y-7" >
            <div className="w-full flex gap-7">
              <div className="w-1/3">
                <Link href="/produto/game" className="">

                  <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-full xl:h-auto 2xl:w-full 2xl:h-full text-black">
                      <div>
                          <Image
                              src="/assets/bg.webp"
                              alt="Baldur's Gate 3"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-1/2"
                          />
                      </div>
                      <div className="grid grid-rows-2 p-1 sm:p-2">
                          <div className="flex justify-between mx-1 lg:mx-1">
                              <h1 className="font-semibold">Baldur's Gate III</h1>
                          </div>
                          <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                              <div className="w-36 flex justify-end items-center gap-4">
                                  <div className="w-full text-center">
                                      <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                          50%
                                      </h1>
                                  </div>
                                  <div className="flex flex-col font-medium justify-end items-end m-auto">
                                      <span className="text-sm line-through w-fit">R$40</span>
                                      <span className="w-fit">R$20.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </div>


              <div className="w-1/3">
                <Link href="/produto/game" className="">

                  <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-full xl:h-auto 2xl:w-full 2xl:h-full text-black">
                      <div>
                          <Image
                              src="/assets/bg.webp"
                              alt="Baldur's Gate 3"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-1/2"
                          />
                      </div>
                      <div className="grid grid-rows-2 p-1 sm:p-2">
                          <div className="flex justify-between mx-1 lg:mx-1">
                              <h1 className="font-semibold">Baldur's Gate III</h1>
                          </div>
                          <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                              <div className="w-36 flex justify-end items-center gap-4">
                                  <div className="w-full text-center">
                                      <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                          50%
                                      </h1>
                                  </div>
                                  <div className="flex flex-col font-medium justify-end items-end m-auto">
                                      <span className="text-sm line-through w-fit">R$40</span>
                                      <span className="w-fit">R$20.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </div>

              <div className="w-1/3">
                <Link href="/produto/game" className="">

                  <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-full xl:h-auto 2xl:w-full 2xl:h-full text-black">
                      <div>
                          <Image
                              src="/assets/bg.webp"
                              alt="Baldur's Gate 3"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-1/2"
                          />
                      </div>
                      <div className="grid grid-rows-2 p-1 sm:p-2">
                          <div className="flex justify-between mx-1 lg:mx-1">
                              <h1 className="font-semibold">Baldur's Gate III</h1>
                          </div>
                          <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                              <div className="w-36 flex justify-end items-center gap-4">
                                  <div className="w-full text-center">
                                      <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                          50%
                                      </h1>
                                  </div>
                                  <div className="flex flex-col font-medium justify-end items-end m-auto">
                                      <span className="text-sm line-through w-fit">R$40</span>
                                      <span className="w-fit">R$20.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex w-full gap-3">
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="space-y-7" >
            <div className="w-full flex gap-7">
              <div className="w-1/3">
                <Link href="/produto/game" className="">

                  <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-full xl:h-auto 2xl:w-full 2xl:h-full text-black">
                      <div>
                          <Image
                              src="/assets/bg.webp"
                              alt="Baldur's Gate 3"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-1/2"
                          />
                      </div>
                      <div className="grid grid-rows-2 p-1 sm:p-2">
                          <div className="flex justify-between mx-1 lg:mx-1">
                              <h1 className="font-semibold">Baldur's Gate III</h1>
                          </div>
                          <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                              <div className="w-36 flex justify-end items-center gap-4">
                                  <div className="w-full text-center">
                                      <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                          50%
                                      </h1>
                                  </div>
                                  <div className="flex flex-col font-medium justify-end items-end m-auto">
                                      <span className="text-sm line-through w-fit">R$40</span>
                                      <span className="w-fit">R$20.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </div>


              <div className="w-1/3">
                <Link href="/produto/game" className="">

                  <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-full xl:h-auto 2xl:w-full 2xl:h-full text-black">
                      <div>
                          <Image
                              src="/assets/bg.webp"
                              alt="Baldur's Gate 3"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-1/2"
                          />
                      </div>
                      <div className="grid grid-rows-2 p-1 sm:p-2">
                          <div className="flex justify-between mx-1 lg:mx-1">
                              <h1 className="font-semibold">Baldur's Gate III</h1>
                          </div>
                          <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                              <div className="w-36 flex justify-end items-center gap-4">
                                  <div className="w-full text-center">
                                      <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                          50%
                                      </h1>
                                  </div>
                                  <div className="flex flex-col font-medium justify-end items-end m-auto">
                                      <span className="text-sm line-through w-fit">R$40</span>
                                      <span className="w-fit">R$20.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </div>

              <div className="w-1/3">
                <Link href="/produto/game" className="">

                  <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-full xl:h-auto 2xl:w-full 2xl:h-full text-black">
                      <div>
                          <Image
                              src="/assets/bg.webp"
                              alt="Baldur's Gate 3"
                              width={500}
                              height={500}
                              quality={100}
                              className="w-full h-1/2"
                          />
                      </div>
                      <div className="grid grid-rows-2 p-1 sm:p-2">
                          <div className="flex justify-between mx-1 lg:mx-1">
                              <h1 className="font-semibold">Baldur's Gate III</h1>
                          </div>
                          <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                              <div className="w-36 flex justify-end items-center gap-4">
                                  <div className="w-full text-center">
                                      <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                          50%
                                      </h1>
                                  </div>
                                  <div className="flex flex-col font-medium justify-end items-end m-auto">
                                      <span className="text-sm line-through w-fit">R$40</span>
                                      <span className="w-fit">R$20.00</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex w-full gap-3">
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
              <div > <Card/> </div>
            </div>
          </SwiperSlide>
          </Swiper>
        </section>

        <section className="w-full">
          <div className="w-5/6 flex gap-8 md:flex md:w-full">
            <div className="flex-1 space-y-4 ">

              <div className="w-full h-11 mb-4 border-b-[2px] uppercase border-opacity-55 border-gray-500">
                <h1>
                  Bestsellers
                </h1>
              </div>



              {[...Array(10)].map((_, index) => (
                <div key={index} >
                    <Cardmedio/>
                </div>
            ))}

            </div>

            
            <div className="flex-1 space-y-4">
              <div className="w-full h-11 mb-4 border-b-[2px] uppercase border-opacity-55 border-gray-500">
                <h1>
                    Bestsellers
                </h1>
              </div>
              <div className="space-y-4">
              {[...Array(10)].map((_, index) => (
                <div key={index} >
                    <Cardmedio/>
                </div>
            ))}
              </div>
            </div>
          </div> 
        </section>

      </div>
    </main >
  );
}