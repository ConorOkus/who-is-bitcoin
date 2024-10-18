// ColorContext.tsx
import React, { createContext, useState, useEffect } from 'react';

type ColorContextType = {
  bgColor: string;
  heroImage: string;
};

export const ColorContext = createContext<ColorContextType>({ bgColor: 'green.100', heroImage: '' });

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bgColor, setBgColor] = useState('#C8EBD3');
  const [heroImage, setHeroImage] = useState('/path/to/default-image.png');

  useEffect(() => {
    const colors = ['#C8EBD3', '#FFEEED', '#CBF2FF' , "#E8D9FF"]; // Add more colors as needed
    const images = ['/assets/HeroImages/HeroImage1.png', '/assets/HeroImages/HeroImage2.png', '/assets/HeroImages/HeroImage3.png', '/assets/HeroImages/HeroImage4.png' ]; // Add your image paths
    let index = 0;

    const interval = setInterval(() => {
      setBgColor(colors[index]);
      setHeroImage(images[index]);
      index = (index + 1) % colors.length;
    }, 10000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ColorContext.Provider value={{ bgColor, heroImage }}>
      {children}
    </ColorContext.Provider>
  );
};