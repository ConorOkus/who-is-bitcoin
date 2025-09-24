"use client"; 

import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { ColorProvider } from "@/providers/ColorProvider";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/HeroSection";
import AssetsSection from "@/components/AssetsSection/AssetsSection";
import StickerSet from "@/components/StrickerSet/StickerSet";
import GifsSection from "@/components/GifsSection/GifsSection";
import Partners from "@/components/PartnerSection/Partners";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import BitcoinVideoComponent from "@/components/MovieSection/BitcoinVideoComponent";
import ColoringPages from "@/components/ColoringPagesSection/ColoringPages";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  const productRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ColorProvider>
        <Header />
        <Hero productRef={productRef} />
      </ColorProvider>
      <Box px={{ base: 6, lg: "192px" }}>
        <AssetsSection />
      </Box>
      <StickerSet />
      <Box px={{ base: 6, lg: "192px" }}>
        <GifsSection />
        <Partners />
      </Box>
      <div ref={productRef}>
        <ProductShowcase />
      </div>
      <BitcoinVideoComponent />
      <ColoringPages />
      <Footer />
    </>
  );
};

export default Home;
