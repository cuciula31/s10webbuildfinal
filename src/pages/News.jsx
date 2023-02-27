import * as React from 'react';
import "../css/news.css";
import NavBar from '../dynamic/NavBar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


function FeedAccordion(props){
  const accordionName = props.accordionName;
       const accordionContent = props.accordionContent;
       const imageLink = props.imageLink;
    return(
        <div id="accordion">
    <Accordion sx={{backgroundColor:"#03dac5"}}>
    <AccordionSummary
    
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography variant='h4' sx={{color:"black", fontFamily:"system", fontWeight:"bold",}}>{accordionName}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{display:'flex',flexFlow:'column'}}>
       
            <img id="newsImage" src= {imageLink}/>
        
      <Typography variant='h6' sx={{marginTop:"25px",fontFamily:"system"}}>
        {accordionContent}
      </Typography>
    </AccordionDetails>
  </Accordion>
  </div>);
}

function News(){
return(
    <div id='newsContainer'>
        <NavBar/>
        
        <div id='feedContainer'>
        <Card id='newsCard' sx={{borderRadius:"25px", width: "95%",height:"30vh", display:"flex",flexFlow:"row"}}>
      <img id = "cardMedia"
        src={require("../drawable/454.jpg")}
      />
      <CardContent sx={{ display:"flex",flexDirection:"column", justifyContent:"center",width:"50%"}}>
        <Typography variant='h4' fontFamily={"system"} >
          Noutăți
        </Typography>
        <Typography  variant='h6'  color="text.secondary">
          Fii la curent cu cele mai noi știri și cele mai proaspete evenimente din școala noastră
        </Typography>
      </CardContent>
    </Card>

{/* <Card sx={{ display: 'flex'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image={require("../drawable/454.jpg")}
        alt="Live from space album cover"
      />
    </Card> */}
        
        <FeedAccordion/>
        <FeedAccordion/>
        <FeedAccordion/>
        <FeedAccordion/>


        </div>
    </div>
);
}

export default News;