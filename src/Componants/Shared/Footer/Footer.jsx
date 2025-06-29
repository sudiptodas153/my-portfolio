import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        
        <p className="text-center md:text-left text-sm">
          © 2025 Sudipto Das. All rights reserved.
        </p>

       
       

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/sudipto-das-677330343/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500" />
          </a>
          <a href="https://github.com/sudiptodas153" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
