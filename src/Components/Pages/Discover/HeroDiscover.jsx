import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, {useEffect, useState} from "react";
import HeroDiscoverimg from "../../../Images/HeroDiscoverimg.png";
import NFTmeta from "../../../Images/NFTmeta.png";
import CurrentHolders from "../../../Images/CurrentHolders.png";
import cryptoItem from "../../../Images/cryptoItem.png";
import TotalVolume from "../../../Images/TotalVolume.png";
// import HeroCircle from "../../../Images/HeroCircle.png";

let card = [
  {
    src: CurrentHolders,
    amountcurrency: "+128K",
    heading: "Current Holders",
  },
  {
    src: cryptoItem,
    amountcurrency: "+2 mILLION",
    heading: "cryptoItem",
  },
  {
    src: TotalVolume,
    amountcurrency: "+3.000 USD",
    heading: "Total Volume",
  },
];
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
const NavbarLink = styled(Typography)({
  fontFamily: "Zen Dots",
  fontWeight: "400",
  color: "rgba(255, 255, 255, 1)",
});
const HeroDiscover = () => {
  const [days,setDays] = useState(0)
  const [hours,setHours] = useState(0)
  const [mins,setMinutes] = useState(0)
  const [secs,setSeconds] = useState(0)
  const deadline = "February, 20, 2023"
  const getTime = ()=>{
    const time = Date.parse(deadline) - Date.now()
    setDays(Math.floor(time/(1000*60*60*24)))
    setHours(Math.floor(time/(1000*60*60)%24))
    setMinutes(Math.floor((time/1000/60)%60))
    setSeconds(Math.floor((time/1000)%60))
  }
  console.log(hours)
 
  useEffect(()=>{
    const interval = setInterval(()=>getTime(deadline),1000)
    return ()=> clearInterval(interval)
  })
  
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroDiscoverimg})`,
        backgroundSize: "100% 100%",
        backgroundPosition:"center center",
        backgroundRepeat: "no-repeat",
        py: 15,
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={7} xs={12}>
            <Box>
              <NavbarLink sx={{fontSize: {xs:"35px",md:"50px",lg:"65px"},}}>Discover and </NavbarLink>
              <Typography
                sx={{
                  fontSize: {xs:"35px",md:"50px",lg:"65px"},
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                  WebkitTextStroke: "1px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Collect NFTs
              </Typography>
              <NavbarLink sx={{fontSize: {xs:"35px", md:"50px",lg:"65px"},}}>at scale</NavbarLink>
              <Button
                sx={{
                  my: 5,
                  px: 3,
                  py: 1,
                  color: "#FFFFFF",
                  borderRadius: 1,
                  background:
                    "linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)",
                }}
              >
                BUY TOKEN
              </Button>
            </Box>
          </Grid>
          <Grid item md={5} xs={0}>
            <Box
              sx={{display:{xs:"none",md:"block"}
              }}
            >
              <img src={NFTmeta} width="100%" alt="NFTmeta" />
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={{md:-5}} >
          <Grid item sm={7} xs={12}>
            <Box sx={{ display: "flex", gap: {xs:1,md:3}, justifyContent:{xs:"center",md:"left"} }}>
              {card.map(({ src, amountcurrency, heading }, index) => (
                <Box>
                  <img src={src} alt="CurrentHolders" />
                  <Box
                    sx={{
                      borderRight: index === 2 ? "none" : "1px solid white",
                      pr: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {xs:"12px",md:"19.66px"},
                        fontFamily: "Zen Dots",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      {amountcurrency}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs:"10px",md:"18.2px"},
                        fontFamily: "Inter",
                        fontWeight: "600",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      {heading}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item sm={5} xs={12} mt={{xs:5,sm:0}}>
            <Box
              sx={{textAlign:"center",
              ml:{xs:0,md:10},
              mt:{xs:0,sm:-5},
              borderRadius:"20px",
                py:2,
                filter:" blur(1)",
                // background:"rgba(91, 248, 255, 1)"
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), linear-gradient(90deg, rgba(66, 37, 217, 1) 0%, rgba(87, 212, 230, 1) 100%)",
              }}
            >
              <NavbarLink sx={{ fontSize: "16px",pb:1 }}>
                Token sale End In!
              </NavbarLink>
              <Stack justifyContent="space-around" direction="row">
              {DMY.map(({  DMYdays }, index) => (
                <Box
                key={index}
                  sx={{
                    width: "54px",
                    height: "110px",
                    offset:"28px, 18px rgba(0, 0, 0, 0.51)",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "70%",
                      border: "1px solid rgba(91, 248, 255, 1)",
                      borderRadius: "20px",
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
                      {index===0?
                       days<8 ? "0"+days:days
                      :
                      index===1?
                      hours<8 ? "0"+hours:hours
                      :
                      index===2?
                      mins<8 ? "0"+mins:mins
                      :
                      secs<8 ? "0"+secs:secs

                      }
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontFamily: "Inter",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 1)",
                      textAlign: "center",
                      pt:1
                    }}
                  >
                    {DMYdays}
                  </Typography>
                </Box>
                  ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default HeroDiscover;