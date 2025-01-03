import React, { useState } from 'react';

const neonBorderAnimation = `
  @keyframes simpleBorderGlow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(139, 92, 246, 0.3),
                  0 0 20px rgba(139, 92, 246, 0.2),
                  inset 0 0 10px rgba(139, 92, 246, 0.2);
    }
    50% {
      box-shadow: 0 0 15px rgba(34, 211, 238, 0.3),
                  0 0 30px rgba(34, 211, 238, 0.2),
                  inset 0 0 15px rgba(34, 211, 238, 0.2);
    }
  }
`;

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    experience: 'beginner',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <style>{neonBorderAnimation}</style>
      <section id="registration" className="py-12 md:py-20 bg-black relative">
        <div className="max-w-[90%] w-[1200px] mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber text-center mb-8 md:mb-12 text-[#bdff3d] font-bold">
            Join the Battle
            <span className="block h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 mt-3 md:mt-4"></span>
          </h2>

          <div className="cyber-box p-4 md:p-8 relative bg-black rounded-lg border-2 border-purple-500/50 animate-[simpleBorderGlow_4s_ease-in-out_infinite]">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2">
                    Hacker Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="team" className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2">
                    Team Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="team"
                    name="team"
                    className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
                  />
                </div>

                <div className="group">
                  <label htmlFor="experience" className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-lg font-bold 
                           border-2 border-[#bdff3d] text-[#bdff3d] rounded-lg
                           hover:bg-[#bdff3d] hover:text-black transition-all duration-300"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;