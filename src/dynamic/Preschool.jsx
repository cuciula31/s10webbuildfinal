import "../css/resources.css";
import Row from "./Row";

function Preschool(){
    return(
        <div id="schoolProfContainer">

            <div class = "subject" id="bears">
            <div class = "subjectLeft" id="bearsLeftContainer">
              <div class = "subjectText" id="bearsText">URSULEȚI</div>
              </div>
              <div id="primeRightContainer">
                <Row textColor = "black" color = "black" text = "POPA DANIELA"/>
                <Row textColor = "black" color = "black" text = "PUIA GEORGIANA"/>
              </div>
            </div>

            <div class = "subject" id="bees">
            <div class = "subjectLeft" id="beesLeftContainer">
              <div class = "subjectText" id="beesText">ALBINUȚE</div>
              </div>
              <div id="primaryRightContainer">
                <Row textColor = "black" borderColor = "black" text = "GAVRILĂ CLAUDIA"/>
                <Row textColor = "black" borderColor = "black" text = "STANCIU OLIMPIA"/>
              </div>
            </div>

            

            <div class = "subject" id="butterfly">
            <div class = "subjectLeft" id="butterflyLeftContainer">
              <div class = "subjectText" id="butterflyText">FLUTURAȘI</div>
              </div>
              <div id="primeRightContainer">
                <Row textColor = "black" color = "black" text = "POPA DANIELA"/>
                <Row textColor = "black" color = "black" text = "PUIA GEORGIANA"/>
                <Row textColor = "black" color = "black" text = "DRAGOMIR COSMINA"/>
              </div>
            </div>

            <div class = "subject" id="ladybugs">
            <div class = "subjectLeft" id="ladybugsLeftContainer">
              <div class = "subjectText" id="ladybugsText">MĂMĂRUȚE</div>
              </div>
              <div id="primaryRightContainer">
                <Row textColor = "black" borderColor = "black" text = "FARCAȘ MARIA"/>
                <Row textColor = "black" borderColor = "black" text = "COJOCARU JANA"/>
                <Row textColor = "black" color = "black" text = "SZEKELY IOANA"/>
              </div>
            </div>
            
            <div class = "subject" id="hearts">
            <div class = "subjectLeft" id="heartsLeftContainer">
              <div class = "subjectText" id="heartsText">INIMIOARE</div>
              </div>
              <div id="primeRightContainer">
                <Row textColor = "black" color = "black" text = "POPA DANIELA"/>
                <Row textColor = "black" color = "black" text = "PUIA GEORGIANA"/>
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

export default Preschool;