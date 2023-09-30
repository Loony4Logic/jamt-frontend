import { Button, Divider, Stack, Typography } from "@mui/material";
import NavbarBrand from "./Navbar/NavbarBrand";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES_MAP, SOCIALS } from "../AppConstants";

const FooterBrand = () => {
  return <NavbarBrand />;
};

const FooterNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Link to={ROUTES_MAP.ABOUT} style={{ color: "inherit" }}>
        <Typography textTransform={"capitalize"}>
          {" "}
          {ROUTES_MAP.ABOUT}
        </Typography>
      </Link>
      <Link to={ROUTES_MAP.DASHBOARD} style={{ color: "inherit" }}>
        <Typography textTransform={"capitalize"}>
          {" "}
          {ROUTES_MAP.DASHBOARD}
        </Typography>
      </Link>
      <Link to={ROUTES_MAP.LOGS} style={{ color: "inherit" }}>
        <Typography textTransform={"capitalize"}>
          {" "}
          {ROUTES_MAP.LOGS}{" "}
        </Typography>
      </Link>
    </Stack>
  );
};

const FooterSocials = () => {
  return (
    <Stack direction="row" alignItems={"center"}>
      <Button
        variant="text"
        color="inherit"
        startIcon={<Github />}
        href={SOCIALS.GITHUB}
        target="_blank"
      >
        {" "}
        Github
      </Button>
    </Stack>
  );
};

const Footer = () => {
  return (
    <>
      <Divider />
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-around"}
        p={2}
      >
        <FooterBrand />
        <FooterNav />
        <FooterSocials />
      </Stack>
    </>
  );
};

export default Footer;
