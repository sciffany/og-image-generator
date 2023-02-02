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
        <title>Quanta Pharmaceuticals</title>
        <meta
          property="og:image:secure_url"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2F4e664140-272f-43a0-8eb1-dfa009124335.jpeg&w=256&q=75&name=LA%20VIE%20(Patisserie%20%7C%20Cafe%20%7C%20Sociale)&color1=%23f6f6f6&color2=%23f6f6f6"
        />
        <meta
          property="og:image"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2F4e664140-272f-43a0-8eb1-dfa009124335.jpeg&w=256&q=75&name=LA%20VIE%20(Patisserie%20%7C%20Cafe%20%7C%20Sociale)&color1=%23f6f6f6&color2=%23f6f6f6"
        />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="og:description" content="Premium product for athletes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
