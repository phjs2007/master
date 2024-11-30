import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

export default function Cardmedio()  {
    return(
        <div className="w-full h-36 bg-white flex text-black">

        <div className=" p-1 w-1/3 h-full">
          <Image
             src="/assets/bg.webp"
             alt="Baldur's Gate 3"
             width={200}
             height={200}
             quality={100}
             className=" w-full h-full "
           />
        </div>

        <div className="flex-1 flex flex-col p-3">
          <div className="flex-1">
            <p>
              Baldurs gate 3
            </p>
          </div>
          <div className="flex flex-1 justify-between items-end">
            <div>
            <Heart />
            </div>
            <div className="flex gap-2">
            <div className=" text-center">
                              <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                                  50%
                              </h1>
                          </div>
              <div className="flex flex-col font-medium justify-end items-end ">
                 <span className="text-sm line-through w-fit">R$40</span>
                 <span className="">R$20.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )



}