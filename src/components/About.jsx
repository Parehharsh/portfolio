import React from 'react';
import { BookOpen, Code, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My journey from Commerce to Code. I combine financial acumen with technical expertise to build 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> business-centric solutions</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Education Section */}
          <div className="space-y-10 group">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <GraduationCap className="text-blue-600 dark:text-blue-400" /> 
              </div>
              Education
            </h3>
            
            <div className="relative border-l-2 border-blue-200 dark:border-gray-800 pl-8 ml-4 space-y-12">
              <div className="relative group/item">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-blue-600 shadow-xl transition-transform group-hover/item:scale-125"></span>
                <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">MBA in Finance (Pursuing)</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">Andhra University • 2024 - 2026</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Currently in 3rd Semester. Merging technological prowess with deep financial 
                    strategies to architect superior fintech solutions.
                  </p>
                </div>
              </div>

              <div className="relative group/item">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-blue-400 shadow-xl transition-transform group-hover/item:scale-125"></span>
                <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Commerce (B.Com)</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">Sahjanand Vanijya Mahavidhyalay • 2024</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Foundation in business logic, accounting, and organizational management, providing 
                    a solid structural mindset for software architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Focus */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Code className="text-indigo-600 dark:text-indigo-400" /> 
              </div>
              Career Focus
            </h3>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-premium hover:shadow-premium-hover transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                As a <span className="font-bold text-blue-600 dark:text-blue-400">MERN Stack Developer</span>, I specialize in building full-stack web applications that are scalable, secure, and user-centric. 
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                My background in finance gives me a unique perspective on business logic, allowing me to understand not just <em className="text-indigo-600 dark:text-indigo-400 not-italic font-semibold">how</em> to code, but <em className="text-indigo-600 dark:text-indigo-400 not-italic font-semibold">why</em> we are building it.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Frontend Development', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
                  { label: 'Backend Architecture', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
                  { label: 'Database Design', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
                  { label: 'Cloud Optimization', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
                ].map((item, idx) => (
                  <div key={idx} className={`${item.color} p-4 rounded-xl font-bold text-xs text-center uppercase tracking-wider border border-transparent hover:border-current transition-all cursor-default`}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/10 rounded-full filter blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default About;
