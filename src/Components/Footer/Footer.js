import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import FooterTwitter from "../../Images/FooterTwitter.png";
import FooterFB from "../../Images/FooterFB.png";
import Footer1 from "../../Images/Footer1.png";
import FooterYT from "../../Images/FooterYT.png";
import FooterTiktok from "../../Images/FooterTiktok.png";
import Footer2 from "../../Images/Footer2.png";

const Footer = () => {
  return (
    <Box sx={{ background: "rgba(0, 35, 70, 1)", textAlign: "center" }}>
      <Box py={7}>
        <Typography
          sx={{
            fontSize: "26.77px",
            fontFamily: "Zen Dots",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Don't miss out, Stay updated
        </Typography>
        <Box sx={{display:"flex", justifyContent:"center",}}>  
                <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center",width:{xs:"90%", sm:"70%",md:"36%"}, background:"#193958", borderRadius:"36px"}}>
        <form>
            <TextField
            size="medium"
            variant="standard"
              id="email"
              InputProps={{
                disableUnderline: true,
              }}
              placeholder="Enter Your Email"
              sx={{input: { color: "white" },  width: {xs:"80%", sm:"70%", }, "& .MuiOutlinedInput-notchedOutline":{
                borderRadius:"36px",
              } }}
            />
             </form>
        <Button
              sx={{
                // ml: -18,
                px: 5,
                py:1,
                color: "#FFFFFF",
                borderRadius: 7,
                background:
                  "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
              }}
            >
              Subscribe
            </Button>  
        </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "11.16px",
            fontFamily: "Inter",
            fontWeight: "400",
            color: "rgba(246, 246, 246, 1)",
            textAlign:"center"
          }}
        >
          Don’t hesitate to subscribe to latest news about ICo markets as well
          as crucial financial <br /> knowledge to become successful investors globally
        </Typography>
        <Box sx={{display:"flex", gap:"10px", justifyContent:"center", pt:3}}>
            <img src={FooterTwitter} alt="FooterTwitter" />
            <img src={FooterFB} alt="FooterFB" />
            <img src={Footer1} alt="Footer1" />
            <img src={FooterYT} alt="FooterYT" />
            <img src={FooterTiktok} alt="FooterTiktok" />
            <img src={Footer2} alt="Footer2" />
        </Box>
      </Box>
      <Box sx={{pt:1,borderTop:"1px solid rgba(26, 100, 205, 1)"}}>
        <Typography sx={{
          fontSize: "10.41px",
          fontFamily: "Inter",
          fontWeight: "400",
          color: "rgba(255, 255, 255, 1)",
        }}>© 2022. All rights reserved by Avitex
</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
