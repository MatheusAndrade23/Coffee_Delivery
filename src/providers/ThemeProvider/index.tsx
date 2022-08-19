import { createContext, ReactNode, useEffect, useState } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/global-styles';

import { darkTheme } from '../../styles/themes/dark';
import { lightTheme } from '../../styles/themes/light';

interface ThemeProviderContextType {
  changeTheme: () => void;
  theme: Object;
}

export const ThemeProviderContext = createContext(
  {} as ThemeProviderContextType,
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const recoveredTheme = localStorage.getItem('@delivery-coffee/theme');

    if (recoveredTheme) {
      setTheme(recoveredTheme);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('@delivery-coffee/theme', newTheme);
  };

  return (
    <StyledThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ThemeProviderContext.Provider value={{ changeTheme, theme }}>
        {children}
      </ThemeProviderContext.Provider>
      <GlobalStyles />
    </StyledThemeProvider>
  );
};
