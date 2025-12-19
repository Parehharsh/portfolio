import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Interested in working together or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-premium">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                    <a href="mailto:parekhharsh662@gmail.com" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      parekhharsh662@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</h4>
                    <a href="tel:+918155042054" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      +91 8155042054
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ahmedabad, Gujarat – 382220
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">Available for Projects</h4>
              <p className="text-blue-100 mb-6 relative z-10">I am currently available for freelance projects and full-time opportunities.</p>
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-bold">Active & Ready</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 p-10 lg:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-premium relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <User size={16} /> FULL NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white text-lg"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <AtSign size={16} /> EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <MessageSquare size={16} /> YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white text-lg resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-700"
                >
                  <span className="flex items-center gap-3">
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/5 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-600/5 rounded-full filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Contact;
