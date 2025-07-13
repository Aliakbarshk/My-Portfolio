import React from "react";
import "./Page2.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import background from "../assets/background.gif";


const Page2 = () => {
  useGSAP(() => {
    gsap.from(".para", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="mainn flex flex-col p-[20px] justify-center items-center bg-[#E2E0C8] h-[800px]">
    
      <div className="flex flex-row gap-3">
        <h2 className="more text-gray-800 text-3xl">More</h2>
        <h2 className="text-3xl font-bold mb-4 text-gray-800 font-sans">
          about me
        </h2>
      </div>
      <p className="para text-black w-[820px] max-w-[600px] leading-relaxed tracking-wide bg-gray-100 p-6 rounded-lg shadow-lg">
        Hi, I’m <strong className="nm text-black">Aliakbar</strong>. My
        curiosity led me to coding 2.5 years ago, and for the past 1.5 years,
        I’ve been learning frontend development and building projects.
        Currently, I’m pursuing a BSc in Computer Science (First Year). I enjoy
        solving problems, creating interactive web experiences, and exploring
        new technologies. Apart from coding, I have a deep interest in space and
        astronomy. To maintain my physical fitness, I train daily at the gym. In
        my free time, I enjoy gaming. This journey has helped me develop logical
        thinking and creativity......
      </p>
    </div>
  );
};

export default Page2;
