import Image from "next/image";
import Link from "next/link";

interface CardMedioProps {
  id: number;
  title: string;
  imageUrl: string;
  price?: number; // Permitir valores opcionais
  discount?: number; // Permitir valores opcionais
  finalPrice?: number; // Permitir valores opcionais
}

export default function CardMedio({
  id,
  title,
  imageUrl,
  price = 0, // Valor padrão caso seja undefined
  discount = 0, // Valor padrão caso seja undefined
  finalPrice = 0, // Valor padrão caso seja undefined
}: CardMedioProps) {
  return (
    <Link href={`/produto/${id}`}>
      <div className="w-full sm:h-36 bg-white flex text-black h-24">
        {/* Imagem do Produto */}
        <div className="p-1 w-2/5 h-full">
          <Image
            src={imageUrl}
            alt={title}
            width={207}
            height={200}
            quality={100}
            className="w-full h-full"
          />
        </div>

        {/* Detalhes do Produto */}
        <div className="flex-1 flex flex-col p-3">
          <div className="flex-1">
            <p>{title}</p>
          </div>
          <div className="flex flex-1 justify-end items-end">
            <div className="flex gap-2">
              {/* Exibição do Desconto */}
              {discount > 0 && (
                <div className="text-center">
                  <h1 className="bg-violet-600 rounded-lg font-bold text-white p-2">
                    {discount}%
                  </h1>
                </div>
              )}
              {/* Exibição dos Preços */}
              <div className="flex flex-col font-medium justify-end items-end">
                {price > 0 && (
                  <span className="text-sm line-through w-fit">
                    R${price.toFixed(2)}
                  </span>
                )}
                <span>R${finalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}