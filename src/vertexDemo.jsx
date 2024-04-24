import React from "react";
import { Vortex } from "./ui/vertex";
import { TextGenerateEffect } from "./ui/typewritterEffect";
export function VortexDemoSecond() {
  return (
    <div className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          
          HI <span className="text-cyan-800 text-7xl"> HARSH </span> This Side
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        <TextGenerateEffect words={"A computer science student . I aim to deepen my understanding in various areas of technology and product development."} />
        </p>
      
      </Vortex>
    </div>
  );
}
