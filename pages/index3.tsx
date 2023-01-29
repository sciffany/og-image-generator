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
        <title>Suguru Home Dining</title>
        <meta
          property="og:image:secure_url"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2Ff77158bd-a150-4336-9163-fba2b024ce30.jpeg&w=256&q=75&name=Suguru%20Home%20Dining&color1=%23F6F6F6&color2=%23F6F6F6"
        />
        <meta
          property="og:image"
          content="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2Ff77158bd-a150-4336-9163-fba2b024ce30.jpeg&w=256&q=75&name=Suguru%20Home%20Dining&color1=%23F6F6F6&color2=%23F6F6F6"
        />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
