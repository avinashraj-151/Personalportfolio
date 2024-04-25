import React, { useContext, useState } from "react";
import logo from "../assets/logo2.png";
import bgimage from "../assets/backgroundimage.svg";
import { Link } from "react-router-dom";
import { menu_list } from "./data";
import { Context } from "./Contextapi";
export default function Sidebar() {
  const { indexsidebar, setindexsidebar } = useContext(Context);
  const handelmenulist = (i) => {
    setindexsidebar(i);
  };
  return (
    <div
      className="w-64 h-screen bg-[#11142A] "
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "right",
      }}
    >
      <div className="p-10 w-full h-full">
        <div className="h-[10%]">
          <a href="/">
            <img src={logo} alt="logo" className="cursor-pointer" />
          </a>
        </div>
        <div className="h-[90%]">
          <div className="w-full h-full">
            <div className="flex justify-between flex-col">
              {menu_list.map((item, i) => {
                return (
                  <div
                    className={`flex gap-2 items-center p-2 text-white capitalize transition-all duration-300 mt-6 cursor-pointer`}
                    key={i}
                  >
                    <Link to={item.link}>
                      <h1
                        className={` hover:text-[#BB37C1] ${
                          indexsidebar === i ? "text-[#A02DD9]" : ""
                        }`}
                        onClick={() => handelmenulist(i)}
                      >
                        {item.name}
                      </h1>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
