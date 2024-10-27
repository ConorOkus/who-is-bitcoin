import { Button, ButtonProps, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode, useMemo } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  borderColor?: string;
  fontSize?: string;
  padding?: string;
  href?: string; // Prop for link
  hoverBackgroundColor?: string; // Prop for hover background color
  hoverTextColor?: string; // Prop for hover text color
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  borderColor = "black",
  fontSize = "16px",
  padding = "0.5rem 1rem",
  href,
  hoverBackgroundColor = "gray.300",
  hoverTextColor = "black",
  ...props
}) => {
  const maskStyles = useMemo(
    () => ({
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      height: "100%",
      width: "10px",
      backgroundColor: props.bg || "gray.200",
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      transition: "background-color 0.2s ease",
    }),
    [props.bg]
  );

  const leftMask = {
    ...maskStyles,
    left: `-${parseFloat(padding.split(" ")[1]) + 5}px`,
    maskImage: "url('/assets/CustomButtonAssets/ButtonLeftBorder.svg')",
  };

  const rightMask = {
    ...maskStyles,
    right: `-${parseFloat(padding.split(" ")[1]) + 4.8}px`,
    maskImage: "url('/assets/CustomButtonAssets/ButtonRightBorder.svg')",
  };

  const buttonContent = (
    <Button
      {...props}
      position="relative"
      padding={padding}
      border="none"
      fontSize={fontSize}
      borderRadius="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={props.bg || "gray.200"}
      color={props.color || "black"}
      overflow="visible"
      minHeight="40px"
      _hover={{
        bg: hoverBackgroundColor,
        color: hoverTextColor,
        _before: { backgroundColor: hoverBackgroundColor },
        _after: { backgroundColor: hoverBackgroundColor },
      }}
      _before={leftMask}
      _after={rightMask}
    >
      {children}
    </Button>
  );

   // Determine if the link is internal or external
   const isExternal = href?.startsWith("http") || href?.startsWith("mailto:");

   // Wrap button in appropriate Link component based on `isExternal`
   if (href) {
     return isExternal ? (
       <ChakraLink href={href} isExternal style={{ textDecoration: "none" }}>
         {buttonContent}
       </ChakraLink>
     ) : (
       <NextLink href={href} passHref>
         <ChakraLink style={{ textDecoration: "none" }}>{buttonContent}</ChakraLink>
       </NextLink>
     );
   }
 

  return buttonContent;
};

export default CustomButton;
