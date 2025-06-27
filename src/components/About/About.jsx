import React from 'react';
import Tilt from 'react-parallax-tilt';
import ProfileImage from '../../assets/PortfolioImage.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greetings */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Sai Keerthana Todupunoori
          </h2>

          {/* Skills Heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-500 leading-tight flex items-center">
            <span className="text-white mr-2">I am a</span>
            <span className="text-teal-500">
              <Typewriter
                words={['Full Stack Developer', 'App Developer', 'Coder']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About me Para */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I’m a software engineer with a strong foundation in full-stack development, problem-solving, and clean code practices.
            I enjoy building scalable applications, learning new technologies, and contributing to impactful, team-driven projects.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1PDmyAr_LGVso8-3fLatg1dTa-Bjj0-kq/view?usp=sharing"
            target="_blank"
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #14B8A6, #14B8A6)',
              boxShadow: '0 0 2px #14B8A6, 0 0 2px #14B8A6, 0 0 40px #14B8A6',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-teal-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImage}
              alt="Sai Keerthana Todupunoori"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(20,184,166,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
