const Association = () => {
  const partners = [
    {
      name: "AIET",
      logo: "./sponsor2.png",
    },
    {
      name: "HacFy",
      logo: "./hacfy.png",
    },
    {
      name: "Alva's Cyber Security Club",
      logo: "./club.png",
    },
    {
      name: "Risk Guard",
      logo: "./riskguard.png",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-black/95 relative">
      <div className="max-w-[90%] w-[1200px] mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber text-center mb-8 md:mb-12 text-[#bdff3d] font-bold">
          In Association With
          <span className="block h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 mt-3 md:mt-4"></span>
        </h2>

        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4 rounded-lg bg-black/50 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-gray-400 group-hover:text-[#bdff3d] transition-colors duration-300 text-sm md:text-base">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Association; 