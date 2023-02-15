import { Box, Button, Hidden, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import React from "react";
import logo from "../../Images/logo.png";
import SideBar from "./SideBar"
import {  NavLink } from "react-router-dom";

let page = [
  {
    name: "About",
    url: "/",
  },
  {
    name: "Features",
    url: "/features",

  },
  {
    name: "Benefit",
    url: "/benefit",

  },
  {
    name: "Roadmap",
    url: "/roadmap",

  },
  {
    name: "Team",
    url: "/team",

  },
  {
    name: "Staking",
    url: "/staking",

  },
  {
    name: "Presale",
    url: "/presale",
  },
  {
    name: "Blog",
    url: "/blog",

  },
  {
    name: "FAQs",
    url: "/faqs",

  },
  {
    name: "Contact",
    url: "/contact",

  },
];
const PageLinks = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: "800",
    color: "rgba(255, 255, 255, 1)",
});
const NavBar = () => {
  return (
      <Container maxWidth="lg">
        <Box sx={{position:"relative"}}>
        <Box sx={{position:"absolute", width:"100%",py:3, display:"flex",justifyContent:"space-between", alignItems:"center" }}>
        <Box sx={{display:"flex"}}>
          <img src={logo} alt="logo" />
          <PageLinks
            sx={{
              fontSize: "16px",
              ml:1
            }}
          >
            Logo Here
          </PageLinks>
        </Box>
        <Hidden mdDown>
        <Box sx={{ display: "flex", alignItems:"center" , gap:3}}>
          {page.map(({ name, url }, index) => (
              <PageLinks component={NavLink}
              key={index}
               to={url}
               style={({ isActive }) => ({
                 color: "#fff",
                 textDecoration: isActive ? "underline" : "none",
               })}
              >{name}</PageLinks>
          ))}
            <Button sx={{ml:1,px:3,py:1,color:"#FFFFFF",borderRadius:1,background:"linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)"}}>Whitepaper</Button>
        </Box>
        </Hidden>
        <Hidden mdUp>
          <SideBar />
        </Hidden>
        </Box>
        </Box>
    </Container>
  );
};

export default NavBar;
