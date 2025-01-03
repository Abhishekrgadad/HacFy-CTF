import { Trophy, Award, Gift, Code, Lightbulb, Users, Star } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      icon: Trophy,
      position: '1st Place',
      // prize: '₹1,00,000',
      extras: ['Job Opportunities', 'Premium Swag Kit', 'Certification'],
      gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
    },
    {
      icon: Award,
      position: '2nd Place',
      // prize: '₹50,000',
      extras: ['Internship Opportunities', 'Swag Kit', 'Certification'],
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
    },
    {
      icon: Gift,
      position: '3rd Place',
      // prize: '₹25,000',
      extras: ['Mentorship Program', 'Swag Kit', 'Certification'],
      gradient: 'from-amber-600 via-amber-700 to-amber-800',
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-[#bdff3d]">
          Prizes & Rewards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="cyber-card p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${prize.gradient} mb-6`}>
                  <prize.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-cyber text-[#bdff3d] mb-2">{prize.position}</h3>
                <ul className="space-y-2 font-bold font">
                  {prize.extras.map((extra, i) => (
                    <li key={i} className="text-gray-300 text-sm">{extra}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 cyber-box p-8 text-center">
          <h3 className="text-xl font-cyber text-[#bdff3d] mb-4 font-bold">Special Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Best Solo Hacker',
                description: 'Outstanding Individual Performance',
                icon: Code,
              },
              {
                title: 'Most Innovative Solution',
                description: 'Breaking New Ground',
                icon: Lightbulb,
              },
              {
                title: 'Best Team Spirit',
                description: 'Exceptional Collaboration',
                icon: Users,
              },
              {
                title: 'Rising Star',
                description: 'Emerging Talent',
                icon: Star,
              }
            ].map((award, index) => (
              <div 
                key={index} 
                className="cyber-card p-6 hover:bg-opacity-80 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#bdff3d] bg-opacity-20 flex items-center justify-center">
                    <award.icon className="w-6 h-6 text-[#bdff3d]" />
                  </div>
                  <h4 className="text-[#bdff3d] font-cyber text-lg">{award.title}</h4>
                  <p className="text-gray-400 text-sm">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;