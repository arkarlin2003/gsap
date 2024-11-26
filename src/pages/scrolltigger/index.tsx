import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollPage = () => {
  const black = useRef(null);

  useGSAP(
    () => {
      gsap.to("#black", {
        x: 500,
        duration: 3,
        scrollTrigger: {
          trigger: "#black",
          start: "top center",
          end: "bottom 30%",
          markers: true,
          pin: true,
          toggleActions: "restart none none none",
          scrub: true,
          //   onEnter onLeave onEnterBack onLeaveBack
          //   scrub: true,
        },
      });
    },
    {
      dependencies: [],
      revertOnUpdate: true,
    }
  );

  return (
    <div className={"h-[1000px] mb-[1000px] w-full "}>
      <div className="bg-blue-500 h-[500px]"></div>
      <div className="bg-red-500 h-[500px]">
        <div
          id="black"
          ref={black}
          className="bg-black rounded-xl size-20"
        ></div>
      </div>
    </div>
  );
};

export default ScrollPage;
