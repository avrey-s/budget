import React, { createContext, useState, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({
  // Default theme is light
  theme: 'light',
  // Function to toggle between light and dark theme
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
