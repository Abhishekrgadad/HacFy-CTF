import React from 'react';
import { Shield, Users, Trophy, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cyber-box p-8 relative">
          <h2 className="text-3xl font-cyber text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#dbff3d] to-[#dbff3d]">
            About Xploit Xcape
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-cyan-400 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Challenge Yourself
              </h3>
              <p className="text-gray-300">
                Immerse yourself in real-world cybersecurity challenges spanning web exploitation,
                cryptography, reverse engineering, and digital forensics.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-cyan-400 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Connect & Learn
              </h3>
              <p className="text-gray-300">
                Network with industry experts, like-minded hackers, and potential employers
                in this intensive 24-hour competition.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-cyan-400 mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Win Big
              </h3>
              <p className="text-gray-300">
                Compete for substantial cash prizes, exclusive swag, and recognition in
                the cybersecurity community.
              </p>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-cyber text-cyan-400 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Launch Your Career
              </h3>
              <p className="text-gray-300">
                Get noticed by top companies with on-the-spot hiring opportunities and
                direct interaction with industry recruiters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;