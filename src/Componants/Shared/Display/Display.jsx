import React from "react";
import my from "../../../assets/my-removebg-preview.png";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
// import my2 from "../../../assets/my2-removebg.png";

const Display = () => {
  return (
    <div id="home">
      <div className="flex flex-col-reverse md:flex-row md:justify-around">

        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Sudipto Das</h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            <Typewriter
              words={['Frontend Developer', 'Web Developer', 'UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p>I am a web developer. I create modern and responsive websites. <br /> Passionate about clean code and user-friendly designs.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/sudiptodas153" target="blank"><IoLogoGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/sudipto-das-677330343/" target="blank"><FaLinkedin color="white" size={30} /></a>
            <a href="https://www.facebook.com/sudipto.das.601834" target="blank"><FaFacebook color="white" size={30} /></a>
          </div>
          <button className="btn w-28 bg-white text-black">Resume</button>
        </div>

        <div className="flex justify-center">
          <img className=" border-4 h-72 w-72 border-gray-500 p-3 rounded-full" src={my} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Display;
