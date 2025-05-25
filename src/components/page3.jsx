import React from "react";
import "./page3.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page3 = () => {
  useGSAP(() => {
    gsap.from(".skbox", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".skhead",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".skpara", {
      color: "#f3f4f6",
      duration: 2,
      width: 200,
      scrollTrigger: {
        trigger: ".skhead",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="skhead text-center text-lg font-semibold text-black">
          My <strong className="skt  text-black">Skills</strong>
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6">
          {/* HTML */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-html5 text-black text-4xl"></i>
            <p className="text-black">HTML</p>
          </div>

          {/* CSS */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-css3-alt text-black text-4xl"></i>
            <p className="text-black">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-js text-black text-4xl"></i>
            <p className="text-black">JavaScript</p>
          </div>

          {/* React.js */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-react text-black text-4xl"></i>
            <p className="text-black">React.js</p>
          </div>

          {/* Tailwind CSS (Photo Icon) */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp"
              alt="Tailwind CSS"
              className="w-10 h-10"
            />
            <p className="text-black">Tailwind CSS</p>
          </div>
          <div className="skp">
            <p className="skpara text-black">
              I have a strong grasp of{" "}
              <strong className="skpara skstr text-black">
                frontend development
              </strong>
              , including{" "}
              <strong className="skpara skstr text-black">
                HTML, CSS, JavaScript, React.js, and Tailwind CSS
              </strong>
              . I also have{" "}
              <strong className="skpara skstr text-black">
                basic knowledge of C++, C#, Python, and SQL
              </strong>
              . My goal is to keep improving and learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
