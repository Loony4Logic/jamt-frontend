import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Box,
  Container,
  Menu,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Activity,
  BarChartHorizontalBig,
  LucideIcon,
  MenuIcon,
  Settings,
} from "lucide-react";
import { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES_MAP } from "../../AppConstants";
import ThemeSwitchToggle from "../ThemeSwitchToggle";

export type NavDataValueType = {
  label: string;
  icon?: LucideIcon;
  component?: React.ReactNode;
  linkTo?: string;
};

const NavData = [
  {
    label: ROUTES_MAP.DASHBOARD,
    icon: BarChartHorizontalBig,
    linkTo: ROUTES_MAP.DASHBOARD,
  },

  {
    label: ROUTES_MAP.LOGS,
    icon: Activity,
    linkTo: ROUTES_MAP.LOGS,
  },
] as NavDataValueType[];

const NavDataLeft = [
  {
    label: "themeSwitch",
    component: <ThemeSwitchToggle />,
  },
  {
    label: ROUTES_MAP.SETTINGS,
    component: (
      <IconButton component={NavLink} to={ROUTES_MAP.SETTINGS}>
        <Settings />
      </IconButton>
    ),
  },
] as NavDataValueType[];

const Navbar = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {NavData.map((NavItem: NavDataValueType) => (
                  <MenuItem key={NavItem.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{NavItem.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Brand Name Logo here */}
            <NavbarBrand />

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Tabs value={location.pathname}>
                {NavData.map((NavItem: NavDataValueType) => (
                  <Tab
                    component={NavLink}
                    to={NavItem?.linkTo || "#"}
                    value={`/${NavItem?.linkTo}`}
                    key={NavItem.label}
                    label={NavItem.label}
                    icon={NavItem.icon ? <NavItem.icon /> : undefined}
                    iconPosition="start"
                  />
                ))}
              </Tabs>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {NavDataLeft.map((NavItemLeft: NavDataValueType) => {
                if (NavItemLeft?.component) return NavItemLeft.component;
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
