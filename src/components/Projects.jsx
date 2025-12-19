import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import prescriptoImg from '../assets/prescripto.png';
import ecommerceImg from '../assets/ecommerce.png';

const Projects = () => {
  const projects = [
    {
      title: 'Prescripto – MERN Stack Project',
      role: 'Full Stack Developer',
      image: prescriptoImg,
      description: 'Developed a full-stack MERN web application for online doctor appointment booking and prescription management. Implemented JWT-based authentication with role-based access for Admin, Doctor, and Patient.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      features: [
        'Role-based access (Admin, Doctor, Patient)',
        'Secure JWT Authentication',
        'Built RESTful APIs using Node.js & Express',
        'Integrated MongoDB for secure storage'
      ],
      links: {
        demo: 'https://prescriptos-frontend.vercel.app/',
        github: 'https://github.com/Parehharsh/Prescripto-Mern.git'
      }
    },
    {
      title: 'E-Commerce Web Application – MERN Stack',
      role: 'Full Stack Developer',
      image: ecommerceImg,
      description: 'Developed a full-stack MERN e-commerce web application with product listing and user management features. Implemented user authentication and authorization using JWT.',
      tech: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'User authentication using JWT',
        'RESTful APIs for products/users/orders',
        'Efficient MongoDB data storage',
        'Responsive React frontend'
      ],
      links: {
        demo: '',
        github: 'https://github.com/Parehharsh/full-stack-Ecommerce.git'
      }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my expertise in full-stack development through real-world applications.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/10 border border-gray-100 dark:border-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <a href={project.links.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-all">
                        <Github size={24} />
                      </a>
                      <a href={project.links.demo} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-all">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
                  {project.role}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        <ChevronRight size={14} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-8 flex gap-8">
                  <a 
                    href={project.links.demo} 
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all underline-offset-8"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.links.github} 
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-500 font-bold hover:text-gray-900 dark:hover:text-white transition-all"
                  >
                    Source Code <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
