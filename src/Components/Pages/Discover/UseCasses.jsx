import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import { Container } from "@mui/system";
import UseCase from "../../../Images/UseCase.png";
import Usecaseimg from "../../../Images/Usecaseimg.png";

let card = [
    {
      src: Usecaseimg,
    },
    {
      src: Usecaseimg,
    },
    {
      src: Usecaseimg,
    },
    {
      src: Usecaseimg,
    },
    {
      src: Usecaseimg,
    },
    {
      src: Usecaseimg,
    },
    {
        src: Usecaseimg,
      },
      {
        src: Usecaseimg,
      },
  ];
const UseCasses = () => {
  return (
    <Box sx={{ textAlign: "center", mt: -10 }}>
      <img src={UseCase} alt="UseCase" />
      <Box
        sx={{
          background: `url(${FeatureBackground}), #267A95`,
          backgroundSize: "100% 100%",
          height: "100%",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          mt: -30.2,
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "Zen Dots",
              fontWeight: "400",
              textAlign: "center",
              pt: 10,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            use cases
          </Typography>
          <Grid container spacing={3} py={5}>
          {card.map(({ src }, index) => (
            <Grid item md={3} sm={6} xs={12}>
              <Box textAlign="left">
                <img src={src} alt="img" />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                    my:1
                  }}
                >
                  Institutional Investors
                </Typography>
                <Typography
                sx={{
                    fontSize: "14px",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Box>
            </Grid>
             ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default UseCasses;
