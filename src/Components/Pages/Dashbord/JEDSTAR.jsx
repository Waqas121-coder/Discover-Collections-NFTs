import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DiscountCard from "../../../Images/DiscountCard.png";

let Chartheading = [
  {
    heading: "Staked Amount",
  },
  {
    heading: "Withdrawal Time",
  },
  {
    heading: "UnStake",
  },
  {
    heading: "Claim",
  },
];
const JEDSTAR = () => {
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
        >JEDSTAR</Typography>
    <Box px={{ xs: 5, md: 20 }}>
      {/* <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}> */}
      <Grid container spacing={2} py={2}>
        {Chartheading.map(({ heading }, index) => (
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                background: `url(${DiscountCard})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                py: 3,
                // px: 10,
                // textAlign: "center",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 1)",
                  py: 1,
                }}
              >
                {heading}
              </Typography>
              <Box
                sx={{
                  px: {xs:8, md:5,lg:7},
                //   py: 0,
                border:"1px solid #06065a",
                // borderImage:"linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                  background: "#0F3960",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "Zen Dots",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                    py: 1,
                  }}
                >
                  0
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* </Stack> */}
    </Box>
    <Typography sx={{fontSize:"16px", color:"rgba(255, 255, 255, 1)", pt:3,pb:20}}>You have no stake record yet.</Typography>
    </Box>
  );
};

export default JEDSTAR;
