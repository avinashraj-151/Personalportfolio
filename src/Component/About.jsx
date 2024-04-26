import { useEffect, useContext } from "react";
import bgimage from "../assets/backgroundimage.svg";
import mypic from "../assets/myphoto.png";
import { Context } from "./Contextapi";
function About() {
  const { setindexsidebar } = useContext(Context);
  useEffect(() => {
    setindexsidebar(1);
  });
  return (
    <div
      className="p-10 flex lg:flex-row flex-col gap-4  overflow-hidden scrollbar-thin "
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="lg:w-[60%] w-full h-full">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <div className="flex flex-col gap-3 p-4">
            <h1 className="text-[#16F2B3] text-xl font-bold">WHO I AM?</h1>
            <p className="text-white font-sans lg:text-2xl  md:text-xl  lg:leading-relaxed md:text-pretty">
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
      <div className="lg:w-[40%] w-full h-full md:block hidden">
        <div className="flex justify-center items-center lg:p-3">
          <img
            src={mypic}
            alt="mypic"
            className="hover:scale-105 transition-all
             duration-300 border-2 rounded-full border-blue-900 shadow-2xl shadow-[#261C52] hover:shadow-none md:w-56 lg:w-full lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
