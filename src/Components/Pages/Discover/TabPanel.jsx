import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

let QuestionAccordion = [
  {
    head: "How can I track my order?",
  },
  {
    head: "How can I track my order?",
  },
  {
    head: "How can I track my order?",
  },
  {
    head: "How can I track my order?",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", py: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              color: "white",
            },

            "& .MuiTab-textColorPrimary ": {
              color: "grey",
              fontSize: "13px",
              fontFamily: "Zen Dots",
              fontWeight: "400",
            },
          }}
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Pre ICO & ICO" {...a11yProps(1)} />
          <Tab label="Token" {...a11yProps(2)} />
          <Tab label="Client" {...a11yProps(3)} />
          <Tab label="Legal" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {QuestionAccordion.map(({ head }, index) => (
          <Accordion sx={{ my: 2, background: "#0A2F46" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13.26",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                {head}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                pr={{ xs: 2, sm: 10, md: 80 }}
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              >
                We try to keep returns and exchanges as simple as possible. As
                long as they meet our criteria, it should be no problem at all
                to return or exchange them.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {QuestionAccordion.map(({ head }, index) => (
          <Accordion sx={{ my: 2, background: "#0A2F46" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13.26",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                {head}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                pr={{ xs: 2, sm: 10, md: 80 }}
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              >
                We try to keep returns and exchanges as simple as possible. As
                long as they meet our criteria, it should be no problem at all
                to return or exchange them.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {QuestionAccordion.map(({ head }, index) => (
          <Accordion sx={{ my: 2, background: "#0A2F46" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13.26",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                {head}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                pr={{ xs: 2, sm: 10, md: 80 }}
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              >
                We try to keep returns and exchanges as simple as possible. As
                long as they meet our criteria, it should be no problem at all
                to return or exchange them.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {QuestionAccordion.map(({ head }, index) => (
          <Accordion sx={{ my: 2, background: "#0A2F46" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13.26",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                {head}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                pr={{ xs: 2, sm: 10, md: 80 }}
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              >
                We try to keep returns and exchanges as simple as possible. As
                long as they meet our criteria, it should be no problem at all
                to return or exchange them.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {QuestionAccordion.map(({ head }, index) => (
          <Accordion sx={{ my: 2, background: "#0A2F46" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13.26",
                  fontFamily: "Zen Dots",
                  fontWeight: "400",
                }}
              >
                {head}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                pr={{ xs: 2, sm: 10, md: 80 }}
                sx={{
                  color: "rgba(246, 246, 246, 1)",
                  fontSize: "13",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              >
                We try to keep returns and exchanges as simple as possible. As
                long as they meet our criteria, it should be no problem at all
                to return or exchange them.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </TabPanel>
    </Box>
  );
}
