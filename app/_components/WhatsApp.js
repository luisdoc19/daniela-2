"use client";
import Image from "next/image";
import React from "react";
import whatsapp from "../../public/WhatsApp.svg.webp";
import { useRouter } from "next/navigation";
const WhatsApp = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-2 right-0">
      <Image
        src={whatsapp}
        alt="contacti"
        className="w-[80px]"
        onClick={() =>
          window.open(
            "https://wa.me/573046153778?text=Hola%20estoy%20interesado%20en%20Liana%20store",
            "_blank"
          )
        }
      />
    </div>
  );
};

export default WhatsApp;
