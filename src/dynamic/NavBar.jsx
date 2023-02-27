import * as React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import {AppBar, Box, Button, Grid, Menu, ToggleButton, Typography} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import "../css/navbar.css";



function StyledButton(props){
  const text = props.text;
  const action = props.action;
  const link = props.link;
return(
  <Button  href = {link} onClick={action} sx={{
    color:"white",
    width:"100%",
    height:"10vh",
    borderStyle:"solid none solid none",

    borderWidth :".1px",
      borderColor:"white",
  }} variant='text'>{text}</Button>
    
);
}

function StyledButtonDesktop(props){
  const text = props.text;
  const action = props.action;
  const link = props.link;
return(
  <Button href = {link} onClick={action} sx={{
    color:"white",
  }} variant='text'>{text}</Button>
    
);
}



function NavBar() {
  

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
   
<AppBar justifyContent = "center" alignItems = "center" className = "navBar" sx={{
  position :"fixed",
  top:"1.5%",
  display: "flex",
  flexFlow:"row",
  justifyContent:"center",
  alignItems:"center",
    zIndex: "11",
    backgroundColor:"#341f97",
    width:"90vw",
    height:"6vh",
    minHeight:"6vh",
    maxHeight:"6vh",
    borderRadius:"20px",
    right:"auto",
   }} id = "navbar">

    <Grid class = "mobileGrid">     
         <Button class = "mobileNavButton"  onClick={handleDrawerOpen}></Button>

         <Drawer

        sx={{
          width: "100%",
          height:"50%",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "100%",
            height:"90%",
            boxSizing: 'border-box',
            backgroundColor:"black",
          },
        }}
        anchor="top"
        open={open}
        
      >
  <Grid class = "mobileSubGrid" sx={{width:"100%", display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"center",left:"auto", right:"auto",marginTop:"5%"}}  direction = "column" >
  <div id = "mobileDrawerLogo"></div>     
  <StyledButton class = 'mobileButton'  link = "/home" text = "Acasa"/>
  <StyledButton  class = 'mobileButton' link = "/noutati" text = "Noutati"/>
  <StyledButton  class = 'mobileButton' link = "/organizare" text = "Organizare"/>
  <StyledButton class = 'mobileButton' link = "/legistlatie" text = "Legistlatie"/>
  <StyledButton class = 'mobileButton' link = "/resurse" text = "Resurse"/>
  <StyledButton class = 'mobileButton' link = "/contact" text = "Contact"/>
  
  <Button  onClick={handleDrawerClose} sx={{
    color:"white",
    width:"100%",  
    height:"10vh",
    borderStyle:"solid none solid none",

    borderWidth :".1px",
      borderColor:"white",
  }} variant='text'>Iesire</Button>

  </Grid>
      </Drawer>
    </Grid>
    <div id='logoDiv' style={{width : "5%", height :"100%"}}></div>
  <Grid class = "desktopGrid" sx={{width:"100%", display:"flex", flexFlow:"row", justifyContent:"center", alignItems:"center",left:"auto", right:"auto"}}  direction = "row" >
  <StyledButtonDesktop  link = "/home"  text = "Acasă"/>
  <StyledButtonDesktop link = "/noutati" text = "Noutati"/>
  <StyledButtonDesktop link = "/organizare" text = "Organizare"/>
  <StyledButtonDesktop link = "/legistlatie" text = "Legistlatie"/>
  <StyledButtonDesktop link = "/resurse" text = "Resurse"/>
  <StyledButtonDesktop link = "/contact" text = "Contact"/>
  </Grid>
            




   </AppBar>
   
  );
}
export default NavBar;