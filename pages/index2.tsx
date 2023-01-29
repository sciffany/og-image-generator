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
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="og:description" content="Premium product for athletes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
