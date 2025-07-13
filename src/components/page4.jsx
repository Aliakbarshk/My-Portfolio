import React from "react";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import "./page4.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Page4 = () => {



 useGSAP(() => {
   gsap.from(".emptygap", {
     duration: 1,
     opacity: 0,
     scrollTrigger: {
       trigger: ".skhead",
       start: "top 80%",
       toggleActions: "play none none none",
     },
   });

   gsap.from(".container", {
     duration: 1,
     opacity: 0,
     x: -50,
     stagger: 0.2, // Proper stagger effect
     scrollTrigger: {
       trigger: ".skhead",
       start: "top 80%",
       toggleActions: "play none none none",
     },
   });
 }, []);




  return (
    <>
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="semicont flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-black">
                Windows 11 clone
              </h1>
              <p className="leading-relaxed text-black">
                I have developed a Windows 11 UI clone that provides a realistic
                desktop experience with multiple built-in apps, making it feel
                like a functional OS.
              </p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">HTML</p>
            </div>
            <div className="proT  p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">CSS</p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">JavaScript</p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">ReactJS</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://msftstories.thesourcemediaassets.com/sites/620/2021/09/Hero-Bloom-Logo-800x533.jpg"
              alt="stats"
            />
          </div>
          <div className="emptygap"></div>
          <div className="cont2 flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-black">
                Chatbot
              </h1>
              <p className="leading-relaxed text-black">
                I have developed a Windows 11 UI clone that provides a realistic
                desktop experience with multiple built-in apps, making it feel
                like a functional OS.
              </p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">HTML</p>
            </div>
            <div className="proT  p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">CSS</p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">JavaScript</p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">ReactJS</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/600x300"
              alt="stats"
            />
          </div>
          <div className="emptygap"></div>
          <div className="cont2 flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-black">
                Chatbot
              </h1>
              <p className="leading-relaxed text-black">
                I have developed a Windows 11 UI clone that provides a realistic
                desktop experience with multiple built-in apps, making it feel
                like a functional OS.
              </p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">HTML</p>
            </div>
            <div className="proT  p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">CSS</p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">JavaScript</p>
            </div>
            <div className="proT p-4 sm:w-1/2 lg:w-1/4 w-1/2 flex items-center">
              <p className="leading-relaxed ml-2 text-black">ReactJS</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/600x300"
              alt="stats"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mt-4">
        <h1 className="gh text-black">20+ projects on github</h1>
      </div>
    </>
  );
};

export default Page4;
