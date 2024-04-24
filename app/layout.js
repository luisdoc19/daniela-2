import { Inter } from "next/font/google";
import logo from "../public/logo.png";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Liana Store",
  description: "Liana Store best femme store in the world",
  icons: {
    icon: "./../public/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className && "bg-[#fbf7ef]"}>
        <nav className="sticky top-0 w-full shadow-lg text-center z-40 bg-[#fbf7ef] items-center py-2 px-4">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-[120px]"
            />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
