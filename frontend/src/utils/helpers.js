// src/utils/cn.js
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// src/utils/scrollToSection.js
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// src/utils/formatNumber.js
export const formatNumber = (num) => {
  return num.toLocaleString();
};
