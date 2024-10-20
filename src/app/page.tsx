"use client";

import { Box } from "@chakra-ui/react";
import { ColorProvider } from "../providers/ColorProvider";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/HeroSection";
import AssetsSection from "../components/AssetsSection/AssetsSection";
import GifsSection from "../components/GifsSection/GifsSection";


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
      <Box
        px={{
          base: 6,
          lg: "192px",
        }}
      >
        <GifsSection />


      </Box>
    </>
  );
};

export default Home;
