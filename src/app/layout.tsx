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
      </Head>
      <link rel='stylesheet' href='https://use.typekit.net/gaq1ohg.css' />
      <link rel='icon' type='image/png' href='./assets/favicon.jpeg'></link>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
