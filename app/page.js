import Image from "next/image";
import data from "../helpers/data.json";
import Slider from "./_components/Slider";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <main className="bg-[#fbf7ef] w-full h-full">
      <div className="text-black p-20 pt-4 z-20">
        <Slider data={data} />
      </div>
      <div className="bg-[#f7efdf] mx-auto flex justify-center text-center p-20">
        <div className="max-w-[500px] flex flex-col gap-y-5">
          <h1 className="text-3xl font-bold">Mision</h1>
          <p className="text-xl">
            Liana tiene como misión llegar al corazón de muchas mujeres
            brindandoles seguridad, amor y felicidad para con ellas mismas. que
            puedan salir por un instante de su rutina y puedan encontrar la
            magia que las caracteriza y siempre sean luz para mas mujeres.
          </p>
        </div>
      </div>
      <div className="bg-[#fbf7ef] mx-auto flex justify-center text-center p-20">
        <div className="max-w-[500px] flex flex-col gap-y-5">
          <h1 className="text-3xl font-bold">Vision</h1>
          <p className="text-xl">
            Liana es un emprendimiento con vision de empresa, de crecimiento de
            marca, crecimiento personal y generadora de empleo. Como empresa
            liana se ve en un plazo de 5 años con profesionales laborando en
            distintas areas de administración, colaboradores llevando sustento a
            sus hogares y brindando la mejor calidad en sus
            servicios y productos.
          </p>
        </div>
      </div>
    </main>
  );
}
