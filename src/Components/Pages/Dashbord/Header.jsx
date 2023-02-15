import React from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Container, styled } from "@mui/system";
import Sweeping from "../../../Images/Sweeping.png";
import currencyicon from "../../../Images/currencyicon.png";
import StakedCards from "./StakedCards";
import Statistics from "./Statistics";
import JEDSTAR from "./JEDSTAR";
import Calculator from "./Calculator";

const NavbarLink = styled(Typography)({
  fontSize: "12px",
  fontFamily: "Inter",
  fontWeight: "800",
  color: "rgba(255, 255, 255, 1)",
});
const Header = () => {
  return (
    <Box
      sx={{
        background: `url(${Sweeping}), #021B33`,
        backgroundSize: "100% 100%",
        height: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={{pt:15}}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "Zen Dots",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            PULSAREX staking Dashboard
          </Typography>

          <Button
            sx={{
              my: 2,
              px: 3,
              py: 1,
              color: "#FFFFFF",
              borderRadius: 1,
              fontSize:"25px",
              fontFamily:"Zen Dots",
              fontWeight:"400",
              borderRadius:"36px",
              background:
                "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
            }}
          >
            Stake puls
          </Button>
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:3}}>
            <Typography sx={{fontSize:"18px", fontFamily:"Josefin Sans", fontWeight:"400", color:"rgba(255, 255, 255, 1)"}}>Powered by</Typography>
            <img src={currencyicon} alt="currencyicon" />
            <Typography sx={{fontSize:"18px", fontFamily:"Josefin Sans", fontWeight:"400", color:"rgba(255, 255, 255, 1)"}}>Binance</Typography>
          </Box>
          <StakedCards />
          <Calculator />
          <Statistics />
          <JEDSTAR />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
