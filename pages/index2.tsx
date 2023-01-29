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
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2F291e653a-c186-44ab-8bf3-2ded22a36a82.jpeg&w=256&q=75&description=Premium%20products%20for%20athletes&image-offset=80&take-app-link=https%3A%2F%2Ftake.app%2Fs%2F447377573693&description-color=%238C8C8C&name=Quanta%20Pharmaceuticals&logo-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2F291e653a-c186-44ab-8bf3-2ded22a36a82.jpeg&w=256&q=75"
        />
        <meta
          property="og:image"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2F291e653a-c186-44ab-8bf3-2ded22a36a82.jpeg&w=256&q=75&description=Premium%20products%20for%20athletes&image-offset=80&take-app-link=https%3A%2F%2Ftake.app%2Fs%2F447377573693&description-color=%238C8C8C&name=Quanta%20Pharmaceuticals&logo-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2F291e653a-c186-44ab-8bf3-2ded22a36a82.jpeg&w=256&q=75"
        />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:type" content="image/png" />
        <meta name="og:description" content="Premium product for athletes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
