import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaUsers, FaWrench, FaReact, FaNodeJs, FaPhp, 
  FaPalette, FaMagic, FaMobileAlt, FaLightbulb, 
  FaUserFriends, FaComments, FaClock, FaSyncAlt, FaBookOpen 
} from 'react-icons/fa';
import { SiJavascript, SiHtml5 } from 'react-icons/si';

const technicalSkills = [
  { name: 'HTML / CSS', icon: <SiHtml5 />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { name: 'React.js', icon: <FaReact />, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'PHP', icon: <FaPhp />, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { name: 'Tailwind CSS', icon: <FaPalette />, color: 'text-teal-400', bg: 'bg-teal-500/10' },
  { name: 'Flutter', icon: <FaMobileAlt />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'React Native', icon: <FaReact />, color: 'text-cyan-400', bg: 'bg-cyan-500/10' }
];

const professionalSkills = [
  { name: 'Problem Solving', icon: <FaLightbulb />, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  { name: 'Collaboration', icon: <FaUserFriends />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Communication', icon: <FaComments />, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'Time Management', icon: <FaClock />, color: 'text-red-500', bg: 'bg-red-500/10' },
  { name: 'Adaptability', icon: <FaSyncAlt />, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { name: 'Continuous Learning', icon: <FaBookOpen />, color: 'text-indigo-500', bg: 'bg-indigo-500/10' }
];

const tools = [
  'VS Code', 'Cursor', 'Git & GitHub', 'Figma', 'Adobe Photoshop', 'Postman', 'MySQL / MongoDB'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Skills = () => {
  return (
    <div id="skills" className="py-24 bg-gray-50/50 dark:bg-dark-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2"
          >
            My Expertise
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h1>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <FaCode className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="group flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Professional Skills */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 shadow-inner">
                  <FaUsers className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Skills</h2>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {professionalSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="group flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-500 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Tools & Databases (Reverted to standard pills) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-8 bg-white dark:bg-dark-card rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-inner">
                <FaWrench className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tools & Databases</h2>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-6 py-3 bg-gray-50 dark:bg-darker text-gray-700 dark:text-gray-300 rounded-full font-medium border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
