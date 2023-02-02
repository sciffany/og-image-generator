import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto_Condensed } from "@next/font/google";
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>D Rose Station</title>
        <meta
          property="og:image:secure_url"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2Fd87e1801-207a-47b2-92c0-19b785e32865.jpeg&w=256&q=75&name=Burger%20Warisan%20Jalan%20Mawar&color1=%230CEE28&color2=%23E2F470"
        />
        <meta
          property="og:image"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2Fd87e1801-207a-47b2-92c0-19b785e32865.jpeg&w=256&q=75&name=Burger%20Warisan%20Jalan%20Mawar&color1=%230CEE28&color2=%23E2F470"
        />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta name="og:description" content="Makanan Panas, Ala Carte, Satay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  );
}
