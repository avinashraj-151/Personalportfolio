import { useEffect, useContext } from "react";
import bgimage from "../assets/backgroundimage.svg";
import mypic from "../assets/myphoto.png";
import { Context } from "./Contextapi";
function About() {
  const { indexsidebar, setindexsidebar } = useContext(Context);
  useEffect(() => {
    setindexsidebar(1);
  });
  return (
    <div
      className="p-10 flex flex-row gap-4"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-[60%] h-full">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <div className="flex flex-col gap-3 p-4">
            <h1 className="text-[#16F2B3] text-xl font-bold">WHO I AM?</h1>
            <p className="text-white font-sans text-2xl  leading-relaxed text-pretty">
              I'm <span className="text-[#EC4899]">Avinash Raj</span>, a
              passionate <span className="">software developer</span> with a
              demonstrated track record in competitive programming on platforms
              like Leetcode, CodeChef, and GeekForGeeks. I have strong skills in
              C++, Python, and web development technologies like ReactJS,
              NodeJS, Express, and MongoDB. I'm committed to continuous learning
              and enjoy building impactful projects.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="w-full h-full flex justify-center items-center flex-col p-3">
          <img
            src={mypic}
            alt="mypic"
            className="hover:scale-105 transition-all duration-300 border-2 rounded-full border-blue-900 shadow-2xl shadow-[#261C52] hover:shadow-none"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
