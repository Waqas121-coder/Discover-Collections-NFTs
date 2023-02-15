import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DiscountCard from "../../../Images/DiscountCard.png";

let Chartheading = [
  {
    heading: "TOTAL VALUE STAKED",
    currencyamount:"$21,610,291"
  },
  {
    heading: "Reserve Fund",
    currencyamount:"$21,610,291"
  },
  {
    heading: "Presale Token",
    currencyamount:"$21,610,291"

  },
  {
    heading: "ICO Token Sales",
    currencyamount:"$21,610,291"

  },
  {
    heading: "ICO Token Sales",
    currencyamount:"$21,610,291"

  },
];
const StakedCards = () => {
  return (
    <Box py={5} px={{xs:5,md:20}}>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={2}>
      {/* <Grid container spacing={3} py={2}> */}
        {Chartheading.map(({ heading, currencyamount }, index) => (
          // <Grid item md={3} sm={6} xs={12}>

            <Box
              sx={{
                background: `url(${DiscountCard})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                // mt: { xs: 3, md: 5 },
                // mb: { xs: 3, md: 5 },
                p:3,
                textAlign: "center",
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
                {currencyamount}
              </Typography>
            </Box>
          // </Grid>
        ))}
      {/* </Grid> */}
      </Stack>
    </Box>
  );
};

export default StakedCards;
