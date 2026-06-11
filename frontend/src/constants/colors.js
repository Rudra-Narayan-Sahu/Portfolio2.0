// src/constants/colors.js
export const colors = {
  bg: {
    primary: '#0B0F0D',
    secondary: '#111715',
    tertiary: 'rgba(255,255,255,0.03)',
  },
  accent: '#7ED957',
  text: {
    primary: '#FFFFFF',
    secondary: '#B8C1BC',
  },
};

export const rgba = {
  accent: (opacity = 1) => `rgba(126, 217, 87, ${opacity})`,
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(11, 15, 13, ${opacity})`,
};
