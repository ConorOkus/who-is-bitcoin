"use client";

import { Box } from "@chakra-ui/react";
import { ColorProvider } from "@/providers/ColorProvider";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/HeroSection";
import AssetsSection from "@/components/AssetsSection/AssetsSection";
import StickerSet from "@/components/StrickerSet/StickerSet";
import GifsSection from "@/components/GifsSection/GifsSection";
import Partners from "@/components/PartnerSection/Partners";

const Home: React.FC = () => {
  return (
    <>
      <ColorProvider>
        <Header />
        <Hero />
      </ColorProvider>
      <Box
        px={{
          base: 6,
          lg: "192px",
        }}
      >
        <AssetsSection />
      </Box>
      <StickerSet />
      <Box
        px={{
          base: 6,
          lg: "192px",
        }}
      >
        <GifsSection />
        <Partners/>
      </Box>

    </>
  );
};

export default Home;
