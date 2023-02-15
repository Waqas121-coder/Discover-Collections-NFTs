import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Images/logo.png";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "20px",ml:2 }}>
        <img src={logo} alt="logo" />
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "800",
            ml: 1,
          }}
        >
          Logo here
        </Typography>
      </Box>

      <List>
        {[
          "About",
          "Features",
          "Benefit",
          "Roadmap",
          "Team",
          "Staking",
          "Presale",
          "Blog",
          "FAQs",
          "Contact",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button sx={{ml:1,px:3,py:1,color:"#FFFFFF",borderRadius:1,background:"linear-gradient(94.36deg, #074B9E 1.54%, #5BF8FF 92.86%)"}}>Whitepaper</Button>
      <Divider />
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer("left", true)}>{anchor}</Button> */}
      <IconButton
        aria-label="delete"
        onClick={toggleDrawer("left", true)}
        sx={{ pr: "0", color:"rgba(255, 255, 255, 1)" }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
