import React from "react";
import "./Hero.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {


function boom(){
    

}


     useGSAP(() => {

            gsap.to(".rocket", {
              x: 1600,
              duration: 3,

              stagger: 0.5,
              repeat: -1,
              ease: "power1.in",
              delay: 3,
            });

            gsap.from(".rocket", {
              x: -5000,
              opacity: 0,
              duration: 1,
            });
            gsap.from(".hero", {
              y: 5000,
              opacity: 0,
              delay: 3,
              duration: 1,
            });


     })


    return (
      <div className="cont">
        <div className="hero">ALI's Portfolio</div>
        <div className="space">
          <div className="rocket" id="r1"></div>
          <div className="rocket" id="r2"></div>
          <div className="rocket" id="r3"></div>
          <div className="rocket" id="r4"></div>
        </div>
      </div>
    );
}
export default Hero;