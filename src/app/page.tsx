"use client";
import Frost from "./componets/frost";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import Card from "./componets/card";
import CardMedio from "./componets/card-medio";
import SlideCenter from "./componets/slide-centro";

interface Game {
  id: number;
  name: string;
  price: number;
  desconto: number;
  rawgImageUrl: string;
  finalPrice: string;
}

interface Lancamento {
  id: number;
  name: string;
  price: number;
  desconto: number;
  rawgImageUrl: string;
  finalPrice: string;
}

interface RPG {
  id: number;
  name: string;
  price: number;
  desconto: number;
  rawgImageUrl: string;
  finalPrice: string;
}

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [lancamento, setLancamento] = useState<Lancamento[]>([]);
  const [rpg, setRpg] = useState<RPG[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('https://keygames.onrender.com/games/vendidos');
      const data = await response.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const fetchLancamento = async () => {
      const response = await fetch('https://keygames.onrender.com/games/recentes');
      const data = await response.json();
      setLancamento(data);
    };

    fetchLancamento();
  }, []);

  useEffect(() => {
    const fetchRpg = async () => {
      const response = await fetch('https://keygames.onrender.com/games/rpg');
      const data = await response.json();
      setRpg(data);
    };

    fetchRpg();
  }, []);

  return (
    <main className="w-full overflow-x-hidden h-fit box-border">
      <section className="w-full">
        <Frost />
      </section>
      <div className="overflow-x-hidden p-main sm:p-sm_main box-border lg:m-sm_main flex flex-col space-y-20">
        <section className="w-full overflow-hidden gap-5 flex flex-col">
          <SlideCenter />
        </section>

        <section className="space-y-10">
          <div className="w-full h-11 mb-4 border-b-[2px] uppercase border-opacity-55 border-gray-500">
            <h1 className="font-medium text-lg">RPG</h1>
          </div>

          <div>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              slidesPerGroup={4}
              speed={1000}
              navigation = {true}
              loop={true}
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
                },
                480: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 30,
                  loop: true,
                },
                640: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 32,
                  loop: true,
                },
                940: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
              }}
              modules={[Pagination, Navigation]}
            >
              {rpg.map((game) => (
                <SwiperSlide key={game.id}>
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
        </section>

        <section className="w-full">
          <div className="w-full gap-8 md:flex md:w-full">
            <div className="flex-1 space-y-4">
              <div className="w-full h-11 mb-4 border-b-[2px] uppercase border-opacity-55 border-gray-500">
                <h1>Mais vendidos</h1>
              </div>
              {games.map((game) => (
                <div className="my-2" key={game.id}>
                  <CardMedio
                    id={game.id}
                    title={game.name}
                    imageUrl={game.rawgImageUrl}
                    price={game.price || 0}
                    discount={game.desconto || 0}
                    finalPrice={game.price && game.desconto
                      ? game.price - game.price * (game.desconto / 100)
                      : game.price || 0}
                  />
                </div>
              ))}
            </div>

            <div className="flex-1 space-y-4">
              <div className="w-full h-11 mb-4 border-b-[2px] uppercase border-opacity-55 border-gray-500">
                <h1>Novos lançamentos</h1>
              </div>
              <div className="space-y-4">
                {lancamento.map((lancamento) => (
                  <div className="my-2" key={lancamento.id}>
                    <CardMedio
                      id={lancamento.id}
                      title={lancamento.name}
                      imageUrl={lancamento.rawgImageUrl}
                      price={lancamento.price || 0}
                      discount={lancamento.desconto || 0}
                      finalPrice={lancamento.price && lancamento.desconto
                        ? lancamento.price - lancamento.price * (lancamento.desconto / 100)
                        : lancamento.price || 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
