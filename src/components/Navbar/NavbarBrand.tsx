import { Stack, Typography } from "@mui/material";
import { LucideTable } from "lucide-react";

/**
 * @description: component for the Logo and brand to be used in Navbar
 */
const NavbarBrand = () => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LucideTable />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          JAMT
        </Typography>
      </Stack>
    </>
  );
};

export default NavbarBrand;
