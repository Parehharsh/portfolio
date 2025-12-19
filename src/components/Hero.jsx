import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs tracking-widest uppercase border border-blue-100 dark:border-blue-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              MERN Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Parekh Harsh Babubhai
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
              I am a passionate <span className="font-bold text-gray-900 dark:text-white">MERN Stack Developer</span> dedicated to building modern, scalable, and high-performance web applications with seamless user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Me <ArrowRight size={20} />
              </a>
              
              <a 
                href="https://drive.google.com/file/d/1p38B0eb6SAP6r7N8fjhCeZuZTN2WJKRr/view?usp=sharing" 
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-bold rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Download Resume <Download size={20} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              {[
                { icon: <Github size={24} />, href: 'https://github.com/Parehharsh', color: 'hover:text-gray-900 dark:hover:text-white' },
                { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/harsh-parekh-a3399a251/', color: 'hover:text-blue-600' },
                { icon: <Mail size={24} />, href: 'mailto:parekhharsh662@gmail.com', color: 'hover:text-red-500' }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className={`text-gray-400 dark:text-gray-600 transition-all duration-300 transform hover:scale-125 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 dark:shadow-none border-8 border-white dark:border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <img 
                src={profileImg} 
                alt="Parekh Harsh Babubhai" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
