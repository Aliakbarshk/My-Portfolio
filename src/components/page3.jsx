import React from "react";
import "./page3.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    // Floating background icons animation
    gsap.utils.toArray(".floating-icon").forEach((icon) => {
      gsap.fromTo(
        icon,
        {
          y: -30,
          rotate: -10,
          opacity: 0.5,
        },
        {
          y: 30,
          rotate: 10,
          opacity: 1,
          scrollTrigger: {
            trigger: icon,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2,
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Floating background icons */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* same icons as before */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="skhead text-center text-xl sm:text-2xl font-semibold text-black">
          My <strong className="skt text-black">Skills</strong>
        </h2>

        {/* Skills cards */}
        <div className="mx-auto mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <i className="fa-brands fa-html5 text-black text-3xl sm:text-4xl"></i>
            <p className="text-black">HTML</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <i className="fa-brands fa-css3-alt text-black text-3xl sm:text-4xl"></i>
            <p className="text-black">CSS</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <i className="fa-brands fa-js text-black text-3xl sm:text-4xl"></i>
            <p className="text-black">JavaScript</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <i className="fa-brands fa-react text-black text-3xl sm:text-4xl"></i>
            <p className="text-black">React.js</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp"
              alt="Tailwind CSS"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="text-black">Tailwind CSS</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <i className="fa-brands fa-github text-black text-3xl sm:text-4xl"></i>
            <p className="text-black">GitHub</p>
          </div>
        </div>

        {/* Paragraph */}
        <div className="skp mt-8 sm:mt-10">
          <p className="skpara text-black text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left">
            I have a strong grasp of{" "}
            <strong className="skpara skstr text-black">
              frontend development
            </strong>{" "}
            including{" "}
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

        {/* Backend cards */}
        <div className="mx-auto mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <i className="fa-brands fa-node text-black text-3xl sm:text-4xl"></i>
            <p className="text-black">Node.js</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="Express.js"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <p className="text-black">Express.js</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-base sm:text-lg p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-32 sm:w-40">
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
              alt="MongoDB"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <p className="text-black">MongoDB</p>
          </div>
        </div>

        {/* Backend para */}
        <div className="skp mt-6 sm:mt-8">
          <p className="skpara text-black text-sm sm:text-base lg:text-lg leading-relaxed text-center sm:text-left">
            Currently, I'm also{" "}
            <strong className="skpara skstr text-black">
              learning backend
            </strong>{" "}
            technologies like{" "}
            <strong className="skpara skstr text-black">Node.js</strong>,{" "}
            <strong className="skpara skstr text-black">MongoDB</strong>, and{" "}
            <strong className="skpara skstr text-black">Express.js</strong>. I’m
            building full-stack projects using the{" "}
            <strong className="skpara skstr text-black">MERN stack</strong> to
            become a complete developer.
          </p>
        </div>
      </div>

      {/* AI Tools */}
      <div className="mx-auto mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
        <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-xs sm:text-sm p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-28 sm:w-32">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            alt="ChatGPT"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2"
          />
          <p className="text-black">ChatGPT</p>
        </div>

        <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-xs sm:text-sm p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-28 sm:w-32">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"
            alt="Gemini"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2 rounded"
          />
          <p className="text-black">Gemini</p>
        </div>

        <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-xs sm:text-sm p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-28 sm:w-32">
          <img
            src="https://crystalpng.com/wp-content/uploads/2025/02/grok_logo.png"
            alt="Grok"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2 rounded"
          />
          <p className="text-black">Grok (X AI)</p>
        </div>
      </div>

      {/* AI para */}
      <div className="skp mt-4 px-4">
        <p className="skpara text-black text-sm sm:text-base lg:text-lg text-center leading-relaxed">
          I use{" "}
          <strong className="skpara skstr text-black">
            AI as my second brain
          </strong>{" "}
          to work
          <strong className="skpara skstr text-black"> smarter</strong>,
          <strong className="skpara skstr text-black"> faster</strong>, and more{" "}
          <strong className="skpara skstr text-black">efficiently</strong> in my
          development and learning.
        </p>
      </div>
    </div>
  );
};

export default Page3;
