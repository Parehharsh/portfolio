import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/Parehharsh' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/harsh-parekh-a3399a251/' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/parekh_shab24/?utm_source=qr&igsh=MTAyMzlrejdyOWMybA%3D%3D#' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:parekhharsh662@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },  
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Harsh<span className="text-blue-600">.dev</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xs">
              MERN Stack Developer passionate about building high-quality web applications 
              with seamless user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Mail size={16} className="text-blue-600" />
                parekhharsh662@gmail.com
              </p>
              <div className="pt-4">
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 font-medium">LATEST UPDATE</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Harsh Parekh. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
