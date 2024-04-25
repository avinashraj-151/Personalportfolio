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
      <div className="w-full h-full flex lg:flex-row flex-col-reverse gap-5 mb-20 lg:mt-10 md:mt-20">
        <div className="lg:w-[50%] md:w-full md:h-full md:block hidden">
          <div className="w-full h-full flex justify-center items-center">
            <img src={eduction} className="lg:w-[500px] w-[400px]"></img>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-full ">
          <div className="w-full h-full p-5 flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="md:text-3xl text-[#9E7CFF]">Education</h1>
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
                          className="lg:w-14 lg:h-14  md:w-10 md:h-10 h-8 w-8 cursor-pointer"
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
        {/* bg-[#11142A] */}
        <div className="bg-[#11142A]">
          <div class="flex md:flex-row flex-col justify-center">
            <div class="h-[2px] w-full  bg-gradient-to-r from-transparent via-[#913DDE] to-[#DA45A6]"></div>
          </div>
          <div className="">
            <div>
              <h1 className="text-center text-3xl text-white mt-7">
                Certifications
              </h1>
            </div>
            <div className="w-full h-full flex flex-row p-4 mt-6 ">
              <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-4 w-full h-full  justify-center">
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
                          <h1 className="md:text-xl text-center text-white capitalize">
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
