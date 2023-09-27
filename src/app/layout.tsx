import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <link rel='stylesheet' href='https://use.typekit.net/gaq1ohg.css' />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
