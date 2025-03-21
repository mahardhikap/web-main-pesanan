import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces/catalog-card.interface";
import { truncateText } from "@/utils/truncate-text";
import Link from "next/link";

const CatalogCardPage: React.FC<CardProps> = ({
  product,
  image,
  price,
  disc,
  id,
  stock,
}) => {

  return (
    <Link href={`/${id}`}>
      <div className="w-full bg-gray-300 border border-premium relative rounded-tl-2xl rounded-br-2xl overflow-hidden cursor-pointer">
        {price !== undefined && disc !== undefined && price > 0 && disc > 0 && (
          <div className="bg-red-400 absolute p-2 text-xs w-1/4 text-center rounded-br-2xl font-semibold">
            Disc {((disc / price) * 100).toFixed(0)}%
          </div>
        )}
        {!stock && (
          <div className="px-3 py-2 font-semibold flex flex-col items-center justify-center aspect-square text-center text-xs rounded-2xl absolute bg-gray-800 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div>STOCK</div>
            <div>OUT</div>
          </div>
        )}
        {image && image.length > 0 ? (
          <Image
            src={image[0]}
            width={350}
            height={350}
            alt="catalog-item"
            className="object-cover h-full w-full aspect-square"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center aspect-square">
            <div className="text-gray-500 text-center">No Image Available</div>
          </div>
        )}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        <span className="absolute bottom-0 z-5 text-white p-3 break-words w-full text-sm md:text-xs lg:text-sm">
          {truncateText(product as string, 35)}
        </span>
      </div>
    </Link>
  );
};

export default CatalogCardPage;
