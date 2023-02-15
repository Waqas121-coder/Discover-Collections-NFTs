import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import roadMap1 from "../../../Images/roadMap1.png";
import roadMap2 from "../../../Images/roadMap2.png";
import roadmapBGTop from "../../../Images/roadmapBGTop.png";

const Roadmap = () => {
  return (
    <Box
      sx={{
        background: `url(${FeatureBackground}), #021B33`,
        backgroundSize: "100% 100%",
        height: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box>
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "Zen Dots",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            Roadmap
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "Inter",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
              // px: { xs: 0, sm: 10, md: 36 },
            }}
          >
            The most technologically advanced species will not stop any time
            soon...
          </Typography>
        </Box>
        <Box sx={{ py: 5 }}>
          <Box sx={{ display: "flex" }}>
            <img src={roadMap1} alt="roadMap1" />
            <Box sx={{ background: "#174F66", py: 2, pl: 2, pr: 15 }}>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "16px",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                Level 01 - CyberKongz VX Launch
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            {/* <img src={roadMap1} alt="roadMap1" /> */}
            <Box
              sx={{
                borderLeft: "1px solid red",
                borderBottom: "1px solid red",
                width:"100%",
                py: 2,
                ml: 3,
                pb: 5,
                mr: 15,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "relative",
                    p: 1,
                    ml: 10,
                    mt: 1,
                    background: "#175269",
                  }}
                >
                  <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                    <img src={roadmapBGTop} alt="roadmapBGTop" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "inter",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    The time for you to get your own CyberKongz VX as a custom
                    playable Metaverse Avatar has finally arrived. CyberKongz VX
                    are launched in partnership with The Sandbox and the
                    integration as playable avatars into The Sandbox game is now
                    in development.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "30px",
              borderRight: "1px solid red",
              width:"100%",
              // mr: { xs: 11, md: 15 },
            }}
          ></Box>
          {/* <Box sx={{ display: "flex" }}>
            <Box>
              <Box sx={{ background: "#174F66", py: 2, px: 2 }}>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: "16px",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  Level 02 - Kongz Utility Expansion
                </Typography>
              </Box>
              <img src={roadMap2} alt="roadMap2" />
            </Box>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Roadmap;
