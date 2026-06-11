import React, { createContext, useContext, useState, useEffect } from 'react';

const THEMES = {
  aurora: 'aurora',
  green: 'green',
  orange: 'orange',
  blue: 'blue',
  red: 'red'
};

const THEME_COLORS = {
  green: '#7ED957',
  orange: '#F97316',
  blue: '#3B82F6',
  red: '#EF4444',
};

const THEME_COLORS_RGB = {
  green: '126 217 87',
  orange: '249 115 22',
  blue: '59 130 246',
  red: '239 68 68',
};

const AURORA_SEQUENCE = ['green', 'blue', 'orange', 'green', 'red', 'blue'];

const BackgroundContext = createContext(null);

export function BackgroundProvider({ children }) {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('background-theme-mode') || THEMES.aurora;
  });
  
  const [currentColor, setCurrentColor] = useState(THEME_COLORS.green);

  useEffect(() => {
    localStorage.setItem('background-theme-mode', themeMode);
    
    if (themeMode !== THEMES.aurora) {
      setCurrentColor(THEME_COLORS[themeMode]);
      document.documentElement.style.setProperty('--theme-color', THEME_COLORS[themeMode]);
      document.documentElement.style.setProperty('--theme-color-rgb', THEME_COLORS_RGB[themeMode]);
      return;
    }

    // Aurora Auto Mode
    let index = 0;
    setCurrentColor(THEME_COLORS[AURORA_SEQUENCE[index]]);
    document.documentElement.style.setProperty('--theme-color', THEME_COLORS[AURORA_SEQUENCE[index]]);
    document.documentElement.style.setProperty('--theme-color-rgb', THEME_COLORS_RGB[AURORA_SEQUENCE[index]]);

    const interval = setInterval(() => {
      index = (index + 1) % AURORA_SEQUENCE.length;
      setCurrentColor(THEME_COLORS[AURORA_SEQUENCE[index]]);
      document.documentElement.style.setProperty('--theme-color', THEME_COLORS[AURORA_SEQUENCE[index]]);
      document.documentElement.style.setProperty('--theme-color-rgb', THEME_COLORS_RGB[AURORA_SEQUENCE[index]]);
    }, 20000); // 20 seconds transition

    return () => clearInterval(interval);
  }, [themeMode]);

  return (
    <BackgroundContext.Provider value={{ themeMode, setThemeMode, currentColor, THEMES, THEME_COLORS }}>
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
