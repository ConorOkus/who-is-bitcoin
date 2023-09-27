"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  maroon: "#C33F82",
};

const fonts = {
  heading: "bookman-jf-pro, 'Georgia', 'Times New Roman', serif",
  body: "'Georgia', 'Times New Roman', serif",
};

export const theme = extendTheme({ colors, fonts });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
