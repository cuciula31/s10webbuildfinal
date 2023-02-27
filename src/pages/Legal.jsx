import * as React from 'react';
import "../css/legal.css";
import NavBar from '../dynamic/NavBar';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

function FileBox(props){
    const name = props.name;
    const location = props.location;

    return(
        <Card variant="outlined" id='fileBoxContainer'>
            <CardContent sx={{height:"15vh",}} id = "fileBoxContent">
                <div id='fileBoxIco'></div>
            </CardContent>
            <Typography>{name}</Typography>
        </Card>
    );
}

function Legal(){
return(
    <div id='legalContainer'>
       <NavBar/>
      
       <div id='fileContainerDescription'>
        <div id='fileContainerTitle'>Legistlație</div>
        <div id="fileContainerLine"></div>
       </div>
       <div id='fileContainer'>
        <FileBox name = {"fisier1"}/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
        <FileBox/>
       </div>
       </div>
);
}

export default Legal;