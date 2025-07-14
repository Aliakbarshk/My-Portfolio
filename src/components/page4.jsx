import React from "react";
import "./page4.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skhead",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <section className="text-black body-font relative">
        {/* Transparent blurred background shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="w-16 h-16 bg-blue-300/30 rounded-full absolute top-12 left-8 backdrop-blur-md border border-white/20 shadow-md" />
          <div className="w-24 h-24 bg-yellow-200/30 rotate-45 absolute top-[35%] right-12 backdrop-blur-md border border-white/20 shadow-md" />
          <div className="w-12 h-12 bg-purple-200/30 rounded-xl absolute bottom-24 left-[30%] backdrop-blur-md border border-white/20 shadow-md" />
          <div className="w-10 h-10 bg-red-300/30 rounded-full absolute bottom-40 right-[25%] backdrop-blur-md border border-white/20 shadow-md" />
          <div className="w-20 h-20 bg-green-200/30 rounded-[30%] absolute top-[65%] left-[60%] backdrop-blur-md border border-white/20 shadow-md" />
        </div>
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
                I have developed a chatbot using modern tech to assist users
                like a real support system.
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
