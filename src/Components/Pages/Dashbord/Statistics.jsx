import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DiscountCard from "../../../Images/DiscountCard.png";

let Chartheading1 = [
  {
    heading: "JEDSTARS EARN",
  },
  {
    heading: "Your CRDN Wallet Balance",
  },
];

let Chartheading2 = [

{
  heading: "Claimed Reward",
},
{
  heading: "Current Staked",
},
{
  heading: "Total Staked",
},
{
  heading: "Total UnStaked",
},
];
const Statistics = () => {
  return (
    <Box>
        <Typography
        sx={{
            fontSize: "36px",
            fontFamily: "Zen Dots",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 1)",
            py: 3,
          }}
        >Your Statistics</Typography>
      <Box pb={10} px={{xs:5,sm:5,md:20}}>
      <Grid container spacing={2} py={2}>
        {Chartheading1.map(({ heading }, index) => (
          <Grid item md={6} sm={6} xs={12}>
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
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} py={2} pt={{xs:0, sm:-2,md:-10}}>
        {Chartheading2.map(({ heading }, index) => (
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
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
};

export default Statistics;
