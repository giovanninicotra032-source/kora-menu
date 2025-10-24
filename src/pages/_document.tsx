import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="KORA Pizzeria - Pizza arte essenza. Menu digitale per sala e asporto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
