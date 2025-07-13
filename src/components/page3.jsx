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
    <div className="relative bg-gray-100 py-24 sm:py-32 overflow-hidden">
      {/* Floating background icons */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png" // HTML
          className="w-12 h-12 absolute top-10 left-10 opacity-70 blur-sm"
          alt="HTML"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png" // CSS
          className="w-12 h-12 absolute top-[40%] left-[5%] opacity-70 blur-sm"
          alt="CSS"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" // JS
          className="w-12 h-12 absolute top-[30%] right-[10%] opacity-70 blur-sm"
          alt="JavaScript"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919851.png" // React
          className="w-12 h-12 absolute bottom-20 right-14 opacity-70 blur-sm"
          alt="React"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png"
          className="w-12 h-12 absolute top-[20%] right-[35%] opacity-70 blur-sm"
          alt="Tailwind"
        />
        <img
          src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
          className="w-12 h-12 absolute bottom-[10%] left-[20%] opacity-70 blur-sm"
          alt="MongoDB"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png" // GitHub
          className="w-12 h-12 absolute top-[70%] right-[30%] opacity-70 blur-sm"
          alt="GitHub"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="skhead text-center text-lg font-semibold text-black">
          My <strong className="skt text-black">Skills</strong>
        </h2>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6">
          {/* Original cards - untouched */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-html5 text-black text-4xl"></i>
            <p className="text-black">HTML</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-css3-alt text-black text-4xl"></i>
            <p className="text-black">CSS</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-js text-black text-4xl"></i>
            <p className="text-black">JavaScript</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-react text-black text-4xl"></i>
            <p className="text-black">React.js</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp"
              alt="Tailwind CSS"
              className="w-10 h-10"
            />
            <p className="text-black">Tailwind CSS</p>
          </div>
        </div>

        {/* Paragraphs and backend section - untouched */}
        <div className="skp mt-10">
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

        <div className="mx-auto mt-6 flex flex-wrap justify-center gap-6">
          {/* Backend icons - untouched */}
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <i className="fa-brands fa-node text-black text-4xl"></i>
            <p className="text-black">Node.js</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="Express.js"
              className="w-10 h-10 object-contain"
            />
            <p className="text-black">Express.js</p>
          </div>
          <div className="border-2 skbox border-gray-300 bg-white text-black text-center font-semibold text-lg p-5 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center w-40">
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
              alt="MongoDB"
              className="w-10 h-10 object-contain"
            />
            <p className="text-black">MongoDB</p>
          </div>
        </div>

        <div className="skp mt-8">
          <p className="skpara text-black">
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
    </div>
  );
};

export default Page3;
