"use client";
import Image from "next/image";
import Link from 'next/link';

export default function Card() {

    return (
        <Link href="/produto/game">

            <div className="bg-white w-full h-full sm:w-full sm:h-full xl:w-64 xl:h-64 2xl:w-full 2xl:h-full text-black">
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

    );
}