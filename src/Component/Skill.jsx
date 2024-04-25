import React, { useEffect, useContext } from "react";
import bgimage from "../assets/backgroundimage.svg";
import { skills } from "./data";
import { Context } from "./Contextapi";
function Skill() {
  const { indexsidebar, setindexsidebar } = useContext(Context);
  useEffect(() => {
    setindexsidebar(2);
  });
  return (
    <div
      className="p-10 flex flex-row gap-4 overflow-auto scrollbar-thin"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-4  md:grid-cols-3 gap-3">
          {skills.map((item, index) => (
            <div
              key={index}
              className="p-3 flex flex-col gap-5 justify-center items-center  rounded-lg select-none border-2 border-blue-900  shadow-md shadow-purple-900 cursor-pointer border-gradient animate-border transition-all duration-300"
            >
              <img src={item.image} className="w-32 h-32"></img>
              <h1 className="text-white text-xl hover:text-[#16F2B3]">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
