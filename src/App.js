import React, { createContext, Fragment } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/themes";
import styled from "styled-components";
import useLocalStorageState from "./utils/useLocalStorageState";

const themesMap = {
  light,
  dark,
};

export const ThemePreferenceContext = createContext();

export default function App() {
  const [currentTheme, setCurrentTheme] = useLocalStorageState(
    "theme",
    "light"
  );
  const theme = { colors: themesMap[currentTheme] };

  return (
    <Fragment>
      <ThemePreferenceContext.Provider
        value={{ currentTheme, setCurrentTheme }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          {/* Template Styled Components */}
          <select
            value={currentTheme}
            onChange={(e) => setCurrentTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <Text>Hello world</Text>
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </Fragment>
  );
}

const Text = styled.p(
  ({ theme }) => `
    color: ${theme.colors.primary}
  `
);
