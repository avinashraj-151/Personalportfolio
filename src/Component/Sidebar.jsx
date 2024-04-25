import React, { useContext, useEffect, useState } from "react";
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
    <>
      <div
        className="w-64 h-screen bg-[#11142A] md:block hidden"
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
      <div className="md:hidden flex justify-center items-center p-3">
        <div class="flex flex-col items-center gap-2 justify-center">
          <Link to={"/"}>
            <div
              class={`rounded-full w-3 h-3 ${
                indexsidebar == 0
                  ? " bg-[#BB37C1] animate-pulse"
                  : " bg-red-400"
              }`}
            ></div>
          </Link>
          <Link to={"/about"}>
            <div
              class={`rounded-full w-3 h-3 ${
                indexsidebar == 1
                  ? " bg-[#BB37C1] animate-pulse"
                  : "bg-orange-400"
              }`}
            ></div>
          </Link>
          <Link to={"/skill"}>
            <div
              class={`rounded-full w-3 h-3 ${
                indexsidebar == 2
                  ? " bg-[#BB37C1] animate-pulse"
                  : "bg-green-200"
              }`}
            ></div>
          </Link>
          <Link to={"/education"}>
            <div
              class={`rounded-full w-3 h-3 ${
                indexsidebar == 3
                  ? " bg-[#BB37C1] animate-pulse"
                  : "bg-yellow-300"
              }`}
            ></div>
          </Link>
          <Link to={"/projects"}>
            <div
              class={`rounded-full w-3 h-3 ${
                indexsidebar == 4
                  ? " bg-[#BB37C1] animate-pulse"
                  : "bg-amber-500"
              }`}
            ></div>
          </Link>
          <Link to={"/contact"}>
            <div
              class={`rounded-full w-3 h-3 ${
                indexsidebar == 5
                  ? " bg-[#BB37C1] animate-pulse"
                  : "bg-slate-400"
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </>
  );
}
