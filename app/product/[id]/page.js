import React from "react";
import data from "../../../helpers/data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryProduct from "./_components/CategoryProduct";
const page = ({ params }) => {
  const { id } = params;
  const product = data.find((item) => item.id === +id);
  const otherProduct = data.filter((item) => item.id !== +id);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <div className="rounded-xl bg-[#f7efdf] shadow-lg mt-2 w-max text-center px-14 py-14 flex md:flex-row flex-col md:gap-x-10 gap-x-2">
        <Carousel className="w-full md:max-w-lg max-sm:max-w-sm select-none">
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  className="w-[420px] rounded-lg object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg">
              ${product.price.toLocaleString("es-CO")} COP
            </p>
          </div>
          <div className="flex flex-row gap-x-2 mx-auto">
            <button className="bg-[#fedcba] px-4 py-2 rounded-lg z-20">
              Comprar
            </button>
            <button className="bg-[#e9dfcc] px-4 py-2 rounded-lg z-20">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#fbf7ef] w-full mt-2 text-center mx-auto grid place-content-center gap-y-5">
        <h1 className="font-bold text-3xl">Otros productos</h1>
        <Carousel className="w-full md:max-w-7xl max-w-sm mx-auto z-20">
          <CarouselContent className="flex flex-row gap-3">
            {otherProduct.map((item) => (
              <CategoryProduct item={item} key={item.id} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default page;
