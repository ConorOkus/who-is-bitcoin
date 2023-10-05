import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";

interface ExtendedHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

export function BookmanHeading(props: ExtendedHeadingProps) {
  return (
    <Heading
      fontFamily='heading'
      fontWeight={400}
      fontStyle='normal'
      fontSize={{
        base: "32px",
        md: "48px",
      }}
      background='linear-gradient(to bottom, #EFF68F, #DD7D6D)'
      color='transparent'
      backgroundClip='text'
      lineHeight={1}
      sx={{
        WebkitTextFillColor: "transparent", // Equivalent to setting the text color, but more specific for Webkit
        WebkitTextStroke: "2px #B93F28",
      }}
      position='relative'
      {...props}
    >
      {props.children}
    </Heading>
  );
}
