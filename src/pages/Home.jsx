import * as React from "react";
import "../css/home.css";
import NavBar from "../dynamic/NavBar";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { useEffect } from "react";
import { useScroll } from "react-spring";

function Home() {
  useEffect(() => {
    document.getElementById("cement")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { scrollYProgress } = useScroll();
  

  

  return (
    <div id="homeContainer">
      <NavBar />
      <div id="homeContentContainer">
        <div id="skyContainer">
          <div id="nightContainer">
            <div id="stars" />
            <div id="moon" />
            <div id="ufo" />
          </div>
          <div id="imageContainer">
            <animated.div style={{opacity: scrollYProgress}} id="sun" />
            <animated.div style={{opacity: scrollYProgress}} id="cloud" />
            <animated.div style={{opacity: scrollYProgress}} id="mountains" />
            <animated.div style={{opacity: scrollYProgress}} id="school" />
            <animated.div style={{opacity: scrollYProgress}} id="cement" />
            <animated.div id="SchoolText">Scoala gimnaziala numarul 10 <br /> Sibiu</animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
