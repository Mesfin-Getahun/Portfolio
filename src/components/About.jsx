import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutImg from '../assets/7N6A8050.JPG';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  const tabContents = {
    skills: (
      <ul className="space-y-4">
        <li className="flex gap-4 items-start">
          <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
          <div>
            <span className="text-gray-900 dark:text-gray-100 font-semibold block mb-1">Frontend Development</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">React, Vite, HTML, CSS, JavaScript</span>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
          <div>
            <span className="text-gray-900 dark:text-gray-100 font-semibold block mb-1">Backend Development</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">Node.js, Express, PHP</span>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
          <div>
            <span className="text-gray-900 dark:text-gray-100 font-semibold block mb-1">Databases & Tools</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">MongoDB, MySQL, Git</span>
          </div>
        </li>
      </ul>
    ),
    experience: (
      <ul className="space-y-4">
        <li className="p-5 bg-white dark:bg-darker border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-1 block">Internship</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold block text-lg mb-1">Web Development Intern</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm block">Ewenet Communication PLC</span>
        </li>
      </ul>
    ),
    education: (
      <ul className="space-y-4">
        <li className="p-5 bg-white dark:bg-darker border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-1 block">BSc Degree (CGPA 3.55)</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold block text-lg mb-1">Computer Science</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm block">Bahir Dar University (Class of 2026)</span>
        </li>
        <li className="p-5 bg-white dark:bg-darker border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-1 block">BA Degree</span>
          <span className="text-gray-900 dark:text-gray-100 font-semibold block text-lg mb-1">Accounting and Finance</span>
          <span className="text-gray-600 dark:text-gray-400 text-sm block">Ambassador College (Class of 2026)</span>
        </li>
      </ul>
    )
  };

  return (
    <div id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-[10%] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:w-5/12"
          >
            <div>
              <img src={aboutImg} alt="About Me" loading="lazy" className="w-full h-auto rounded-[2rem] relative z-10" style={{ imageRendering: 'high-quality' }} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Discover</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg">
              I’m a recent Computer Science graduate (Class of 2026, 3.55 CGPA) from Bahir Dar University and a Full-Stack Developer, passionate about building scalable and user-focused web applications.
              <br/><br/>
              I work primarily with modern technologies like React, Node.js, and MongoDB to create efficient and reliable systems. From developing an E-Commerce platform, tour and travel website to an Internship Management System for my final year project, I enjoy turning ideas into real, working products.
              <br /><br />
              I’m especially interested in solving real-world problems through clean code, intuitive design, and continuous learning and I’m always looking for opportunities to contribute to meaningful projects and grow as a developer.
            </p>
              
      
            

            <div className="bg-light-card dark:bg-dark-card p-2 rounded-full inline-flex mb-10 overflow-hidden shadow-inner border border-gray-200/50 dark:border-white/5">
              {tabs.map((tab) => (
                <button 
                  key={tab.id}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? 'bg-white dark:bg-darker text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-white/10' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabContents[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
