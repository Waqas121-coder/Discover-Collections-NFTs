import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import Community from "../../../Images/Community.png";

const Comunity = () => {
  return (
    <Box
      sx={{
        background: `url(${FeatureBackground}), #021B33`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={{ py: { xs: 5, md: 15 } }}>
        <Box
          sx={{
            background: `url(${Community}), #071836 `,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            height: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box sx={{ textAlign: "center", py: 5 }}>
            <Typography
              sx={{
                fontSize: "29.51px",
                fontFamily: "Zen Dots",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Join our Community
            </Typography>
            <Typography
              sx={{
                fontSize: "12.3px",
                fontFamily: "Inter",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 1)",
                px: { xs: 2, sm: 8, md: 28 },
                py: 3,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed
              pulvinar nisl amet, viverra nulla ut. Aliquet nunc justo, bibendum
              nisl varius fringilla odio eu. Ut et, nullam tristique at
              ultrices. Viverra eget ultrices risus risus massa adipiscing
              adipiscing. Integer tempus aliquam vitae urna, ipsum mattis
              hendrerit quam.
            </Typography>
            <Button
              sx={{
                mt: { xs: 1, sm: 2, md: 5 },
                ml: 1,
                px: 3,
                py: 1,
                color: "#FFFFFF",
                borderRadius: 1,
                background:
                  "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
              }}
            >
              Whitepaper
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Comunity;
