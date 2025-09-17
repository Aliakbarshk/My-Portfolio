import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FFooter = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("h6", {
        opacity: 0,
        y: -150,
        duration: 1,
        stagger: 0.1,
      });
    },
    { scope: container }
  ); // Limit animation to this component only

  return (
    <div
      ref={container}
      className="w-full flex justify-center items-center py-6 bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] shadow-inner mt-12"
    >
      <div className="text-white text-center text-sm flex flex-row gap-2">
        {["N", "O", "T", "H", "I", "N", "G", "H", "E", "R", "E", "🚀"].map(
          (char, i) => (
            <h6 key={i}>{char}</h6>
          )
        )}
      </div>
    </div>
  );
};

export default FFooter;
