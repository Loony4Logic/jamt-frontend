import { Button, Divider, Stack, Typography } from "@mui/material";
import NavbarBrand from "./Navbar/NavbarBrand";
import { Github } from "lucide-react";

const FooterBrand = () => {
  return <NavbarBrand />;
};

const FooterNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography> About</Typography>
      <Typography> Dashboard</Typography>
      <Typography> Logs </Typography>
    </Stack>
  );
};

const FooterSocials = () => {
  return (
    <Stack direction="row" alignItems={"center"}>
      <Button variant="text" color="inherit" startIcon={<Github />}>
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
