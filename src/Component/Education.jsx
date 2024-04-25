import { useEffect, useContext } from "react";
import bgimage from "../assets/backgroundimage.svg";
import eduction from "../assets/education.png";
import { Profile_set } from "./data";
import Qualification from "./Qualification";
import { Context } from "./Contextapi";
import { certificate_data } from "./data";
function Education() {
  const { setindexsidebar } = useContext(Context);
  useEffect(() => {
    setindexsidebar(3);
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
      <div className="w-full h-full flex flex-row gap-5 mb-20 mt-10">
        <div className="w-[50%]">
          <div className="w-full h-full flex justify-center items-center">
            <img src={eduction} className="w-[500px]"></img>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="w-full h-full p-5 flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-[#9E7CFF]">Education</h1>
              <h2 className="text-2xl text-white">
                Basic Qualification and Certifcations
              </h2>
            </div>
            <div className="mt-7">
              <div className="flex flex-row gap-4">
                {Profile_set.map((item, i) => {
                  return (
                    <a href={item.link} target="_blank" key={i}>
                      <div className="cursor-pointer  rounded-full p-2 bg-[#1cb388] hover:bg-[#16F2B3]">
                        <img
                          src={item.Image}
                          alt="mypic"
                          className="w-14 h-14 cursor-pointer"
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Qualification></Qualification>
      <section>
        <div className="bg-[#11142A]">
          <div class="flex flex-row justify-center">
            <div class="h-[2px] w-full  bg-gradient-to-r from-transparent via-[#913DDE] to-[#DA45A6]"></div>
          </div>
          <div className="">
            <div>
              <h1 className="text-center text-3xl text-white mt-7">
                Certifications
              </h1>
            </div>
            <div className="w-full h-full flex flex-row p-4 mt-6">
              <div className="grid  grid-cols-3 gap-4 w-full h-full">
                {certificate_data.map((item, i) => {
                  return (
                    <div
                      className="cursor-pointer w-60 p-2 flex flex-col justify-center items-center rounded-lg border-[3px]
                      transition-all duration-300
                      hover:border-y-[#E247A0]
                      hover:shadow-[#DA45A6] 
                       hover:border-x-blue-900 border-x-[#E247A0] border-y-blue-900 shadow-lg"
                      key={i}
                    >
                      <div className="w-full h-full items-center justify-center flex">
                        <img src={item.image} className="w-32 h-32"></img>
                      </div>
                      <div className="w-full h-full">
                        <div className="w-full h-full flex flex-col gap-2 justify-between items-center">
                          <h1 className="text-xl text-center text-white capitalize">
                            {item.name}
                          </h1>
                          <a href={item.link} target="_blank">
                            <h1 className="text-xl text-[#16F2B3] hover:text-[#E247A0]">
                              Certificate
                            </h1>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
