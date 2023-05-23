import { Timer } from "./pages/Timer";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { WithLayout } from "./layout/WithLayout";
import { Stats } from "./pages/Stats";
import { Settings } from "./pages/Settings";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/timer" replace={true} />,
  },
  {
    path: "/timer",
    element: <WithLayout WrappedComponent={() => <Timer />} />,
  },
  {
    path: "/stats",
    element: <WithLayout WrappedComponent={() => <Stats />} />,
  },
  {
    path: "/settings",
    element: <WithLayout WrappedComponent={() => <Settings />} />,
  },
]);

const getDesignTokens = (mode: "dark" | "light") => ({
  palette: {
    mode,
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

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

const ColorModeContext = React.createContext({});
