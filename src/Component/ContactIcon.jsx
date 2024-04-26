import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
function ContactIcon() {
  return (
    <div className="flex flex-row md:gap-4 gap-1">
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
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a
          href="https://www.facebook.com/profile.php?id=100013380854123"
          target="_blank"
        >
          <FaFacebook
            style={{ fontSize: "30px" }}
            className="hover:animate-pulse"
          ></FaFacebook>
        </a>
      </div>
      <div className="cursor-pointer  bg-[#16F2B3] rounded-full p-2">
        <a href="mailto:avinashrajraj628@gmail.com">
          <FaGoogle
            style={{ fontSize: "30px" }}
            className="hover:animate-pulse"
          ></FaGoogle>
        </a>
      </div>
    </div>
  );
}

export default ContactIcon;
