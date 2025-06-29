import React from "react";
import logo from '../../../assets/logo.png'
// import { ScrollLink } from "react-scroll";
import { Link as ScrollLink } from 'react-scroll';
// import { useNavigate } from "react-router";

const Navbar = () => {





const links = <>
  <li><ScrollLink to="home" offset={-120} smooth={true} duration={500}>Home</ScrollLink></li>
  <li><ScrollLink to="about" offset={-120} smooth={true} duration={500}>About me</ScrollLink></li>
  <li><ScrollLink to="skills" offset={-120} smooth={true} duration={500}>Skills</ScrollLink></li>
  <li><ScrollLink to="projects" offset={-120} smooth={true} duration={500}>Projects</ScrollLink></li>
  <li><ScrollLink to="contact" offset={-120} smooth={true} duration={500}>Contact</ScrollLink></li>
</>


  return (
    <div className="">
      <div className="navbar px-3 border-b border-gray-500 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             
       {links}
            </ul>
          </div>
          <a className=""><img className="w-20" src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1">
           
              {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-white w-28 text-black">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
