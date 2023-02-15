import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import FeatureBackground from "../../../Images/FeatureBackground.png";
import mapfile1 from "../../../Images/mapfile1.png";
import mapfile2 from "../../../Images/mapfile2.png";
import mapfile3 from "../../../Images/mapfile3.png";
import roadmapBGTop from "../../../Images/roadmapBGTop.png";

import React from "react";
const RoadMapfile = () => {
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
        <Box sx={{ pt: 5, pb: 15 }}>
          {/* one section  */}
          <Box sx={{ position: "relative", pl: 1.5 }}>
            <img
              src={mapfile1}
              alt="mapfile1"
              style={{ position: "absolute", width: "100px", left: "-12px" }}
            />
            <Box
              sx={{
                pt: 1,
                pb: 5,
                pl: 8,
                borderLeft: "2px solid rgb(7, 75, 158)",
                borderBottom: "2px solid rgb(7, 75, 158)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  maxWidth: "600px",
                  height: "40px",
                  alignItems: "center",
                  background: "#13465A",
                }}
              >
                <Typography
                  sx={{
                    pl: 5,
                    fontSize: { xs: "12px", md: "16px" },
                    color: "rgb(91, 248, 255)",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  Level 01
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#ffffff",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  - CyberKongz VX Launch
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "4px",
                  mt: "2px",
                  background: "#13465A",
                }}
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  background: "#13465A",
                  p: { xs: 1, sm: 3, md: 5 },
                  mt: 4,
                  mr: 10,
                  width: "92%",
                }}
              >
                <img
                  src={roadmapBGTop}
                  alt="roadmapBGTop"
                  style={{
                    width: "50px",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: "400",
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
          {/* rightborder solid */}
          <Box
            sx={{ height: "50px", borderRight: "2px solid rgb(7, 75, 158)" }}
          / >
          {/* two section  */}
          <Box sx={{ position: "relative", pl: 1.5 }}>
            <img
              src={mapfile2}
              alt="mapfile2"
              style={{ position: "absolute", width: "100px", right: "-12px" }}
            />
            <Box
              sx={{
                pt: 1,
                pb: 5,
                pr: 8,
                borderRight: "2px dashed rgb(7, 75, 158)",
                borderBottom: "2px dashed rgb(7, 75, 158)",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  maxWidth: "600px",
                  height: "40px",
                  alignItems: "center",
                  background: "#13465A",
                  zIndex: 9999,
                }}
              >
                <Typography
                  sx={{
                    pl: 5,
                    fontSize: { xs: "12px", md: "16px" },
                    color: "rgb(91, 248, 255)",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  Level 02
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#ffffff",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  - CyberKongz VX Launch
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "4px",
                  mt: "2px",
                  background: "#13465A",
                }}
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  background: "#13465A",
                  p: { xs: 1, sm: 3, md: 5 },
                  mt: 4,
                  //   ml: 10,
                  width: "93%",
                }}
              >
                <img
                  src={roadmapBGTop}
                  alt="roadmapBGTop"
                  style={{
                    width: "50px",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: "400",
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
          {/* leftborder dashed */}
          <Box
            sx={{ height: "50px", borderLeft: "2px dashed rgb(7, 75, 158)" }}
          />
          {/* three section  */}
          <Box sx={{ position: "relative", pl: 1.5 }}>
            <img
              src={mapfile1}
              alt="mapfile1"
              style={{ position: "absolute", width: "100px", left: "-12px" }}
            />
            <Box
              sx={{
                pt: 1,
                pb: 5,
                pl: 8,
                borderLeft: "2px solid rgb(7, 75, 158)",
                borderBottom: "2px solid rgb(7, 75, 158)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  maxWidth: "600px",
                  height: "40px",
                  alignItems: "center",
                  background: "#13465A",
                }}
              >
                <Typography
                  sx={{
                    pl: 5,
                    fontSize: { xs: "12px", md: "16px" },
                    color: "rgb(91, 248, 255)",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  Level 03
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#ffffff",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  - CyberKongz VX Launch
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "4px",
                  mt: "2px",
                  background: "#13465A",
                }}
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  background: "#13465A",
                  p: { xs: 1, sm: 3, md: 5 },
                  mt: 4,
                  mr: 10,
                  width: "92%",
                }}
              >
                <img
                  src={roadmapBGTop}
                  alt="roadmapBGTop"
                  style={{
                    width: "50px",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: "400",
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
          {/* rightborder solid */}
          <Box
            sx={{ height: "50px", borderRight: "2px solid rgb(7, 75, 158)" }}
          />
          {/* four section  */}
          <Box sx={{ position: "relative", pl: 1.5 }}>
            <img
              src={mapfile2}
              alt="mapfile2"
              style={{ position: "absolute", width: "100px", right: "-12px" }}
            />
            <Box
              sx={{
                pt: 1,
                pb: 5,
                pr: 8,
                borderRight: "2px dashed rgb(7, 75, 158)",
                borderBottom: "2px dashed rgb(7, 75, 158)",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  maxWidth: "600px",
                  height: "40px",
                  alignItems: "center",
                  background: "#13465A",
                  zIndex: 9999,
                }}
              >
                <Typography
                  sx={{
                    pl: 5,
                    fontSize: { xs: "12px", md: "16px" },
                    color: "rgb(91, 248, 255)",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  Level 02
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#ffffff",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  - CyberKongz VX Launch
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "4px",
                  mt: "2px",
                  background: "#13465A",
                }}
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  background: "#13465A",
                  p: { xs: 1, sm: 3, md: 5 },
                  mt: 4,
                  //   ml: 10,
                  width: "93%",
                }}
              >
                <img
                  src={roadmapBGTop}
                  alt="roadmapBGTop"
                  style={{
                    width: "50px",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "20px",
                    fontFamily: "Inter",
                    fontWeight: "400",
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
          {/* leftborder dashed */}
          <Box
            sx={{ height: "50px", borderLeft: "2px dashed rgb(7, 75, 158)" }}
          />
          <Box sx={{ position: "relative", pl: 1.5 }}>
            <img
              src={mapfile3}
              alt="mapfile3"
              style={{ position: "absolute", width: "50px", left: "-20px" }}
            />
        </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RoadMapfile;
