import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import clockImg from '../assets/Screenshot 2025-04-14 162018.png';
import calcImg from '../assets/Screenshot 2026-05-05 154956.png';
import rpsImg from '../assets/Screenshot 2025-04-14 162532.png';
import weatherImg from '../assets/Screenshot 2025-04-14 163007.png';
import electionImg from '../assets/Screenshot 2026-05-05 161323.png';
import tourImg from '../assets/photo_2025-12-09_21-14-43.jpg';
import netflixImg from '../assets/netflix.png';

const projects = [
  {
    title: 'Tour and Travel Booking',
    description: 'A comprehensive travel platform allowing users to explore destinations and book tours securely. Features JWT authentication, encrypted passwords, and Cloudinary media management.',
    image: tourImg,
    link: 'https://kasopiaethiopiatour.com/',
    github: 'https://github.com/Mesfin-Getahun/Kasopia-tour-and-travel.git',
    tags: ['React.js', 'Node/Express', 'MySQL', 'JWT', 'Cloudinary', 'Bcrypt']
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A classic Tic Tac Toe game featuring interactive UI, score tracking, and responsive design.',
    image: clockImg,
    link: 'https://tic-tac-toe-game-in-react-topaz.vercel.app/',
    github: 'https://github.com/Mesfin-Getahun/Tic-Tac-Toe-Game-In-React.git',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Netflix Clone',
    description: 'A robust streaming platform clone featuring real-time movie data from TMDB API, secure Firebase authentication, and a fully responsive media-rich interface built for performance.',
    image: netflixImg,
    link: 'https://netflix-clone-two-coral.vercel.app/', /* Add your live link here */
    github: 'https://github.com/Mesfin-Getahun/Netflix-Clone.git', 
    tags: ['React', 'Firebase', 'TMDB API', 'Vite']
  },
  {
    title: 'Weather App',
    description: 'A responsive weather dashboard providing real-time forecasts, interactive maps, and detailed climate data using robust external APIs.',
    image: rpsImg,
    link: 'https://mgsweatherapp.netlify.app/',
    github: 'https://github.com/Mesfin-Getahun/Weather-App-with-Open-Weather-API-in-React.git',
    tags: ['OpenWeather API', 'JavaScript', 'React', 'Custom CSS']
  },
  {
    title: 'Rock Paper Scissors',
    description: 'A fun and interactive web-based Rock Paper Scissors game featuring smooth animations and real-time score keeping.',
    image: weatherImg,
    link: 'https://mgrockpaperscissorgame.netlify.app/',
    github: 'https://github.com/Mesfin-Getahun/Rock-Paper-Scissor-Game.git',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Smart Attendance System',
    description: 'An intelligent attendance tracking system that leverages YOLOv8 and OpenCV for real-time face detection and recognition, with a Tkinter GUI and local file-based storage.',
    image: electionImg,
    link: '#', 
    github: 'https://github.com/Mesfin-Getahun/Smart-Attendance-using-Face-detection-and-Recognition.git',
    tags: ['Python', 'Tkinter', 'OpenCV', 'YOLOv8', 'NumPy']
  }
];

const PortfolioWork = () => {
  return (
    <div id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-5 md:px-[10%]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2"
          >
            Portfolio
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              {project.link && project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-video overflow-hidden border-b border-gray-100 dark:border-white/5 flex items-center justify-center bg-white dark:bg-white cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              ) : (
                <div className="relative aspect-video overflow-hidden border-b border-gray-100 dark:border-white/5 flex items-center justify-center bg-white dark:bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4 gap-4">
                  {project.link && project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group-hover:text-primary transition-colors"
                    >
                      <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="font-bold text-2xl text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  )}

                  <div className="flex gap-3 mt-1 shrink-0">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        title="Source Code"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:scale-110 transition-all duration-300"
                      >
                        <FaGithub className="text-[22px]" />
                      </a>
                    )}
                    {project.link && project.link !== '' && project.link !== '#' && (
                      <a
                        href={project.link}
                        title="Live Demo"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary hover:scale-110 transition-all duration-300"
                      >
                        <FaArrowUpRightFromSquare className="text-[20px]" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-[15px] mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[13px] font-medium px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-100 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Mesfin-Getahun"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
          >
            <FaGithub className="text-xl" />
            View More Projects in Github
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioWork;
