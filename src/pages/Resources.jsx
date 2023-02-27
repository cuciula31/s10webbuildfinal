import * as React from "react";
import "../css/resources.css";
import NavBar from "../dynamic/NavBar";
import {Tabs, Tab, Box, Typography} from "@mui/material";
import { TabsContext } from "@mui/base";
import PropTypes from 'prop-types';
import EightDegree from "../dynamic/EightDegree";
import { height } from "@mui/system";
import Primary from "../dynamic/Primary";
import Preschool from "../dynamic/Preschool";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    style={{height:"100vh", width : "100vw"}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index} `}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
       {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box> )}
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function Resources() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="resourcesContainer">
      <NavBar />
      <div id="profContainer">
        <div id = "schoolProfContainer">
          
         <Box  sx={{marginTop:"7%", width: '75%' }}>
      <Tabs 
      id = "resTabs"
      sx={{
        width:"100%",
        '& .MuiTab-root' : {color: "white", fontSize:"smaller"}
      }}
      value={value} onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab  label="Clase primare" {...a11yProps(0)}/>
        <Tab  label="Gimanzaiu"{...a11yProps(1)} />
        <Tab  label="Grădiniță" {...a11yProps(2)}/>
      </Tabs>
    </Box>
    <TabPanel style = {{maxWidth:"100%"}} value={value} index = {0} >
      <Primary/>
    </TabPanel>
    <TabPanel style = {{maxWidth:"100%"}} value={value} index = {1} >
    <EightDegree/>
    </TabPanel>
    <TabPanel style = {{maxWidth:"100%"}} value={value} index = {2} >
    <Preschool/>
    </TabPanel>
    

          </div>
      </div>
    </div>
  );
}

export default  Resources;
