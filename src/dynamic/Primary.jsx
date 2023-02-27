import "../css/resources.css";
import Row from "./Row";

function Primary(){
    return(
        <div id="schoolProfContainer">

            
            
            
            <div class = "subject" id="fourth">
            <div class = "subjectLeft" id="fourthLeftContainer">
              <div class = "subjectText" id="sportsText">Învățământ primar</div>
              </div>
              <div id="primeRightContainer">
                <Row textColor = "white" color = "white" text = "LAL EMANUELA"/>
                <Row textColor = "white" color = "white" text = "NASTURE DELIA"/>
                <Row textColor = "white" color = "white" text = "OPREA ANA"/>
                <Row textColor = "white" color = "white" text = "DORDEA CRISTINA"/>
                <Row textColor = "white" color = "white" text = "CHIRIȚĂ ANDREEA"/>
                <Row textColor = "white" color = "white" text = "BARB ROXANA"/>
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

export default Primary;