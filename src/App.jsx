import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page2 from "./components/Page2.jsx";
import Page3 from "./components/page3.jsx";
import Page4 from "./components/page4.jsx";
import FForm from "./components/form.jsx";

function App() {
  const [tl] = useState(() => gsap.timeline());
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".alp", {
      opacity: 0,
      y: -150,
      duration: 1,
      stagger: 0.5,
    });
    gsap.from(".alpB", {
      opacity: 0,
      x: -150,
      delay: 4,
      duration: 2,
      stagger: 0.5,
    });
    gsap.from(".nv", {
      y: -1500,
      delay: 3,
      duration: 1,
      stagger: 0.5,
    });
    gsap.from(".circle", {
      y: -1500,
      delay: 3,
    });

    // floating shapes scroll animation
    gsap.utils.toArray(".shape").forEach((el) => {
      gsap.fromTo(
        el,
        { y: -120, opacity: 0 },
        {
          y: 200,
          opacity: 1,
          rotation: () => gsap.utils.random(-180, 180),
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    tl.to("alp", {});
  });

  document.addEventListener("mousemove", (e) => {
    gsap.to(".circle", {
      x: e.clientX,
      y: e.clientY,
      duration: 9,
      rotatex: e.clientX,
      rotatey: e.clientY,
    });

    gsap.to(".txt", {
      opacity: 100,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".txt",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <>
      <div className="shapes absolute w-full sm:w-[10px] sm:h-[100px] h-[800px]"></div>

      <div className="main relative overflow-hidden h-[800px] w-full bg-[#4C6EE2]">
        {/* floating vibrant shapes */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="shape w-16 h-16 bg-[#A0C4FF]/30 rounded-full absolute top-10 left-8 backdrop-blur-md border border-white/20 shadow-md" />
          <div className="shape w-24 h-24 bg-[#FDFFB6]/30 rotate-45 absolute top-1/3 right-12 backdrop-blur-md border border-white/20 shadow-md" />
          <div className="shape w-12 h-12 bg-[#D0BFFF]/30 rounded-md absolute bottom-24 left-1/4 backdrop-blur-md border border-white/20 shadow-md" />
          <div className="shape w-8 h-8 bg-[#FF9E9E]/30 rounded-full absolute bottom-40 right-1/3 backdrop-blur-md border border-white/20 shadow-md" />
          <div className="shape w-20 h-20 bg-[#B5F2C9]/30 rounded-xl absolute top-[60%] left-[60%] backdrop-blur-md border border-white/20 shadow-md" />
          <div className="shape w-14 h-14 bg-[#E0E0E0]/30 rounded-[30%] absolute top-[10%] right-[40%] backdrop-blur-md border border-white/20 shadow-md" />
        </div>

        <div className="nav-cont flex flex-wrap gap-4 sm:gap-[20px] sm:pl-[100px] items-center p-4 sm:p-[20px] justify-center sm:justify-start">
          <h1 className="logo nv text-[30px] sm:text-[50px]">ALI.</h1>
          <a href="" className="nv text-sm sm:text-base">
            Home
          </a>
          <a href="" className="nv text-sm sm:text-base">
            About
          </a>
          <a href="" className="nv text-sm sm:text-base">
            Skills
          </a>
          <a href="" className="nv text-sm sm:text-base">
            Projects
          </a>
          <div
            className="button w-40 h-10 bg-lime-500 cursor-pointer select-none
              active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
              active:border-b-[0px] transition-all duration-150 [box-shadow:0_5px_0_0_black,0_5px_0_0_black]
              rounded-full border-[1px] border-blue-400 relative left-1/2 sm:left-[50%] transform -translate-x-1/2"
          >
            <span className="flex flex-col justify-center items-center h-full text-white text-[16px] sm:text-[20px] p-[10px]">
              Contact Me
            </span>
          </div>
        </div>

        <div className="hero w-full h-[500px] flex justify-center items-center font-bold flex-col">
          <h1 className="hellos text-[60px] sm:text-[100px] lg:text-[200px] flex flex-row flex-wrap justify-center">
            <h4 className="alp">H</h4>
            <h4 className="alp">E</h4>
            <h4 className="alp">L</h4>
            <h4 className="alp">L</h4>
            <h4 className="alp">O</h4>
            <h4 className="alp">!</h4>
          </h1>
          <div className="htext flex flex-col items-center">
            <h6 className="alpB text-lg sm:text-2xl">I'm Aliakbar</h6>
            <h6 className="alpB text-base sm:text-2xl font-extralight">
              Aspiring Fullstack Developer & Tech Enthusiast.
            </h6>
          </div>
        </div>

        <div
          className="circle w-[100px] h-[100px] backdrop-blur-lg rounded-[50px] bg-transparent shadow-lg ring-1 ring-black/
          transition-[10s] z-[99999] shadow-[0px_10px_30px_rgba(0,0,0,0.2)]"
        ></div>
      </div>

      <div className="wrapper">
        <div className="racesWrapper overflow-hidden">
          <div className="races flex flex-wrap justify-center gap-4 sm:gap-[80px] text-[30px] sm:text-[80px] p-[20px] sm:p-[50px] bg-#FFB200">
            <h2 className="txt opacity-0 p text-red-500">WELCOME!</h2>
            <h2 className="txt opacity-0 text-red-500">स्वागत</h2>
            <h2 className="txt opacity-0 jp flex text-red-500">CIAO!</h2>
            <h2 className="txt opacity-0 text-red-500">سوگت</h2>
            <h2 className="txt opacity-0 text-red-500">مرحبًا</h2>
          </div>
        </div>
      </div>

      <Page2 className="p2" />
      <Page3 className="p3" />
      <Page4 className="p4" />
      <FForm className="fr" />
    </>
  );
}

export default App;
