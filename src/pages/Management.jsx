import * as React from "react";
import "../css/management.css";
import NavBar from "../dynamic/NavBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Card, Grid } from "@mui/material";

function Management() {
  function FeedAccordion(props) {
    const accordionName = props.accordionName;
    const accordionContent = props.accordionContent;
    return (
      <div id="accordion">
        <Accordion sx={{backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              {accordionName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
              {accordionContent}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              {accordionName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
              {accordionContent}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }

  function ImageCard() {
    return (
      <div 
      id="managementCardContainer"
        style={{
          position:"relative",
          width: "95vw",
          height: "50vh",
        }}
      >
        <Card
        id =  "managementCard"
          style={{
            position:"absolute",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center",
            backgroundColor: "black",
            width: "95vw",
          height: "50vh",
          }}
        >
          <div id="wallsBackground"></div>
          <Typography id = "wallsTypo" variant="h5" style={{filter: "drop-shadow(0 0 .99ch lightyellow)",width:"100%",position:"absolute",top:"50%", textAlign:"center" ,color:"white", zIndex:"4"}} >“Nu zidurile fac o școală, ci spiritul ce domnește într-însa” <br />
            - Regele Ferdinand -
          </Typography>
        </Card>
      </div>
    );
  }

  return (
    <div id="managementContainer">
      <NavBar />
      <div id="secondManagementContainer">
        <ImageCard></ImageCard>
        <Grid style={{display:"flex", 
                      flexFlow:"column",
                      justifyContent:"center",
                      alignItems:"center",
                      }} width="100%" id="accordionGroup">
        
        <Accordion id="manAc1" sx={{width:"95%", backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              Misiunea școlii
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Şcoala Gimnazială Nr.10 Sibiu este şi va rămâne cadrul instituţional care asigură șanse egale pentru educație tuturor elevilor comunității, promovând identificarea și dezvoltarea abilităților acestora în scopul formării personalității autonome și creative.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion id="manAc2" sx={{width:"95%", backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              Viziunea școlii
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             O școală care asigură un mediu incluziv copiilor comunității, creându-le competențele necesare adaptării unei societăți în continuă schimbare.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion id="manAc3" sx={{width:"95%", backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              Regulament de organizare și funcționare
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            <a href={require("../files/organizare/ROF.docx")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Descarcare
            </Typography></a>
            
          </AccordionDetails>
        </Accordion>
        
        <Accordion id="manAc4" sx={{width:"95%", backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              Regulament intern
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            <Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             <a href={require("../files/organizare/RI.docx")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Descarcare
            </Typography></a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion id="manAc5" sx={{width:"95%", backgroundColor: "#03dac5" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography
              variant="h5"
              sx={{ color: "black", fontFamily: "system", fontWeight: "bold" }}
            >
              Orare
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", flexFlow: "column" }}>
            
             <a href={require("../files/organizare/orare/clasa1.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Clasa a-I-a
            </Typography></a>

            <a href={require("../files/organizare/orare/clasa2.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Clasa a-II-a
            </Typography></a>

            <a href={require("../files/organizare/orare/clasa3.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
              Clasa a-III-a
            </Typography></a>

            <a href={require("../files/organizare/orare/clasa4.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
              Clasa a-IV-a
            </Typography></a>

            <a href={require("../files/organizare/orare/orarGimnaziu.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Gimnaziu
            </Typography></a>

            <a href={require("../files/organizare/orare/pregatitoareA.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
             Clasa pregătitoare A
            </Typography></a>

            <a href={require("../files/organizare/orare/pregatitoareB.pdf")}><Typography
              variant="h6"
              sx={{ marginTop: "25px", fontFamily: "system" }}
            >
            Clasa pregătitoare B
            </Typography></a>
            
          </AccordionDetails>
        </Accordion>

        </Grid>
        

      </div>
    </div>
  );
}

export default Management;
