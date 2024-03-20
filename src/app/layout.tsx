import Head from "next/head";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Here Comes Bitcoin</title>
        <link rel='stylesheet' href='https://use.typekit.net/gaq1ohg.css' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='Here Comes Bitcoin' />
        <meta property='og:image' content='/assets/acrobat.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          name='description'
          content='Here Comes Bitcoin is the central resource for all things Bitcoin (puppet, not currency), including license-free creative assets that you can use to make anything you want'
        />
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1.0, maximum-scale=1.0'
        />
        <meta property='og:url' content='https://www.herecomesbitcoin.org/' />
        <meta name='twitter:site' content='@spiralbtc' />
        <meta
          name='twitter:card'
          content='License-free creative assets that you can use to make anything you want'
        />
        <meta name='twitter:image' content='/assets/acrobat.png' />
      </Head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
