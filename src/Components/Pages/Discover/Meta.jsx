import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import MetaDiscover from "../../../Images/MetaDiscover.png";
import Feature1 from "../../../Images/Feature1.png";
import Feature2 from "../../../Images/Feature2.png";
import Feature3 from "../../../Images/Feature3.png";
import Feature4 from "../../../Images/Feature4.png";
import Feature5 from "../../../Images/Feature5.png";
import Feature6 from "../../../Images/Feature6.png";
import mainFeature from "../../../Images/mainFeature.png";
import mainFeaturePolygon from "../../../Images/mainFeaturePolygon.png";


let NumbersCard = [
  {
    Cardnumbers: "01",
  },
  {
    Cardnumbers: "02",
  },
  {
    Cardnumbers: "03",
  },
  {
    Cardnumbers: "04",
  },
];
let ImgsCard = [
  {
    src: Feature1,
  },
  {
    src: Feature2,
  },
  {
    src: Feature3,
  },
  {
    src: Feature4,
  },
  {
    src: Feature5,
  },
  {
    src: Feature6,
  },
];
const Meta = () => {
  return (
    <Box
      sx={{
        background: `url(${FeatureBackground}), #021B33`,
        // background:"grey",
        backgroundSize: "100% 100%",
        height: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container sx={{ py: 5 }}>
        <Grid container spacing={5}>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={MetaDiscover} alt="MetaDiscover" />
              <Typography
                sx={{
                  fontSize: "31.68px",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 1)",
                  pt: 3,
                }}
              >
                WHAT IS Meta?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14.4px" },
                  fontFamily: "Inter",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 1)",
                  py: 3,
                  px:6,
                  textAlign:"center"
                }}
              >
                Approving Meta is a collection of 9,999 adorable corgis living
                on the Ethereum blockchain
              </Typography>
              <Button
                sx={{
                  ml: 1,
                  px: 3,
                  py: 1,
                  color: "#FFFFFF",
                  borderRadius: 15,
                  background:
                    "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                }}
              >
                Whitepaper
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={10}>
              {NumbersCard.map(({ Cardnumbers }, index) => (
                <Grid item md={6} sm={6} xs={12}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Zen Dots",
                        fontWeight: "400",
                        background:
                          "-webkit-linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        pt: 3,
                      }}
                    >
                      {Cardnumbers}
                    </Typography>
                    <Typography sx={{
                        fontSize: {xs:"13px",md:"16px"},
                        fontFamily: "Zen Dots",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                      }}>Institutional Investors</Typography>
                    <Typography   sx={{
                        fontSize: {xs:"12px",md:"14px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                      }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ my: 15 }}>
          <Typography sx={{fontSize:{xs:"30px",sm:"36px"}, fontFamily:"Zen Dots", fontWeight:"400", textAlign:{xs:"center", md:"left", color:"rgba(255, 255, 255, 1)"}}}>FEATURES & APPLICATIONS</Typography>
        <Box py={5}>
        <Grid container spacing={5}>
        <Grid item md={6}>
          <Grid container spacing={2}>
            {ImgsCard.map(({ src }, index) => (
              <Grid item md={6} sm={6} xs={12}>
                <Box sx={{
                  p:1,
                  borderRadius:"10px",
                  background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, rgba(66, 37, 217, 0.1) 0%, rgba(87, 212, 230, 0.1) 100%)",
            }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={src} alt="img" />
                    <Typography sx={{
                      ml:1,
                  fontSize: "17.6px",
                  fontFamily: "Inter",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 1)",
                }}>Buy and sell items easily</Typography>
                  </Box>
                  <Typography sx={{pl:"36px",
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 1)",
                }}>
                    - As soon as our artists finish their magnum opus, <br />
                    - The Alpha Kongs Club opens its gates to an exclusive
                    guest
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} display="flex" alignItems="center" justifyContent="center">
            <Box mt={{md:0,xs:10}}>
                <img src={mainFeature} width="100%" alt="mainFeature" />
            </Box>
                <Box sx={{display:{md:"block", xs:"none", }, mt:{md:32,lg:40}}}>
                <img src={mainFeaturePolygon} width="100%" alt="mainFeaturePolygon" />
                </Box>
        </Grid>
      </Grid>
      </Box>
      </Box>
      </Container>
    </Box>
  );
};

export default Meta;
