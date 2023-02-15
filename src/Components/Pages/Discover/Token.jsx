import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import TokenChart from "../../../Images/TokenChart.png";
let Chartheading = [
    {
      heading: "TEAM & ADVISOR",
    },
    {
      heading: "Reserve Fund",
    },
    {
      heading: "Presale Token",
    },
    {
      heading: "ICO Token Sales",
    },
    {
      heading: "Presale Token",
    },
  ];
const Token = () => {
  return (
    <Box
      sx={{
        background: `url(${FeatureBackground}), #021B33`,
        backgroundSize: "100% 100%",
        backgroundPosition:"center center",
        // height: "100%",
        // minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        py: 10,
      }}
    >
      <Container>
        <Box textAlign="center">
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "Zen Dots",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            Token Allocation
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
              px: { xs: 0, sm: 10, md: 36 },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam
            est, elit venenatis nulla.
          </Typography>
        </Box>
        <Box>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <img src={TokenChart} alt="TokenChart" width="100%" />
          </Grid>
          <Grid item md={6} xs={12}>
          {Chartheading.map(({ heading }, index) => (
            <Box key={index} sx={{ my:index!==0?2:0,borderBottom:"5px solid rgba(91, 248, 255, 1)"}}>
            <Box sx={{ px:3, display:"flex", justifyContent:"space-between", background:"rgba(212, 114, 146, 0.2)", color:"rgba(255, 255, 255, 1)", py:1, }}>
                <Typography>{heading}</Typography>
                <Typography>15,000,000,000</Typography>
            </Box>
            </Box>
          ))}
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Token;
