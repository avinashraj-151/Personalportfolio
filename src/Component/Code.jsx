import React from "react";

function Code() {
  return (
    <div className="bg-gradient-to-r from-[#11152D] to-[#0B0E38] rounded-lg select-none  border-blue-900 relative w-full h-full shadow-lg shadow-purple-900">
      <div className="flex flex-row">
        <div class="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
        <div class="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
      </div>
      <div className="px-8 py-5">
        <div class="flex flex-row space-x-2">
          <div class="rounded-full bg-red-400 w-3 h-3"></div>
          <div class="rounded-full bg-orange-400 w-3 h-3"></div>
          <div class="rounded-full bg-green-200 w-3 h-3"></div>
        </div>
      </div>
      <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
        <code className="font-mono">
          <div>
            <span className="text-[#F926AE]">const</span>
            <span className="text-white">
              {" "}
              coder = <span className="text-gray-400">{"{"}</span>
            </span>
          </div>
          <div className="">
            <span className="text-white ml-8 mr-2">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">Avinashraj</span>
            <span className="text-gray-400">',</span>
          </div>
          <div class="ml-8 mr-2">
            <span class="text-white">skills:</span>
            <span class="text-gray-400">['</span>
            <span class="text-amber-300">C++</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300">React</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300">Node</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300">Express</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300">MySql</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300"> MongoDB</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300">tailwindcss</span>
            <span class="text-gray-400">', '</span>
            <span class="text-amber-300">MaterialUi</span>
            <span class="text-gray-400">'],</span>
          </div>
          <div class="">
            <span class="text-white ml-8 mr-2">hardWorker:</span>
            <span class="text-orange-400">true</span>
            <span class="text-gray-400">,</span>
          </div>
          <div class="">
            <span class="text-white ml-8 mr-2">problemSolver:</span>
            <span class="text-orange-400">true</span>
            <span class="text-gray-400">,</span>
          </div>
          <div>
            <span class="text-green-400 ml-8 mr-2">hireable:</span>
            <span class="text-orange-400">function</span>
            <span class="text-gray-400">{"() {"}</span>
          </div>
          <div class="">
            <span class="text-orange-400 ml-16 mr-2">return</span>
            <span class="text-gray-400">{"("}</span>
          </div>
          <div>
            <span class="text-cyan-400 ml-24">this.</span>
            <span class="text-white mr-2">hardWorker</span>
            <span class="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span class="text-cyan-400 ml-24">this.</span>
            <span class="text-white mr-2">problemSolver</span>
            <span class="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span class="text-cyan-400 ml-24">this.</span>
            <span class="text-white mr-2">skills.length</span>
            <span class="text-amber-300">{">="}</span>
            <span class="ml-2 text-[#D45A32]">5</span>
          </div>
          <div class="">
            <span class="text-gray-400 ml-16 mr-2">{");"}</span>
            {/* <span class="text-gray-400">{"("}</span> */}
          </div>
          <div>
            <span class="text-gray-400 ml-8">{"}"}</span>
          </div>
          <div>
            <span class="text-gray-400 ">{"}"}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default Code;
