import { PaletteMode, Theme, createTheme } from "@mui/material";
import { create } from "zustand";

export interface ThemeStore {
  mode: PaletteMode;
  isDarkMode: boolean;
  theme: Theme;
}

export interface ThemeStoreActions {
  setMode: () => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
}
export const getDesignTokens = (mode: "dark" | "light") => ({
    palette: {
      mode,
      text: {
        secondary: "white"
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            height: "auto",
          },
          body: {
            height: "auto",
          },
        },
      },
    },
  });
export const initialThemeState: ThemeStore = {
  mode: "light",
  isDarkMode: false,
  theme: createTheme(getDesignTokens("light"))
};



export const useThemeStore = create<ThemeStore & ThemeStoreActions>(
  (set, get) => ({
    ...initialThemeState,
    setMode: () =>
      set(() => ({
        mode: get().mode === "light" ? "dark" : "light",
        isDarkMode: get().mode === "light" ? true : false,
        theme: createTheme(getDesignTokens(get().mode === "light" ? "dark" : "light"))
      })),
    setIsDarkMode: (isDarkMode: boolean) =>
      set(() => ({
        isDarkMode,
        mode: isDarkMode ? "dark" : "light",
        theme: createTheme(getDesignTokens(isDarkMode ? "dark" : "light"))
      })),
  })
);
