import React from 'react';
import { Shield, Code } from 'lucide-react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Shield className="w-8 h-8 text-cyan-400" />
        <Code className="w-4 h-4 text-[#dbff3d] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="ml-2 font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#dbff3d]">
        Xploit Xcape
      </span>
    </div>
  );
}

export default Logo;