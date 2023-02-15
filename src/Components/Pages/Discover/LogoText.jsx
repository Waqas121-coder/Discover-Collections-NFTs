import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import LogoText1 from "../../../Images/LogoText1.png";
import LogoText2 from "../../../Images/LogoText2.png";
import LogoText3 from "../../../Images/LogoText3.png";
import LogoText4 from "../../../Images/LogoText4.png";

const LogoText = () => {
  return (
    <Box sx={{background:"#044474", mt:-2}}>
    <Container>
        <Grid container>
          <Grid item md={3} xs={6}>
            <img src={LogoText1} alt="LogoText1"  width="100%" />
            </Grid>
          <Grid item md={3} xs={6}>
            <img src={LogoText2} alt="LogoText1" width="100%" />
            </Grid>
          <Grid item md={3} xs={6}>
            <img src={LogoText3} alt="LogoText1" width="100%" />
            </Grid>
          <Grid item md={3} xs={6}>
            <img src={LogoText4} alt="LogoText1" width="100%" />
            </Grid>
            </Grid>
    </Container>
    </Box>
  )
}

export default LogoText