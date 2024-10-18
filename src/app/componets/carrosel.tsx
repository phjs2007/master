import Card from "./card";


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ChevronRight } from "lucide-react";
export default function Carrosel() {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            style={{ overflow: "visible", }}
            slidesPerGroup={4}
            speed={1000}
            loop={true}
            pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' swiper-pagination-line w-6 h-2 bg-gray-300 rounded"></span>'; // Classes do Tailwind
                },
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 40
                },
                940: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
            }}
            modules={[Pagination, Navigation]}
            className=""
        >
            <div className="swiper-button-next">
                <ChevronRight size={10} />
            </div>
            <div className="swiper-button-prev "></div>

            {/* Elemento de Paginação Personalizado */}
            <div className="custom-pagination flex justify-center mt-4 ">
                {/* Esses elementos serão substituídos pela renderização do Swiper */}
            </div>

            {/* Slides do Swiper */}
            {[...Array(10)].map((_, index) => (
                <SwiperSlide key={index}>
                    <Card />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}