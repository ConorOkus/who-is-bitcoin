// ColorContext.tsx
import React, { createContext, useState, useEffect } from 'react';

type ColorContextType = {
  bgColor: string;
  heroImage: string;
};

export const ColorContext = createContext<ColorContextType>({ bgColor: '#C8EBD3', heroImage: '/assets/HeroImages/HeroImage1.png' });

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colors = ['#C8EBD3', '#FFEEED', '#CBF2FF', '#E8D9FF']; // Define your colors
  const images = [
    '/assets/HeroImages/HeroImage1.png',
    '/assets/HeroImages/HeroImage2.png',
    '/assets/HeroImages/HeroImage3.png',
    '/assets/HeroImages/HeroImage4.png'
  ]; // Define your image paths
  
  const [bgColor, setBgColor] = useState(colors[0]); // Set initial color
  const [heroImage, setHeroImage] = useState(images[0]); // Set initial image

  useEffect(() => {
    const delay = setTimeout(() => {
      let index = 1; 
      
      const interval = setInterval(() => {
        setBgColor(colors[index]);
        setHeroImage(images[index]);
        index = (index + 1) % colors.length; 
      }, 10000); 

      return () => clearInterval(interval);
    }, 5000); // 

    return () => clearTimeout(delay);
  }, []);

  return (
    <ColorContext.Provider value={{ bgColor, heroImage }}>
      {children}
    </ColorContext.Provider>
  );
};
