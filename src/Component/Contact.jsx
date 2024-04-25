import { useEffect, useContext, useState } from "react";
import { Context } from "./Contextapi";
import bgimage from "../assets/backgroundimage.svg";
import myphoto from "../assets/myphoto.png";
import ContactIcon from "./ContactIcon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const { setindexsidebar } = useContext(Context);
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const notify = () =>
    toast.success("Got it! Will reply within 24 hours.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  function handelchange(event) {
    setuserDetails({
      ...userDetails,
      [event.target.id]: event.target.value,
    });
  }
  function handelsubmit(event) {
    event.preventDefault();
    // console.log(userDetails);
    // notify();
    setloading(true);
    const service_id = "service_gj6eeut";
    const template_id = "template_vky2np5";
    const publicKey = "1Pi-lWjeBmWvqUpUs";

    const template_params = {
      from_email: userDetails.email,
      from_name: userDetails.name,
      to_name: "avinashraj",
      message: userDetails.message,
    };

    // console.log({ name, email, Message, subject })
    emailjs.send(service_id, template_id, template_params, publicKey).then(
      (result) => {
        notify();
        setloading(false);
        setuserDetails({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  useEffect(() => {
    setindexsidebar(5);
  });
  return (
    <>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#0D1224", // Background color
          color: "#FFFFFF", // Text color
        }}
      />
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
        <div className="w-full h-full flex flex-row gap-5 mt-10">
          <div className="w-[50%]">
            <div className="w-full h-full flex justify-center items-center">
              <img src={myphoto} className="w-[400px]"></img>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="w-full h-full p-5 flex flex-col justify-center">
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-3xl text-[#9E7CFF]">Contact Me</h1>
                  <p className="text-2xl text-white leading-relaxed">
                    I'm reachable across various social media platforms. Drop me
                    a message, and I'll get back to you within 24 hours.
                  </p>
                </div>
                <ContactIcon></ContactIcon>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="w-full h-full">
            <div class="flex flex-row justify-center">
              <div class="h-[2px] w-full  bg-gradient-to-r from-transparent via-[#913DDE] to-[#DA45A6]"></div>
            </div>
            <div className="">
              <div>
                <h1 className="text-center text-3xl text-white mt-7">
                  Contact Me
                </h1>
              </div>
              <div className="mt-10 mb-8">
                <div className="w-full h-full flex  justify-center items-center gap-4 ">
                  <div class="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5 shadow-lg">
                    <p class="text-sm text-[#d3d8e8]">
                      If you have any questions or concerns, feel free to reach
                      out to me. I'm open to exploring work opportunities that
                      resonate with my skills and interests.
                    </p>
                    <form onSubmit={handelsubmit}>
                      <div className="mt-6 flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                          <label class="text-base">Your name: </label>
                          <input
                            id="name"
                            class="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            maxLength="100"
                            required
                            value={userDetails.name}
                            onChange={handelchange}
                          />
                        </div>
                        <div class="flex flex-col gap-2">
                          <label class="text-base">Your Email: </label>
                          <input
                            id="email"
                            class="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="email"
                            maxLength="100"
                            required
                            value={userDetails.email}
                            onChange={handelchange}
                          />
                        </div>
                        <div class="flex flex-col gap-2">
                          <label class="text-base">Your Message: </label>
                          <textarea
                            id="message"
                            class="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            maxLength="1000"
                            name="message"
                            required
                            rows="4"
                            value={userDetails.message}
                            onChange={handelchange}
                          ></textarea>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                          <button
                            type="submit"
                            class="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-3  text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white "
                          >
                            {loading ? (
                              <span>Sending...</span>
                            ) : (
                              <span>Send Message</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
