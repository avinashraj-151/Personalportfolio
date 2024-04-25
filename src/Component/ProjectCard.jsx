import React from "react";
import { FaGithub } from "react-icons/fa6";
import { github_data } from "./data.js";
function ProjectCard() {
  return (
    <div className="mt-10 mb-8">
      <div className="grid  md:grid-cols-2 gap-4">
        {github_data.map((item) => {
          return (
            <div className="p-6" key={item.id}>
              <div className="flex flex-col rounded-xl shadow-lg hover:shadow-[#9E7CFF] transition-all duration-500 cursor-pointer">
                <img
                  src={item.image}
                  className="h-52 w-full hover:animate-pulse cursor-pointer rounded-t-lg bg-cover"
                ></img>
                <div className="bg-[#0D1224] p-4 rounded-b-lg flex flex-col">
                  <div>
                    <h1 className="text-white capitalize lg:text-2xl md:text-xl">
                      {item.name}
                    </h1>
                    <p className="line-clamp-2 text-pretty leading-relaxed text-white pt-2">
                      As a React developer, it is important to have a solid
                      understanding of the framework's key concepts...
                    </p>
                  </div>
                  <div className="flex pt-2">
                    <div className="cursor-pointer  rounded-full bg-white">
                      <a href={item.link} target="_blank">
                        <FaGithub
                          style={{ fontSize: "50px" }}
                          className="hover:animate-pulse"
                        ></FaGithub>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
