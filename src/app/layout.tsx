import { Providers } from "../providers/ThemeProvider";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Here Comes Bitcoin",
  description: "Here Comes Bitcoin is the central resource for all things Bitcoin (puppet, not currency), including license-free creative assets that you can use to make anything you want",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Here Comes Bitcoin",
    images: [
      {
        url: '/assets/acrobat.png',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://www.herecomesbitcoin.org/',
  },
  twitter: {
    site: '@spiralbtc',
    card: 'summary_large_image',
    images: ['/assets/acrobat.png'],
  },
  viewport: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/gaq1ohg.css' />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="87a54702-028a-4e54-b167-0e03f396feca"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
