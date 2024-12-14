import { ShoppingCart } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

interface CardProps {
    id: number;
    name: string;
    imageUrl: string;
    finalPrice: number;
}

export default function Cardslide({ id, name, imageUrl, finalPrice }: CardProps) {
    return (
        <>
            <Link href={`/produto/${id}`}>
                <div className="w-full h-96 text-black sm:text-white sm:h-96 mb-6 relative backdrop-blur-3xl">
                    <Image
                        src={imageUrl}
                        alt="Descrição da imagem"
                        width={1200}
                        height={1000}
                        className="w-full h-full rounded-lg absolute object-cover"
                    />
                    {/* Gradiente com blur na parte inferior */}
                    <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-lg"></div>
                    <div className="flex items-end h-full relative z-10 p-3">
                        <div className="grid grid-cols-1 grid-rows-2 gap-3 sm:gap-1 justify-center items-center text-slate-50 w-full">
                            <div className="col-span-2 inline-block bg-opacity-20 sm:bg-transparent">
                                <p className="sm:text-sm md:text-xl text-lg font-light w-fit md:font-bold ">{name}</p>
                            </div>
                            <div className="row-start-2">
                                <h1 className="text-xs sm:text-base w-full font-semibold tracking-widest">Agora disponível</h1>
                            </div>
                            <div className="mr-[2px] sm:mr-3 row-start-2 flex space-x-4 sm:space-x-2 lg:space-x-4 justify-center items-center">
                                <p className="font-semibold text-sm sm:text-2xl sm:text-white">R${finalPrice}</p>
                                <button className="flex p-1 sm:p-2 bg-custom-gradient font-semibold">
                                    <ShoppingCart size={30} />
                                    <span className="hidden sm:hidden md:block md:text-lg text-amber-600 sm:text-white">Add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}