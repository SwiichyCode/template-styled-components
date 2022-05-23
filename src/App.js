import React, { createContext, Fragment } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/themes";
import useLocalStorageState from "./utils/useLocalStorageState";
import Theme from "./components/Theme";
import ResponsiveRendering from "./components/ResponsiveRendering";

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
          {/* Exemple: */}

          {/* Theme Switcher exemple*/}
          <Theme
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          {/* Responsive Rendering Exemple */}
          <ResponsiveRendering />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </Fragment>
  );
}
