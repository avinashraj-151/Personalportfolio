import { useEffect, useContext } from "react";
import { Context } from "./Contextapi";
import bgimage from "../assets/backgroundimage.svg";
import project from "../assets/Project.png";
import ProjectCard from "./ProjectCard";
function Projects() {
  const { setindexsidebar } = useContext(Context);
  useEffect(() => {
    setindexsidebar(4);
  });
  return (
    <div
      className="p-10 flex flex-col overflow-auto scrollbar-thin gap-4 w-full h-full"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="w-full h-full flex lg:flex-row flex-col-reverse gap-5 lg:mt-10 md:mt-16">
        <div className="lg:w-[50%] md:block w-full h-full hidden">
          <div className="w-full h-full flex justify-center items-center">
            <img src={project} className="lg:w-[500px] w-[300px]"></img>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-full">
          <div className="w-full h-full p-5 flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-[#9E7CFF]">Projects</h1>
              <p className="lg:text-2xl text-white leading-relaxed text-xl">
                My projects make use of a vast variety of the latest technology
                tools, delivering innovative solutions at the intersection of
                advanced web development techniques, intricate data structures,
                and algorithmic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="">
          <div class="flex flex-row justify-center">
            <div class="h-[2px] w-full  bg-gradient-to-r from-transparent via-[#913DDE] to-[#DA45A6]"></div>
          </div>
          <div className="">
            <div>
              <h1 className="text-center text-3xl text-white mt-7">Project</h1>
            </div>
            <ProjectCard></ProjectCard>
            <div className="justify-center items-center flex">
              <button className="bg-gradient-to-r from-[#9228E5] to-[#E247A0] p-3 rounded-lg text-white hover:bg-gradient-to-tr hover:from-[#E247A0] hover:to-[#9228E5]">
                <a href="https://github.com/avinashraj-151" target="_blank">
                  VIEW MORE
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
