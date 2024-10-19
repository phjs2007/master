import { Heart, ShoppingCart } from "lucide-react";

export default function Slide () {
    return (
        <div className="w-full bg-bg-custom h-96 mb-6 bg-cover relative -z-10  p-4">
          <div className=" flex  items-end  h-full">
            <div className="grid grid-cols-1 grid-rows-2 gap-3 sm:gap-1 justify-center items-center text-slate-50 w-full">
                      <div className="col-span-2">
                          <p className="sm:text-sm md:text-base text-lg font-light ">Compre agora e ganhe um jogo de graça</p>
                      </div>
                      <div className="row-start-2">
                          <h1 className="text-sm sm:text-base w-full font-semibold tracking-widest ">Agora disponível</h1>
                      </div>
                      <div className=" mr-[2px] sm:mr-3 row-start-2 flex space-x-4 sm:space-x-2 lg:space-x-4 justify-center items-center ">
                          <p className="font-semibold text-sm sm:text-2xl ">R$119.99</p>
                          <button className="border p-1 sm:p-2 "><Heart size={25} /></button>
                          <button className=" sm-p-1  flex p-1 sm:p-2  bg-custom-gradient font-semibold ">
                              <ShoppingCart size={30} />
                              <span className="hidden sm:hidden md:block md:text-lg  ">Add to cart</span> </button>
                      </div>
                  </div>
          </div>
          </div>
    )
}