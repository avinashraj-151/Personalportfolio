import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import gfg from "../assets/gfg.svg";
import { Link } from "react-router-dom";
function HomeIcon() {
  return (
    <div className="flex flex-row gap-4">
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a
          href="https://www.geeksforgeeks.org/user/avinashrajraj628/"
          target="_blank"
        >
          <img src={gfg} className="hover:animate-pulse w-8 h-8" />
        </a>
      </div>
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a href="https://leetcode.com/avinashrajraj628/" target="_blank">
          <SiLeetcode
            style={{ fontSize: "30px" }}
            className="hover:animate-pulse"
          ></SiLeetcode>
        </a>
      </div>
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a href="https://github.com/avinashraj-151" target="_blank">
          <FaGithub
            style={{ fontSize: "30px" }}
            className="hover:animate-pulse"
          ></FaGithub>
        </a>
      </div>
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a href="https://www.linkedin.com/in/avinashraj1/" target="_blank">
          <FaLinkedinIn
            style={{ fontSize: "30px" }}
            className="hover:animate-pulse"
          ></FaLinkedinIn>
        </a>
      </div>
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a href="https://twitter.com/AvinashRaj151" target="_blank">
          <FaXTwitter
            style={{ fontSize: "30px" }}
            className="hover:animate-pulse"
          ></FaXTwitter>
        </a>
      </div>
    </div>
  );
}

export default HomeIcon;
