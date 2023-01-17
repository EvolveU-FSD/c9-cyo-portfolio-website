import styles from '@/styles/Home.module.css';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>John Smith</title>
        <meta name="description" content="John Smith's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="John Smith" />
        <meta property="og:description" content="John Smith's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>John Smith</h1>
        <p>
          I love to developer software. Most experienced with React & Node.js.
        </p>
      </main>
    </>
  );
}
