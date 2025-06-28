import React from "react";
import my from "../../../assets/my-removebg-preview.png";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import my2 from "../../../assets/my2-removebg.png";

const Display = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Sudipto Das</h2>
          <h3 className="text-3xl font-semibold">Frontend Developer</h3>
          <p>I am a web developer. I create modern and responsive websites. <br /> Passionate about clean code and user-friendly designs.
          </p>
          <div className="flex items-center gap-3">
            <a href=""><IoLogoGithub  size={30}/></a>
            <a href=""><FaLinkedin color="#0A66C2" size={30} /></a>
            <a href=""><FaFacebook color="blue" size={30} /></a>
          </div>
          <button className="btn w-28 bg-black text-white">Resume</button>
        </div>
        <div className="">
          <img className=" border-4 h-72 w-72 border-gray-500 p-3 rounded-full" src={my} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Display;
