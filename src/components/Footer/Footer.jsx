import React from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        {/* Name */}
        <h2 className='text-xl font-semibold text-teal-500'>
          Sai Keerthana Todupunoori
        </h2>

        {/* Nav Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-teal-500 text-sm sm:text-base my-1 transition-colors'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/saikeerthanat" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/sai_keerthana_26/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-teal-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          © 2025 Sai Keerthana Todupunoori. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
