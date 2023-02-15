import React, { useEffect, useState } from "react";
import {
  Stack,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Container, styled } from "@mui/system";
import Sweeping from "../../../Images/Sweeping.png";
import swapingframe from "../../../Images/swapingframe.png";
import swapingframeimg from "../../../Images/swapingframeimg.png";
import downarrowswipping from "../../../Images/downarrowswipping.png";
import swapingframcolor from "../../../Images/swapingframcolor.png";
import CustomizedProgressBars from "./CustomizedProgressBars";
let DMY = [
  {
    DMYdays: "DAYS",
  },
  {
    DMYdays: "HOURS",
  },
  {
    DMYdays: "MINUTES",
  },
  {
    DMYdays: "SECONDS",
  },
];
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const NavbarLink = styled(Typography)({
  fontSize: "12px",
  fontFamily: "Inter",
  fontWeight: "800",
  color: "rgba(255, 255, 255, 1)",
});
const Swaping = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMinutes] = useState(0);
  const [secs, setSeconds] = useState(0);
  const deadline = "February, 20, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  console.log(hours);

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  });

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
        {/* <Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <img src={logo} alt="logo" />
            <NavbarLink
              sx={{
                fontSize: "16px",
                ml: 1,
                mt: 2,
              }}
            >
              Logo Here
            </NavbarLink>
          </Box>
          <Button
            sx={{
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
        </Box> */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "Zen Dots",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            PULSAREX Swaping
          </Typography>
          <Grid container spacing={3} py={5} px={{ sm: 0, md: 10 }}>
            <Grid item md={6} sm={12} xs={12}>
            <Box px={{xs:1, sm:10, md:0}}>
              <Box
                sx={{
                  background: `url(${swapingframe}), #021B33`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{ background: "#044474", border: "10px solid #3DA1A9" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        px: 3,
                      }}
                    >
                      <Box sx={{ color: "rgba(255, 255, 255, 1)", pt: 2 }}>
                        <Typography
                          sx={{ fontSize: "19px", textAlign: "left" }}
                        >
                          From
                        </Typography>
                        <TextField
                          placeholder="0.00"
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          sx={{ input: { color: "white", fontSize: "35px" } }}
                        />
                      </Box>
                      <img src={swapingframeimg} alt="swapingframeimg" />
                    </Box>
                    <Box sx={{ display: "flex", my: 2 }}>
                      <Box
                        sx={{
                          background: "#3DA1A9",
                          height: "50px",
                          // maxWidth:"30px",
                          width: "50%",
                          // width: "40%",
                          borderBottomRightRadius: "36px",
                          borderTopRightRadius: "36px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "20%",
                          textAlign: "center",
                        }}
                      >
                        <img src={downarrowswipping} alt="downarrowswipping" />
                        {/* <ArrowRightAltIcon /> */}
                      </Box>
                      <Box
                        sx={{
                          background: "#3DA1A9",
                          height: "50px",
                          width: "50%",
                          borderBottomLeftRadius: "36px",
                          borderTopLeftRadius: "36px",
                        }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        px: 3,
                      }}
                    >
                      <Box sx={{ color: "rgba(255, 255, 255, 1)" }}>
                        <Typography
                          sx={{ fontSize: "19px", textAlign: "left" }}
                        >
                          To
                        </Typography>
                        {/* <Typography sx={{ fontSize: "35px" }}>0.00</Typography> */}
                        <TextField
                          placeholder="0.00"
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                            // col
                          }}
                          sx={{ input: { color: "#FFFFFF", fontSize: "35px" } }}
                        />
                      </Box>
                      <img src={swapingframeimg} alt="swapingframeimg" />
                    </Box>
                  </Box>
                  <Button
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Zen Dots",
                      fontWeight: "400",
                      mt: 2,
                      ml: 1,
                      px: { xs: 5, md: 10 },
                      py: 1,
                      color: "#181840",
                      borderRadius: 10,
                      background:
                        "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Box px={{xs:1, sm:10, md:0}}>
              <Box
                sx={{
                  background: `url(${swapingframe}), #021B33`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      borderRadius: {xs:"16px",sm:"20px"},
                      background: "#0C2B45",
                      p: {xs:1,sm:5},
                    }}
                  >
                    <NavbarLink sx={{ fontSize: "16px", pb: 1 }}>
                      Token sale End In!
                    </NavbarLink>
                    <Stack justifyContent="space-around" direction="row">
                      {DMY.map(({ DMYdays }, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: "54px",
                            height: "110px",
                            offset: "28px, 18px rgba(0, 0, 0, 0.51)",
                          }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              height: "70%",
                              border: "1px solid rgba(91, 248, 255, 1)",
                              borderRadius: {xs:"16px",sm:"20px"},
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "24px",
                                fontFamily: "Russo One",
                                fontWeight: "400",
                                color: "rgba(255, 255, 255, 1)",
                              }}
                            >
                              {index === 0
                                ? days < 8
                                  ? "0" + days
                                  : days
                                : index === 1
                                ? hours < 8
                                  ? "0" + hours
                                  : hours
                                : index === 2
                                ? mins < 8
                                  ? "0" + mins
                                  : mins
                                : secs < 8
                                ? "0" + secs
                                : secs}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "11px",
                              fontFamily: "Inter",
                              fontWeight: "700",
                              color: "rgba(255, 255, 255, 1)",
                              textAlign: "center",
                              pt: 1,
                            }}
                          >
                            {DMYdays}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Divider sx={{ background: "white", my: 2 }} />
                    <Box
                      sx={{
                        py: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "15px",
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                        }}
                      >
                        Progress
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "15px",
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                        }}
                      >
                        0%
                      </Typography>
                    </Box>
                    <CustomizedProgressBars />
                    <Box
                      sx={{
                        py: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "15px",
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                        }}
                      >
                        Progress
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: "15px",
                          fontFamily: "Open Sans",
                          fontWeight: "400",
                        }}
                      >
                        300
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
            <Box px={{xs:1, sm:10, md:0}}>
              <Box
                sx={{
                  background: `url(${swapingframcolor}), #021B33`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box p={5}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Token Name
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      Token Name
                    </Typography>
                  </Box>
                  <Box
                    pt={3}
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Symbol
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      Pulserex
                    </Typography>
                  </Box>
                  <Box
                    pt={3}
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Decimal
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Box
                    pt={3}
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Suppply
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      0
                    </Typography>
                  </Box>
                </Box>
              </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
            <Box px={{xs:1, sm:10, md:0}}>
              <Box
                sx={{
                  background: `url(${swapingframcolor}), #021B33`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box px={5} pt={5} pb={3}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Token Name
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      Token Name
                    </Typography>
                  </Box>
                  <Box
                    pt={3}
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Symbol
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      Pulserex
                    </Typography>
                  </Box>
                  <Box
                    pt={3}
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid white"
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                    >
                      Decimal
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: {xs:"16px",sm:"20px"},
                        fontFamily: "Inter",
                        fontWeight: "700",
                      }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Box
                    mt={3}
                  >
                   <Button
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Zen Dots",
                      fontWeight: "400",
                      // mt: 1.5,
                      width:"100%",
                      color: "#181840",
                      borderRadius: 10,
                      background:
                        "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                    }}
                  >
                    Claim Now
                  </Button>
                  </Box>
                </Box>
              </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Swaping;
