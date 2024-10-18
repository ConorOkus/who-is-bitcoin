"use client";

import { Box } from "@chakra-ui/react";
import AssetsSection from "../components/AssetsSection/AssetsSection";
import GifsSection from "../components/GifsSection/GifsSection";

const Home: React.FC = () => {
  return (
    <>
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
