import React from "react";
import bgimage from "../assets/backgroundimage.svg";
import { RiContactsLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import Code from "./Code";
import HomeIcon from "./HomeIcon";
import { Link } from "react-router-dom";
import pdfpath from "../assets/resume4.pdf";
function Home() {
  return (
    <div
      className="p-10 flex flex-col lg:flex-row gap-4 overflow-auto scrollbar-thin lg:overflow-hidden"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="lg:w-[50%] w-full h-full flex flex-col justify-center lg:items-center md:mb-10 ">
        <div>
          <div className="">
            <h1 className=" text-white lg:text-4xl md:text-3xl text-xl font-bold mb-4">
              Hello,
              <br></br>
              This is <span className="text-[#F926AE]">AVINASH RAJ</span>
              <span>
                , <br></br>I'm a Professional
                <span className="text-[#16F2B3]"> Software Developer</span>.
              </span>
            </h1>
          </div>
          <HomeIcon></HomeIcon>
          <div className="pt-10 flex flex-row gap-5">
            <Link to={"/contact"}>
              <button
                className="border-2 p-3 flex text-white justify-center items-center uppercase gap-1 
              hover:text-[#16f2B3] hover:gap-3 ease-in-out transition-all duration-300
            rounded-2xl  border-[#9228E5] border-x-[#E247A0] "
              >
                <h1 className="">Contact Me</h1>
                <RiContactsLine className=""></RiContactsLine>
              </button>
            </Link>
            <a href={pdfpath} target="_blank">
              <button className=" bg-gradient-to-r from-[#9228E5] to-[#E247A0]  p-3 flex text-white justify-center items-center uppercase gap-1 rounded-2xl  hover:from-[#E247A0] hover:to-[#9228E5]">
                Get resume
                <FaArrowDown />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] w-full h-full">
        <Code></Code>
      </div>
    </div>
  );
}
export default Home;
