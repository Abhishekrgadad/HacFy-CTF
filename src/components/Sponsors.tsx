import React from 'react';

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: 'Platinum Sponsors',
      logos: [
        'https://via.placeholder.com/200x100/1e293b/38bdf8?text=Sponsor+1',
        'https://via.placeholder.com/200x100/1e293b/38bdf8?text=Sponsor+2',
      ],
    },
    {
      tier: 'Gold Sponsors',
      logos: [
        'https://via.placeholder.com/150x75/1e293b/38bdf8?text=Sponsor+3',
        'https://via.placeholder.com/150x75/1e293b/38bdf8?text=Sponsor+4',
        'https://via.placeholder.com/150x75/1e293b/38bdf8?text=Sponsor+5',
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-black/95 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Our Sponsors
        </h2>

        {sponsorTiers.map((tier, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-cyber text-cyan-400 text-center mb-6">{tier.tier}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tier.logos.map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="cyber-card p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img src={logo} alt={`Sponsor ${logoIndex + 1}`} className="max-w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="cyber-box p-8 text-center mt-12">
          <h3 className="text-2xl font-cyber text-purple-400 mb-4">Become a Sponsor</h3>
          <p className="text-gray-300 mb-6">
            Join us in shaping the future of cybersecurity. Partner with Xploit Xcape and connect
            with top talent.
          </p>
          <a
            href="mailto:sponsors@xploitxcape.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
          >
            Get Sponsorship Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;