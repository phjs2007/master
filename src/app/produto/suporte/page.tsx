
import { Search } from "lucide-react";
import Image from "next/image";

export default function service() {
    return (
        <>
            <main className="w-full h-svh p-sm_main ">
                <section className="w-full h-2/3 flex flex-col justify-center items-center gap-4">
                    <div>
                        <h1 className="font-semibold text-2xl">
                            Centro de suporte
                        </h1>
                    </div>
                    <div className="w-6/12 relative text-black ml-6 ">
                        <span className="absolute z-20 left-2 top-1/2 transform -translate-y-1/2">
                            <Search />
                        </span>
                        <input
                            type="text"
                            className="w-full text-left z-10 relative pl-10 bg-white text-black opacity-95 focus:opacity-100 focus:saturate-50 p-3 rounded-xl"
                        />
                    </div>
                </section>

                <section className="h-auto w-full  flex justify-center items-center p-6 ">
                    <div className="grid grid-cols-3 grid-rows-2 gap-8 ">
                        <div className="flex flex-col  items-center text-center gap-3 ">
                            <div>
                                <Image
                                    src='/assets/img1.png'
                                    alt="imagem de um controle"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div>
                                <h2>
                                    problema tecnicos do jogo
                                </h2>
                            </div>
                            <div>
                                um jogo que você já comprou e baixou não está funcionando corretamente?
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  items-center text-center gap-3">
                                <div>
                                    <Image
                                        src='/assets/img1.png'
                                        alt="imagem de um controle"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h2>
                                        problema tecnicos do jogo
                                    </h2>
                                </div>
                                <div>
                                    um jogo que você já comprou e baixou não está funcionando corretamente?
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  items-center text-center gap-3">
                                <div>
                                    <Image
                                        src='/assets/img1.png'
                                        alt="imagem de um controle"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h2>
                                        problema tecnicos do jogo
                                    </h2>
                                </div>
                                <div>
                                    um jogo que você já comprou e baixou não está funcionando corretamente?
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  items-center text-center gap-3">
                                <div>
                                    <Image
                                        src='/assets/img1.png'
                                        alt="imagem de um controle"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h2>
                                        problema tecnicos do jogo
                                    </h2>
                                </div>
                                <div>
                                    um jogo que você já comprou e baixou não está funcionando corretamente?
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  items-center text-center gap-3">
                                <div>
                                    <Image
                                        src='/assets/img1.png'
                                        alt="imagem de um controle"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h2>
                                        problema tecnicos do jogo
                                    </h2>
                                </div>
                                <div>
                                    um jogo que você já comprou e baixou não está funcionando corretamente?
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col  items-center text-center gap-3">
                                <div>
                                    <Image
                                        src='/assets/img1.png'
                                        alt="imagem de um controle"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div>
                                    <h2>
                                        problema tecnicos do jogo
                                    </h2>
                                </div>
                                <div>
                                    um jogo que você já comprou e baixou não está funcionando corretamente?
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}