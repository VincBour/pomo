import { Timer } from "./pages/Timer";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { WithLayout } from "./layout/WithLayout";
import { Stats } from "./pages/Stats";
import { Settings } from "./pages/Settings";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useThemeStore } from "./store/useThemeStore";

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

function App() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
