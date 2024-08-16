import "../assets/style/fonts.css";
import { useRef } from "react";
import { animated, useSpring, useScroll } from "@react-spring/web";
import Skill from "./Skill";

export default function Main() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up the scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springProps = useSpring({
    transform: scrollYProgress.to(
      [0, 0.9], 
      ['translateY(0%)', 'translateY(-40%)']
    ),
  });

  return (
    <div ref={containerRef} style={{ height: "100vh", position: "relative" }}>
      <animated.div
        style={{ ...springProps, position: "absolute", top: "0px", width: "100%" }}
      >
        <Skill />
      </animated.div>
    </div>
  );
}
