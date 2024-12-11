import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: 'Date',
      content: 'March 15-16, 2024',
    },
    {
      icon: Clock,
      title: 'Duration',
      content: '24 Hours',
    },
    {
      icon: MapPin,
      title: 'Venue',
      content: 'Virtual & Physical Hybrid Event',
    },
    {
      icon: Users,
      title: 'Participants',
      content: '1000+ Hackers Expected',
    },
  ];

  return (
    <section id="event-details" className="py-20 bg-black/95 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Event Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="cyber-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <detail.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-cyber text-purple-400 mb-2">{detail.title}</h3>
                <p className="text-gray-300">{detail.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 cyber-box p-8">
          <h3 className="text-2xl font-cyber text-cyan-400 mb-6 text-center">
            Event Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card p-6">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Real-world cybersecurity challenges
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Live workshops with industry experts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Networking opportunities
                </li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  On-the-spot hiring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Mentorship sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Exclusive swag and certificates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;