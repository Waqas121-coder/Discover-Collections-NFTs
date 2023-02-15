import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import DiscountBG from "../../../Images/DiscountBG.png";
import DiscountCard from "../../../Images/DiscountCard.png";
import documenticon from "../../../Images/documenticon.png";

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
];
const Document = () => {
  return (
    <Box
      sx={{
        background: `url(${FeatureBackground}), #021B33`,
        backgroundSize: "100% 100%",
        backgroundPosition:"center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box
          sx={{
            background: `url(${DiscountBG})`,
            backgroundSize: "100% 100%",
            backgroundPosition:"center center",
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
              Document
            </Typography>
            <Typography
              sx={{
                fontSize: "12.3px",
                fontFamily: "Inter",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 1)",
                px:{xs:5, md:0}
              }}
            >
              Download the whitepaper and learn about ICO Token, the unique ICO
              Crypto approach and the team/advisors.
            </Typography>
          </Box>
          <Box px={5}>
            <Grid container spacing={3} py={2}>
              {Chartheading.map(({ heading }, index) => (
                <Grid item md={3} sm={6} xs={12}>
                  <Box
                    sx={{
                      background: `url(${DiscountCard})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      mt: {xs:3,md:5},
                      mb: {xs:3,md:5},
                      textAlign: "center",
                      transition: "0.3s",
                      py:5,
                      "&:hover":{
                        mt:1,
                        "& .iconimg":{
                          display:"block"
                        },
                        "& .icontext":{
                          pt:0,
                          pb:3
                        }
                      }
                    }}
                  >
                    <Typography className="icontext"
                      sx={{
                        fontSize: "19.68px",
                        fontFamily: "Zen Dots",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                        pt: 5,
                        pb:5
                      }}
                    >
                      ONE PAPER
                    </Typography>
                    <Box display="none"  className="iconimg">
                    <img   src={documenticon} alt="documenticon" />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      {/* <Question /> */}
    </Box>
  );
};

export default Document;
