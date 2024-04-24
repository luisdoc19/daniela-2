"use client";
import { CarouselItem } from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryProduct = ({ item }) => {
  const router = useRouter();
  return (
    <CarouselItem
      className="basis-1/3 flex flex-col items-center shadow-md border border-[#eedfbe] p-4 rounded-3xl gap-2 select-none cursor-pointer hover:shadow-lg transition duration-300 ease-in-out z-20"
      onClick={() => router.push(`/product/${item.id}`)}
    >
      <img
        src={item.images[0]}
        alt={`${item.id}`}
        className="w-64 h-64 object-cover rounded-2xl z-20"
      />
      <h2>{item.name}</h2>
      <p>{item.price.toLocaleString("es-CO")} COP</p>
      <div className="flex flex-row gap-x-2 text-sm font-medium z-20">
        <button className="bg-[#fedcba] p-2 rounded-lg z-20">Comprar</button>
        <button className="bg-[#e9dfcc] p-2 rounded-lg z-20">
          Añadir al carrito
        </button>
      </div>
    </CarouselItem>
  );
};

export default CategoryProduct;
