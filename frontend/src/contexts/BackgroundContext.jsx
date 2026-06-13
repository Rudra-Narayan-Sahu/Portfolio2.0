import React, { createContext, useContext, useState, useEffect } from 'react';

const ACCENT = '#ffffff';
const ACCENT_RGB = '255 255 255';

function randomGlowColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 55%)`;
}

const BackgroundContext = createContext(null);

export function BackgroundProvider({ children }) {
  const [glowColor, setGlowColor] = useState(randomGlowColor);

  // Always set --theme-color to static white; glowColor is separate
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', ACCENT);
    document.documentElement.style.setProperty('--theme-color-rgb', ACCENT_RGB);
  }, []);

  // Cycle glowColor to a random color every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowColor(randomGlowColor());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContext.Provider value={{ glowColor }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundTheme() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackgroundTheme must be used within a BackgroundProvider');
  }
  return context;
}
