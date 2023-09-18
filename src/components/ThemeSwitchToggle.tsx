import { IconButton, useTheme } from "@mui/material";
import { MoonStar, Sun } from "lucide-react";
import { AppThemeHelperContext } from "../AppThemeHelpersContext";
import { useContext } from "react";

const ThemeSwitchToggle = () => {
  const theme = useTheme();
  const appThemeHelpers = useContext(AppThemeHelperContext);

  return (
    <>
      <IconButton onClick={() => appThemeHelpers.toggleThemeMode()}>
        {theme.palette.mode === "dark" ? <MoonStar /> : <Sun />}
      </IconButton>
    </>
  );
};

export default ThemeSwitchToggle;
