import { Navigate, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Box,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Footer from "./components/Footer";
import { ROUTES_MAP } from "./AppConstants";
import { useState } from "react";
import {
  AppThemeHelperContext,
  AppThemeHelperContextType,
} from "./AppThemeHelpersContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const location = useLocation();
  const [themeMode, setThemeMode] = useState<PaletteMode>("dark");

  const appThemeHelpers: AppThemeHelperContextType = {
    toggleThemeMode: () => {
      setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    },
  };

  if (location.pathname == "/") return <Navigate to={`${ROUTES_MAP.LOGS}`} />;

  return (
    <>
      <AppThemeHelperContext.Provider value={appThemeHelpers}>
        <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
          <CssBaseline />
          <Navbar />
          <Box sx={{ my: 2, p: 2 }}>
            <Outlet />
          </Box>
          <Footer />
        </ThemeProvider>
      </AppThemeHelperContext.Provider>
    </>
  );
}

export default App;
