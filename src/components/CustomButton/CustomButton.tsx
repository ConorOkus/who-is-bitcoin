import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  borderColor?: string;
  fontSize?: string;
  padding?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  borderColor = "black",
  fontSize = "16px",
  padding = "0.5rem 1rem",
  ...props
}) => {
  const maskStyles = useMemo(() => ({
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
  }), [props.bg]);

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

  return (
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
        bg: "gray.300",
        _before: { backgroundColor: "gray.300" },
        _after: { backgroundColor: "gray.300" },
      }}
      _before={leftMask}
      _after={rightMask}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
