import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  // const [isMuted, setIsMuted] = useState(true);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Event Details', href: '#event-details' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png"
              alt="Xploit  Logo" 
              className="h-8 md:h-10 w-auto"
            />
            <h1 className="text-2xl md:text-3xl font-cyber text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
              
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#dbff3d] transition-all duration-300 text-sm uppercase tracking-wider font-medium hover:scale-110 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            <a
              onClick={()=>{
                navigate("/register")
              }}
              className="bg-[#dbff3d] text-black px-3 py-1.5 rounded-md hover:bg-[#c2e635] transition-all duration-300 text-xs uppercase tracking-wider font-medium hover:scale-110 hover:shadow-[0_0_15px_rgba(219,255,61,0.5)] cursor-pointer"
            >
              Register Now
            </a>
            {/* <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button> */}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:pl-6 hover:bg-cyan-400/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;