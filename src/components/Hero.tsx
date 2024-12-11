import { Shield, Lock, Code, Search, FileDown } from 'lucide-react';
import Timer from './Timer';

const Hero = () => {
  // Calculate the target date 60 days from now
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="src/assets/vedio4.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cyber font-bold mb-8">
          <span className="text-[#dbff3d]">
            <img src="src/assets/xploitpic.png" alt="Xploit Xcape Logo" className="inline h-[210px] w-auto mr-2.375rem" />
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 font-cyber font-bold">
          National Level 24-Hour CTF Hackathon
        </p>
        <div className="mb-12">
          <Timer targetDate={targetDate} />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Feature icon={Shield} text="Web Exploitation" />
          <Feature icon={Lock} text="Cryptography" />
          <Feature icon={Code} text="Reverse Engineering" />
          <Feature icon={Search} text="Digital Forensics" />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#registration"
            className="inline-block px-8 py-4 text-lg font-bold text-black bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg hover:from-cyan-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          >
            Join the Battle
          </a>
          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center px-8 py-4 text-lg font-bold border-2 border-[#dbff3d] text-[#dbff3d] rounded-lg hover:bg-[#dbff3d] hover:text-black transform hover:scale-105 transition-all duration-200"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Download Brochure
          </a>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-cyan-500 rounded-full animate-float-slow" style={{top: '20%', left: '10%'}}></div>
        <div className="absolute w-3 h-3 bg-purple-500 rounded-full animate-float-slower" style={{top: '60%', right: '20%'}}></div>
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{bottom: '20%', left: '30%'}}></div>
      </div>
    </div>
  );
};

const Feature = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center space-x-2 px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
    <Icon className="w-5 h-5 text-cyan-400" />
    <span className="text-gray-300">{text}</span>
  </div>
);

export default Hero;