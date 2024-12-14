import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Cardslide from './card-slide';
import Card from './card';

interface Game {
    id: number;
    name: string;
    price: number;
    desconto: number;
    rawgImageUrl: string;
    giantbombImageUrl: string;
    finalPrice: string;
}

export default function SlideCenter() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch('https://keygames.onrender.com/games/destaques');
            const data = await response.json();
            setGames(data);
        };

        fetchGames();
    }, []);

    // Divide os jogos em dois grupos: os primeiros 10 e os restantes
    const firstTenGames = games.slice(0, 5);  // 10 primeiros jogos
    const remainingGames = games.slice(5, 9); // Jogos após o 10º (máximo de 3)

    return (
        <>
            {/* Primeiro Swiper - Mostrando 10 jogos */}
            <div className="w-full h-11 mb-4 border-b-[1px] uppercase border-opacity-25 border-gray-500">
                <h1 className="font-medium text-lg">Destaques</h1>
            </div>
            <Swiper slidesPerView={1} style={{ width: "100%" }} navigation={true} loop={true} modules={[Navigation]}>
                {firstTenGames.map((game) => (
                    <SwiperSlide key={`first-${game.id}`}>
                        <Cardslide
                            id={game.id}
                            name={game.name}
                            imageUrl={game.giantbombImageUrl}
                            finalPrice={Number((game.price - (game.price * (game.desconto / 100))).toFixed(2))}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Segundo Swiper - Mostrando os jogos restantes (após o 10º) */}
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    slidesPerGroup={4}
                    speed={1000}
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} swiper-pagination-line w-6 h-2 bg-gray-300 rounded"></span>`;
                        },
                    }}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
                            loop: true,
                            navigation: true,  // Ativando a navegação somente para telas com 300px ou mais
                        },
                        480: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 30,
                            loop: true,
                            navigation: true,  // Desativando a navegação para telas com 480px ou mais
                        },
                        640: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 32,
                            loop: true,
                            navigation: true,  // A navegação pode ser desativada ou mantida conforme a necessidade
                        },
                        940: {
                            slidesPerView: 4,
                            spaceBetween: 32,
                            navigation: false,  // A navegação pode ser desativada ou mantida conforme a necessidade
                        },
                    }}
                    modules={[Pagination, Navigation]}
                >
                    {remainingGames.map((game) => (
                        <SwiperSlide key={`second-${game.id}`}>
                            <Card
                                id={game.id}
                                name={game.name}
                                imageUrl={game.rawgImageUrl}
                                price={game.price}
                                discount={game.desconto}
                                finalPrice={Number((game.price - (game.price * (game.desconto / 100))).toFixed(2))}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}