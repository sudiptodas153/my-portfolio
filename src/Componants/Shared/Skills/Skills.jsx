import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML5", level: 90 },
    { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3", level: 85 },
    { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: "JavaScript", level: 80 },
    { icon: <FaReact size={40} color="#61DAFB" />, name: "React.js", level: 75 },
    { icon: <SiTailwindcss size={40} color="#06B6D4" />, name: "Tailwind CSS", level: 70 },
    { icon: <SiDaisyui size={40} color="#1DAEFF" />, name: "DaisyUI", level: 95 },
    { icon: <FaNodeJs size={40} color="#339933" />, name: "Node.js", level: 60 },
    { icon: <SiExpress size={40} color="#ffffff" />, name: "Express.js", level: 55 },
    { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB", level: 50 },
    { icon: <SiFirebase size={40} color="#FFCA28" />, name: "Firebase", level: 45 },
  ];

  return (
    <div id="skills" className="max-w-11/12 mx-auto ">
      <h2 className='text-4xl font-bold text-center'>Skills</h2>
      <div className="grid grid-cols-1  md:grid-cols-5 gap-8 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={index}
            className="flex flex-col items-center border border-gray-100  shadow-lg rounded-lg p-6 hover:scale-105 transition-transform "
          >
            {skill.icon}
            <p className="mt-3 text-lg font-semibold ">{skill.name}</p>

            {/* Progress Bar */}
            <div className="w-full bg-black rounded-full h-3 mt-4">
              <div
                className="bg-white h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="mt-1 text-sm">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
