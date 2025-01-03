const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: 'Platinum Sponsors',
      logos: [
        '/sponsor1.png',
        '/sponsor2.png',
        '/sponsor1.png',
        '/sponsor2.png',
      ],
    },
    {
      tier: 'Gold Sponsors',
      logos: [
        '/sponsor1.png',
        '/sponsor2.png',
        '/sponsor1.png',
        '/sponsor2.png',
      ],
    },
    {
      tier: 'Silver Sponsors',
      logos: [
        '/sponsor1.png',
        '/sponsor2.png',
        '/sponsor1.png',
        '/sponsor2.png',
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-black/95 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber font-bold text-center mb-12 text-transparent bg-clip-text text-[#bdff3d]">
          Our Sponsors
        </h2>

        {sponsorTiers.map((tier, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-cyber text-[#bdff3d] text-center mb-6">{tier.tier}</h3>
            <div className="relative">
              <div className="sponsor-marquee flex items-center animate-marquee space-x-8 group hover:[animation-play-state:paused]">
                {tier.logos.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                    className="p-4 flex items-center justify-center w-[200px] shrink-0"
                  >
                    <img 
                      src={logo} 
                      alt={`Sponsor ${logoIndex + 1}`} 
                      className="w-[150px] h-[150px] object-contain" 
                    />
                  </div>
                ))}
                {/* Duplicate logos for seamless loop */}
                {tier.logos.map((logo, logoIndex) => (
                  <div
                    key={`duplicate-${logoIndex}`}
                    className="p-4 flex items-center justify-center w-[200px] shrink-0"
                  >
                    <img 
                      src={logo} 
                      alt={`Sponsor ${logoIndex + 1}`} 
                      className="w-[150px] h-[150px] object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
