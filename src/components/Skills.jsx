import React from 'react';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Redux'],
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-700'
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8 text-green-500" />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware'],
      bg: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-700'
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      skills: ['MongoDB', 'Mongoose', 'Data Modeling', 'Aggregation Pipelines'],
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-700'
    },
    {
      title: 'Tools & Version Control',
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel Deployment'],
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      text: 'text-orange-700'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolset for building robust and scalable full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 shadow-sm hover:shadow-premium-hover transition-all duration-500 border border-gray-100 dark:border-gray-800 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl ${category.bg} dark:${category.bg.replace('50', '900/40')} flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400 font-medium">
                    <span className={`w-2 h-2 rounded-full mr-3 ${category.bg.replace('bg-', 'bg-').replace('50', '500')}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
