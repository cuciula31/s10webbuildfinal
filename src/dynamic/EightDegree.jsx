import "../css/resources.css";
import Row from "./Row";

function EightDegree(){
    return(
        <div id="schoolProfContainer">

<div 
class = "subject" id="primeTeaching">
            
            <div  class = "subjectLeft" id="primeLeftContainer">
              <div class = "subjectText"  id="MathText">MATEMATICĂ</div>
              </div>
              <div id="primeRightContainer">
                <Row textColor = "white" borderColor = "white" text = "ZAHARIA CAMELIA"/>
              </div>
            </div>
            
            <div class = "subject" id="primaryLanguage">
            <div class = "subjectLeft" id="primaryLeftContainer">
              <div class = "subjectText" id="primaryText">LIMBA ROMÂNĂ</div>
              </div>
              <div id="primaryRightContainer">
                <Row textColor = "white" borderColor = "white" text = "DRĂGAN LARISA"/>
              </div>
            </div>
            
            <div class = "subject" id="sports">
            <div class = "subjectLeft" id="sportsLeftContainer">
              <div class = "subjectText" id="sportsText">EDUCAȚIE FIZICĂ</div>
              </div>
              <div id="primeRightContainer">
                <Row textColor = "white" color = "white" text = "SCHADT MICHAEL"/>
              </div>
            </div>
            
            <div class = "subject" id="geography">
            <div class = "subjectLeft" id="geographyLeftContainer">
              <div class = "subjectText" id="geographyText">GEOGRAFIE</div>
              </div>
              <div id="primaryRightContainer">
                <Row textColor = "black" borderColor = "black" text = "ȘTIUCĂ MARIANA"/>
              </div>
            </div>
            
            <div class = "subject" id="chemestry">
            <div class = "subjectLeft" id="chemestryLeftContainer">
              <div class = "subjectText" id="chemestryText">FIZICĂ-CHIMIE</div>
              </div>
              <div id="primeRightContainer">
                <Row borderColor = "black" textColor = "black" text = "PELIGRAD GRAȚIELA"/>
              </div>
            </div>
            
            <div class = "subject" id="bio">
            <div class = "subjectLeft" id="bioLeftContainer">
              <div class = "subjectText" id="bioText">BIOLOGIE</div>
              </div>
              <div id="primaryRightContainer">
                <Row borderColor = "white" textColor = "white" text = "SOARE PAULA"/>
              </div>
            </div>
            
            <div class = "subject" id="tech">
            <div class = "subjectLeft" id="techLeftContainer">
              <div class = "subjectText" id="techText">EDUCAȚIE TEHNOLOGICĂ</div>
              </div>
              <div id="primeRightContainer">
                <Row borderColor = "white" textColor = "white" text = "LIMBĂȘAN LILIANA"/>
              </div>
            </div>
            
            <div class = "subject" id="religion">
            <div class = "subjectLeft" id="religionLeftContainer">
              <div class = "subjectText" id="religionText">RELIGIE</div>
              </div>
              <div id="primaryRightContainer">
                <Row borderColor = "white" textColor = "white" text = "HENTEA LETIȚIA"/>
              </div>
            </div>
            
            <div class = "subject" id="history">
            <div class = "subjectLeft" id="historyLeftContainer">
              <div class = "subjectText" id="historyText">ISTORIE</div>
              </div>
              <div id="primeRightContainer">
                <Row borderColor = "white" textColor = "white" text = "CONSTANTIN PAULA"/>
              </div>
            </div>
            
            <div class = "subject" id="german">
            <div class = "subjectLeft" id="germanLeftContainer">
              <div class = "subjectText" id="germanText">LIMBA GERMANĂ</div>
              </div>
              <div id="primaryRightContainer">
                <Row textColor = "black" borderColor = "black" text = "LUCA CRISTINA"/>
              </div>
            </div>
            
            <div class = "subject" id="music">
            <div class = "subjectLeft" id="musicLeftContainer">
              <div class = "subjectText" id="musicText">EDUCAȚIE MUZICALĂ</div>
              </div>
              <div id="primeRightContainer">
                <Row text = "PÎRVU NICOLETA "/>
              </div>
            
            </div>
            
            <div class = "subject" id="plastics">
            <div class = "subjectLeft" id="plasticsLeftContainer">
              <div class = "subjectText" id="plasticsText">EDUCAȚIE PLASTICĂ</div>
              </div>
              <div id="primaryRightContainer">
                <Row borderColor = "white" textColor = "white" text = "ISPAS CRISTI"/>
              </div>
            </div>
            
            <div class = "subject" id="social">
            <div class = "subjectLeft" id="socialLeftContainer">
              <div class = "subjectText" id="socialText">EDUCAȚIE SOCIALĂ</div>
              </div>
              <div id="primeRightContainer">
                <Row text = "SAVU MARILENA"/>
              </div>
            </div>
            
            <div  id="blank">
            <div id="blank">
              <div id="blank"></div>
              </div>
            </div>
        </div>

    );
}

export default EightDegree;