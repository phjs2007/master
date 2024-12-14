"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface GameDetailsType {
    id: string;
    name: string;
    description: string;
    price: number;
    desconto: number;
    giantbombImageUrl: string;
    rawgImageUrl: string;
    genre: string[];
    plataforma: string[];
    lancamento: string;
    empresa: string;
    size: number;
    requirements: {
        system: string;
        processor: string;
        memory: string;
        graphics: string;
        directX: string;
        storage: string;
    }[];
    highlights: { title: string; description: string }[];
    closingDescription: string;
    finalNote: string;
    highlightsTitle: string;
    title: string;
}

const GameDetails = ({ params }: { params: { id: string } }) => {
    const [gameDetails, setGameDetails] = useState<GameDetailsType | null>(null);

    const gameId = params.id; // O ID agora é acessado via params
    console.log("Fetching details for game ID:", gameId);

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`https://keygames.onrender.com/games/${gameId}`);
                const data = await response.json();
                if (response.ok) {
                    setGameDetails(data);
                } else {
                    console.error("Failed to fetch game details:", data.message);
                }
            } catch (error) {
                console.error("Error fetching game details:", error);
            }
        };

        fetchGameDetails();
    }, [gameId]);

    if (!gameDetails) {
        return <div>Loading...</div>;
    }


    return (
        <main className="w-full h-svh">
            <div>
                <Image
                    src={gameDetails.rawgImageUrl || gameDetails.giantbombImageUrl || 'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg'}
                    alt={gameDetails.title}
                    width={1000}
                    height={200}
                    quality={100}
                    className="w-full fixed -z-50 hidden sm:block"
                />
            </div>

            <div className="w-full h-4/5">
                <span className="w-full h-full"></span>
            </div>

            <section className="w-full bg-slate-200 bg-opacity-95 z-40 p-main sm:p-sm_main relative">
                <h1 className="text-black font-semibold text-3xl">
                    {gameDetails.name || 'Título do jogo não disponível'}
                </h1>
                <div className="w-4/12 bg-slate-100 h-64 absolute right-4 -top-36 shadow-md">
                    <div className="w-full h-1/3 flex items-center py-3 gap-20">
                        <div className="w-4/12 h-3/4 flex justify-center items-center bg-violet-600 rounded-r-xl">
                            <h1 className="text-slate-950 md:font-semibold text-3xl">{gameDetails.desconto || 'Título do jogo não disponível'} %</h1>
                        </div>
                        <div className="flex flex-col justify-end items-end">
                            <span className="text-lg line-through w-fit text-black font-extralight opacity-60">
                                R${gameDetails.price}
                            </span>
                            <span className="w-fit text-black text-2xl">R${(gameDetails.price - (gameDetails.desconto || 0) / 100 * gameDetails.price).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="w-full h-1/3 p-3">
                        <button className="flex p-1 bg-custom-gradient font-semibold w-full h-full justify-center items-center gap-3 rounded-xl">
                            <ShoppingCart size={25} />
                            <span className="hidden sm:hidden md:block md:text-lg">Add to cart</span>
                        </button>
                    </div>
                    <div className="h-1/3 p-3">
                    <button className="flex p-1 bg-violet-950 font-semibold w-full h-full justify-center items-center gap-3 rounded-xl">
                            <span className="hidden sm:hidden md:block md:text-lg">Comprar agora</span>
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-slate-950 md:font-semibold text-3xl">{gameDetails.title}</h1>
                </div>

                <div className="w-full flex h-auto mt-20 gap-10">
                    <div className="w-1/2">
                        <div className="text-black w-full border-b-[1px] border-black border-opacity-45 text-lg p-2">
                            <h1>Descrição</h1>
                        </div>
                        <div className="container mx-auto p-6 text-black">
                            <h1 className="text-2xl font-bold mb-6">{gameDetails.title}</h1>
                            <p className="mb-6 text-black">{gameDetails.description}</p>
                            <h2 className="text-2xl font-semibold mb-4">{gameDetails.highlightsTitle}</h2>
                            <ul className="list-disc pl-6 space-y-4">
                                {gameDetails.highlights.map((highlight, index) => (
                                    <li key={index}>
                                        <strong>{highlight.title}:</strong> {highlight.description}
                                    </li>
                                ))}
                            </ul>
                            <p className="mb-6 text-black">{gameDetails.closingDescription}</p>
                            <p className="text-black">
                                <strong>{gameDetails.finalNote}</strong>
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="text-black w-full border-b-[1px] border-black border-opacity-45 text-lg p-2">
                            <h1>Detalhes do game</h1>
                        </div>

                        <div>
                            <table className="min-w-full border-collapse text-black">
                                <tbody>
                                    <tr className="border-b border-gray-600">
                                        <td className="p-4 font-semibold">Gênero</td>
                                        <td className="p-4">{gameDetails.genre.join(', ')}</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <td className="p-4 font-semibold">Plataforma</td>
                                        <td className="p-4">{gameDetails.plataforma.join(', ')}</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <td className="p-4 font-semibold">Data de lançamento</td>
                                        <td className="p-4">{new Date(gameDetails.lancamento).toLocaleDateString()}</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <td className="p-4 font-semibold">Empresa</td>
                                        <td className="p-4">{gameDetails.empresa}</td>
                                    </tr>
                                    <tr className="border-b border-gray-600">
                                        <td className="p-4 font-semibold">Tamanho</td>
                                        <td className="p-4">{gameDetails.size} GB</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6">
                            <div className="text-black w-full border-b-[1px] border-black border-opacity-45 text-lg p-2">
                                <h1>Requisitos</h1>
                            </div>
                            <table className="min-w-full border-collapse text-black mt-4">
                                <thead>
                                    <tr className="border-b border-gray-600">
                                        <th className="p-4 text-left font-semibold">Sistema</th>
                                        <th className="p-4 text-left font-semibold">Processador</th>
                                        <th className="p-4 text-left font-semibold">Memória</th>
                                        <th className="p-4 text-left font-semibold">Gráficos</th>
                                        <th className="p-4 text-left font-semibold">DirectX</th>
                                        <th className="p-4 text-left font-semibold">Armazenamento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gameDetails.requirements.map((req, index) => (
                                        <tr key={index} className="border-b border-gray-600">
                                            <td className="p-4">{req.system}</td>
                                            <td className="p-4">{req.processor}</td>
                                            <td className="p-4">{req.memory}</td>
                                            <td className="p-4">{req.graphics}</td>
                                            <td className="p-4">{req.directX}</td>
                                            <td className="p-4">{req.storage}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GameDetails;