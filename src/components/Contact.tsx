import { Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/95 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber text-center mb-12 text-[#bdff3d] animate-pulse">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-box p-8 relative overflow-hidden bg-gradient-to-br from-black via-purple-900/10 to-black border-2 border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
            
            <h3 className="text-xl font-cyber text-[#bdff3d] mb-6 relative">
              Get in Touch
              <span className="block h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2"></span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-900/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-purple-400" />
                <a href="mailto:info@xploitxcape.com" className="text-gray-300 hover:text-[#bdff3d] transition-colors duration-300">
                  info@hacfy.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-900/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-purple-400" />
                <a href="tel:+918660767853" className="text-gray-300 hover:text-[#bdff3d] transition-colors duration-300">
                  +918660767853
                </a>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-900/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">Virtual & Physical Event</span>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-900/20 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                <a 
                  href="https://wa.me/918660767853" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-[#bdff3d] transition-colors duration-300"
                >
                  Chat with us on WhatsApp
                </a>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-900/20 transition-colors duration-300">
                <Globe className="w-6 h-6 text-purple-400" />
                <div className="text-gray-300">
                  <a href="http://www.aiet.org.in" className="hover:text-[#bdff3d] block transition-colors duration-300">www.aiet.org.in</a>
                  <a href="http://www.hacfy.com" className="hover:text-[#bdff3d] block transition-colors duration-300">www.hacfy.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-box p-8 relative overflow-hidden bg-gradient-to-br from-black via-purple-900/10 to-black border-2 border-purple-500/30 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
            
            <h3 className="text-xl font-cyber text-[#bdff3d] mb-6 relative">
              Quick Message
              <span className="block h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2"></span>
            </h3>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/50 border-2 border-purple-500/30 rounded-lg p-3 text-gray-300 
                focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 
                hover:border-purple-400/50 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/50 border-2 border-purple-500/30 rounded-lg p-3 text-gray-300 
                focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 
                hover:border-purple-400/50 transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-black/50 border-2 border-purple-500/30 rounded-lg p-3 text-gray-300 
                focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 
                hover:border-purple-400/50 transition-all duration-300"
              ></textarea>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 text-lg font-bold border-2 
                border-[#bdff3d] text-[#bdff3d] rounded-lg bg-black/50
                hover:bg-[#bdff3d] hover:text-black transform hover:scale-105 
                transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;