import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { theme } from '../styles/Theme';

export type PossibleThemes = 'light' | 'dark';

type Context = {
  changeTheme: (name: PossibleThemes) => void;
  themeName: PossibleThemes;
};

export const ThemeContext = React.createContext<Context>({
  changeTheme: () => {},
  themeName: 'light',
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<PossibleThemes>('light');

  const changeTheme = async (name: PossibleThemes) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, changeTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
