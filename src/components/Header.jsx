import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa6';
import profileImg from '../assets/7N6A8042.JPG';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = ['Full-Stack Developer', 'Mobile App Developer', 'UI/UX Designer'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="header" className="w-full min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-dark/70 backdrop-blur-md shadow-sm dark:shadow-black/20 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-5 md:px-[10%]">
          <nav className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold tracking-tight"
            >
              <span className="text-primary">M</span>esfin <span className="text-primary">G</span>.
            </motion.h1>
            
            <div className="flex items-center gap-4 md:hidden">
              <button aria-label="Toggle Theme" onClick={toggleTheme} className="text-2xl focus:outline-none focus:text-primary transition-colors text-gray-800 dark:text-gray-200">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
              <button aria-label="Toggle Menu" onClick={toggleMenu} className="text-3xl focus:outline-none focus:text-primary transition-colors text-gray-800 dark:text-gray-200">
                ☰
              </button>
            </div>

            <ul className={`md:flex absolute md:relative top-full right-0 md:top-auto bg-white/95 dark:bg-dark/95 md:bg-transparent md:dark:bg-transparent w-full md:w-auto flex-col md:flex-row p-5 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'} items-center border-b border-gray-200 dark:border-white/5 md:border-none`}>
              {['header', 'about', 'services', 'portfolio', 'skills', 'contact'].map((item) => (
                <li key={item} className="my-3 md:my-0 md:mx-4 w-full md:w-auto text-center md:text-left">
                  <Link 
                    to={item} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider font-medium cursor-pointer hover:text-primary dark:hover:text-primary transition-colors inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item === 'header' ? 'Home' : item}
                  </Link>
                </li>
              ))}
              <li className="hidden md:block ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
                <button aria-label="Toggle Theme" onClick={toggleTheme} className="text-xl focus:outline-none hover:text-primary transition-colors text-gray-500 dark:text-gray-400 mt-1">
                  {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-5 md:px-[10%] pt-32 pb-20 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-gray-900 dark:text-white mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Mesfin Getahun</span>
            </h1>
            
            <div className="h-8 mb-6 flex items-center justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-primary dark:text-primary uppercase tracking-[0.2em] font-black"
                >
                  {titles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Crafting beautiful, responsive, and highly interactive user interfaces from Bahir Dar, Ethiopia.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer text-center"
              >
                Let's Talk
              </Link>
              <Link 
                to="portfolio" 
                smooth={true} 
                duration={500} 
                className="px-8 py-3.5 bg-white dark:bg-dark-card text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-full font-medium hover:border-primary dark:hover:border-primary transition-all cursor-pointer text-center"
              >
                View Work
              </Link>
              <a 
                href="/Mesfin_Getahun_CV.pdf" 
                download
                className="px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer flex items-center gap-2 justify-center"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center md:justify-end relative z-10"
          >
            <div className="relative">
              {/* Subtle animated border/glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-400 rounded-3xl blur-2xl opacity-20 dark:opacity-30 animate-pulse"></div>
              <img 
                src={profileImg} 
                alt="Mesfin Getahun" 
                className="w-full h-auto max-w-[400px] rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 relative z-10 border border-white/20 dark:border-white/10"
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
