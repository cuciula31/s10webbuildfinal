import * as React from 'react';
import "../css/contact.css";
import NavBar from '../dynamic/NavBar';



function Contact(){
return(
    <div id='contactContainer'>
        <NavBar/>
        <div id='contentContainer'>
            
           <div id = "mapContainer">
           <div className="google-map-code">
           <iframe id = 'mapContainer' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173.87978720348104!2d24.118445428591265!3d45.7896931929363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c5d5801b50ddf%3A0x428fb813e9c00fd2!2sGimnaziala%20nr.%2010!5e0!3m2!1sro!2sro!4v1670937128132!5m2!1sro!2sro"  frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
           </div>
           <div id="contactDetails">
            <div id="contactLogo"/>

            <div id='contactAddressContainer'>
                <div className='contactIcon' id="addressIcon"/>
                <div className='contactText'>Eduard Albert Bielz 60, Sibiu 550031</div>
            </div>
            <br />
            <div id='contactAddressContainer'>
            <div className='contactIcon' id="telIcon"/>
            <div className='contactText'>0269227502</div>

            </div>
            <br />
            <div id='contactAddressContainer'>
            <div className='contactIcon' id="emailIcon"/>
            <div className='contactText'>scoala10sibiu@gmail.com</div>

            </div>
           </div>
        </div>
    </div>
);
}

export default Contact;