import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
import FeatureBackground from "../../../Images/FeatureBackground.png";
import TabPanel from './TabPanel'

const Question = () => {
  return (
    <Box
      sx={{
        background: `url(${FeatureBackground}), #021B33`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        pt:10
      }}
    >
      <Container>
        <Box>
          <Typography sx={{color:"rgba(246, 246, 246, 1)", fontSize:"29.26", fontFamily:"Zen Dots", fontWeight:"400"}}>Have any Question? </Typography>
          <Typography sx={{pr:{xs:0, sm:30,md:65},color:"rgba(246, 246, 246, 1)", fontSize:"12.19", fontFamily:"Inter", fontWeight:"400"}}>Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.</Typography>
        </Box>
       <TabPanel />
      </Container>
    </Box>
  )
}

export default Question