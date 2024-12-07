"use client";
import Image from "next/image";
import Link from 'next/link';

interface CardProps {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    discount: number;
    finalPrice: number;
}

export default function Card({ id, name, imageUrl, price, discount, finalPrice }: CardProps) {
    return (
        <Link href={`/produto/${id}`}>

            <div className=" w-full h-full sm:w-full sm:h-full xl:w-64 xl:h-64 2xl:w-full 2xl:h-full text-black bg-white">
                <div>
                    <Image
                        src={imageUrl || "/assets/2.jpg"}  // Se não tiver imagem, usa uma imagem default
                        alt={name}
                        width={300}
                        height={100}
                        quality={100}
                        className="w-full h-1/2"
                    />
                </div>
                <div className="grid grid-rows-2 p-1 sm:p-2">
                    <div className="flex justify-between mx-1 lg:mx-1">
                        <h1 className="font-semibold">{name}</h1>
                    </div>
                    <div className="flex justify-end items-center mt-2 mr-2 space-x-2 w-full">
                        <div className="w-36 flex justify-end items-center gap-4">
                            {discount && (
                                <div className="w-full text-center">
                                    <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                        {discount}%
                                    </h1>
                                </div>
                            )}
                            <div className="flex flex-col font-medium justify-end items-end m-auto">
                                {price && (
                                    <span className="text-sm line-through w-fit">R${price}</span>
                                )}
                                {finalPrice && (
                                    <span className="w-fit">R${finalPrice}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
}