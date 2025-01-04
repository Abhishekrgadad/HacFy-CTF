const Speakers = () => {
    const partners = [
      {
        name: "Niels Hoekman",
        logo: "./Niels.jpg",
        designation: "Senior Security Consultant",
        company: "Ex Palo Alto",
        linkedin: "https://www.linkedin.com/in/nielshoekman/"
      },
      {
        name: "Pradeep Rao",
        logo: "./Pradeep Rao.jpg",
        designation: "Director and Chief Architect",
        company: "Kyndryl",
        linkedin: "https://www.linkedin.com/in/rao-pradeep/"
      },
      {
        name: "Munish Sidana",
        logo: "./Munish Sidana.jpg",
        designation: "Head of Information Security",
        company: "Rhenus Logistics",
        linkedin: "https://www.linkedin.com/in/munish-cissp/"
      },
      {
        name: "Prasad Anumula",
        logo: "./Prasad Anumula.jpg",
        designation: "Founder & Director",
        company: "RGESIndia",
        linkedin: "https://www.linkedin.com/in/prasad-anumula/"
      },
    ];
  
    return (
      <section className="py-12 md:py-20 bg-black/95 relative">
        <div className="max-w-[90%] w-[1200px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber text-center mb-8 md:mb-12 text-[#bdff3d] font-bold">
            Our Speakers
            <span className="block h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 mt-3 md:mt-4"></span>
          </h2>
  
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {partners.map((partner, index) => (
                <a
                  href={partner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="group relative transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4 rounded-lg bg-black/50 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                  <div className="mt-2 text-center space-y-1">
                    <span className="text-gray-400 group-hover:text-[#bdff3d] transition-colors duration-300 text-sm md:text-base font-semibold">
                      {partner.name}
                    </span>
                    <p className="text-gray-500 text-small md:text-sm">
                      {partner.designation}
                    </p>
                    <p className="text-white text-xs md:text-sm">
                      {partner.company}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Speakers; 
