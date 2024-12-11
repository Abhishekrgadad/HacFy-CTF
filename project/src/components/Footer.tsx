import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-cyber text-cyan-400 mb-4">Xploit Xcape</h3>
            <p className="text-gray-300 mb-4">
              Join the ultimate cybersecurity challenge and prove your skills in this
              24-hour national level CTF competition.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Facebook} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-cyber text-purple-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#event-details">Event Details</FooterLink>
              <FooterLink href="#prizes">Prizes</FooterLink>
              <FooterLink href="#sponsors">Sponsors</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-cyber text-purple-400 mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#registration">Register</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="http://www.aiet.org.in">AIET</FooterLink>
              <FooterLink href="http://www.hacfy.com">Hacfy</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Xploit Xcape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-300 hover:text-cyan-400 transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;