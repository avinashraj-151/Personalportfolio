import React from "react";
import degree from "../assets/degree.png";
import lpu from "../assets/lpu.png";
const css_qualification =
  "cursor-pointer border-2 p-4 border-[#0A0D35]  transition-all duration-300 shadow-md shadow-[#DA45A6] hover:shadow-transparent";
const css_button =
  "p-2 bg-gradient-to-r from-[#9228E5] to-[#E247A0] rounded-full text-white hover:from-[#E247A0] hover:to-[#9228E5]";
function Qualification() {
  return (
    <section>
      <div className="bg-[#11142A]">
        <div class="flex flex-row justify-center">
          <div class="h-[2px] w-full  bg-gradient-to-r from-transparent via-[#913DDE] to-[#DA45A6]"></div>
        </div>
        <div className="">
          <div>
            <h1 className="text-center text-3xl text-white mt-7">
              Qualification
            </h1>
          </div>
          <div className="w-full h-full flex flex-row p-4">
            <div className="lg:w-[50%] justify-center lg:flex items-center pt-10 hidden">
              <img src={degree} className="w-96 h-96"></img>
            </div>
            <div className="lg:w-[50%] h-full w-full">
              <div className="pt-10">
                <div className="flex flex-col gap-4">
                  <div className={css_qualification}>
                    <div className="flex justify-center items-center">
                      <img src={lpu} className="w-20"></img>
                    </div>
                    <div className="flex flex-row justify-between gap-3 items-center p-2">
                      <h1 className="text-2xl text-white">
                        Lovely Professional University
                      </h1>
                      <h2 className="text-sm text-[#16F2B3]">2020-Present</h2>
                    </div>
                    <div>
                      <h1 className="text-pretty text-white p-2">
                        Bachelor of Technology in Computer Science And
                        Engineering
                      </h1>
                    </div>
                    <div className="p-2">
                      <a href="https://www.lpu.in/" target="_blank">
                        <button className={css_button}>Visit Website</button>
                      </a>
                    </div>
                  </div>
                  <div className={css_qualification}>
                    <div className="flex justify-center items-center"></div>
                    <div className="flex flex-row justify-between gap-3 items-center p-2">
                      <h1 className="text-2xl text-white">
                        Marigold Public School
                      </h1>
                      <h2 className="text-sm text-[#16F2B3]">2017-2019</h2>
                    </div>
                    <div>
                      <h1 className="text-pretty text-white p-2">
                        Higher Secondary Certificate
                      </h1>
                    </div>
                    <div className="p-2">
                      <button className={css_button}>Not available</button>
                    </div>
                  </div>
                  <div className={css_qualification}>
                    <div className="flex justify-center items-center"></div>
                    <div className="flex flex-row justify-between gap-3 items-center p-2">
                      <h1 className="text-2xl text-white">
                        Bahera public school
                      </h1>
                      <h2 className="text-sm text-[#16F2B3]">2016-2017</h2>
                    </div>
                    <div>
                      <h1 className="text-pretty text-white p-2">
                        Secondary School Certificate
                      </h1>
                    </div>
                    <div className="p-2">
                      <a href="https://www.bpsbahera.com/" target="_blank">
                        <button className={css_button}>Visit Website</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
