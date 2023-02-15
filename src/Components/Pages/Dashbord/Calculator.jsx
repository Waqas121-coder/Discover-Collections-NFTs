import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import DiscountCard from "../../../Images/DiscountCard.png";
import swapingframcolor from "../../../Images/swapingframcolor.png";
import HorizontalLabelPositionBelowStepper from "./Steper";

const Calculator = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "36px",
          fontFamily: "Zen Dots",
          fontWeight: "400",
          color: "rgba(255, 255, 255, 1)",
          py: 2,
        }}
      >
        PULSAREX Calculator
      </Typography>
      <Box px={{ xs: 5, md: 20 }}>
        <Box
          sx={{
            background: `url(${swapingframcolor})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            py: 5,
            px: {sx:0,sm:5},
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              px: { xs: 0, sm: 5, md: 20 },
              color: "rgba(255, 255, 255, 1)",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Calculate your PULSREX depending on the amount of staked tokens and
            your lock time.
          </Typography>
          <Box
            sx={{
              display: "flex" ,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box width="40%" textAlign="center">
              <Typography
                sx={{
                  color: "rgba(251, 251, 251, 1)",
                  fontSize: "20px",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                PULS
              </Typography>
            </Box>
            <Box width="60%" textAlign="left">
              <TextField
                placeholder="5000"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ input: { background: "white", px: 7, width: "20%" } }}
              />
            </Box>
          </Box>
          <Box>
            <Button sx={{ color: "white", fontSize: "40px" }}>+</Button>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: "400",
              }}
            >
              Lock tokens for Days
            </Typography>
          </Box>
          
          <HorizontalLabelPositionBelowStepper/>
          <ArrowDownwardIcon sx={{ color: "white", pb: 3 }} />
          <Box
            sx={{
              display: "flex" ,
              flexDirection:{xs:"column", sm:"row"},
              alignItems: "center",
              justifyContent:"space-around",
            }}
          >
            <Box width= {{xs:"100%", sm:"40%"}} textAlign="center">
              <Typography
                sx={{
                  color: "rgba(251, 251, 251, 1)",
                  fontSize: "20px",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                $PULSREX
              </Typography>
            </Box>
            <Box width= {{xs:"100%", sm:"60%"}} textAlign= {{xs:"center", sm:"left"}}>
              <TextField
                placeholder="5000"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ input: { background: "white", px: 7, width: {xs:"100%", sm:"20%"}  } }}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 1)",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
              py: 3,
            }}
          >
            locked until 9/1/2022
          </Typography>

          <Button
            sx={{
              fontSize: { xs: "12px", md: "30px" },
              fontFamily: "Zen Dots",
              fontWeight: "400",
              px: { xs: 3, md: 7 },
              py: 1,
              color: "#FFFFFF",
              borderRadius: 10,
              background:
                "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
