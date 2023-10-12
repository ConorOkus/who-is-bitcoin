"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const colors = {
  maroon: "#C33F82",
};

const fonts = {
  heading: "'Made', sans-serif",
  nav: "'bookman-jf-pro', 'Georgia', sans-serif",
  body: "'Georgia', 'Times New Roman', serif",
};

export const theme = extendTheme({ colors, fonts });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <Global
        styles={css`
          @font-face {
            font-family: "Made";
            src: url("/fonts/MADE-Mellow-Black.otf") format("otf");
            font-weight: 400; // Adjust accordingly
            font-style: normal; // Adjust accordingly
          }
        `}
      />
    </CacheProvider>
  );
}
