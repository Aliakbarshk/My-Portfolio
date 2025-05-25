import React from "react";
import { useState } from "react";
import './About.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



function About() {

gsap.to(".container", {
  x:-5000,       

})



   function anim1() {

     gsap.to(".container", {
      scale: 1, 
      x: 0,
       opacity: 1,
       duration: 1,

     });
     
   }


    return (
      <>
        {" "}
        <div className="mainP flex flex-col p-[100px]  gap-10 ">
          <button className="border-[2px]" onClick={anim1} >
            About me
          </button>
          <div className="container flex flex-row justify-center bg-white rounded-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHIlbDfv_KXrQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731225593869?e=2147483647&v=beta&t=XXv_oT8asi24iownl3pK8WOJB_R18-2r24flz2eJXvc"
              alt=""
              className="rounded-lg pr-[260px]"
            />
            <p className="para pt-[40px] text-black  ">
              Hi, I’m Ali, and I am passionate about coding. Sometimes I love
              it, sometimes I find it challenging, but I always stick with it. I
              enjoy being creative in tech, working on various projects—some
              just for fun and others also for fun. This passion makes me more
              intelligent and logical. You will find out more about me
              below.....
            </p>
          </div>
        </div>
      </>
    );


} 

export default About;