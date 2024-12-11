import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/95 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-box p-8">
            <h3 className="text-xl font-cyber text-cyan-400 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <a href="mailto:info@xploitxcape.com" className="text-gray-300 hover:text-cyan-400">
                  info@xploitxcape.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-cyan-400">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Virtual & Physical Event</span>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="w-6 h-6 text-purple-400" />
                <div className="text-gray-300">
                  <a href="http://www.aiet.org.in" className="hover:text-cyan-400 block">www.aiet.org.in</a>
                  <a href="http://www.hacfy.com" className="hover:text-cyan-400 block">www.hacfy.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-box p-8">
            <h3 className="text-xl font-cyber text-cyan-400 mb-6">Quick Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;