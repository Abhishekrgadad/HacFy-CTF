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
      <section id="registration" className="py-20 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-cyber text-center mb-12 text-[#bdff3d] font-bold">
            Join the Battle
            <span className="block h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"></span>
          </h2>

          <div className="cyber-box p-8 relative bg-black rounded-lg
                        border-2 border-purple-500/50
                        animate-[simpleBorderGlow_4s_ease-in-out_infinite]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="cyber-card p-6 relative">
                <div className="space-y-4">
                  <div className="group">
                    <label htmlFor="name" className="block text-[#bdff3d] font-cyber mb-2 group-hover:text-cyan-400 transition-colors">
                      Hacker Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 
                      focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 
                      hover:border-cyan-400/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-[#bdff3d] font-cyber mb-2 group-hover:text-cyan-400 transition-colors">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 
                      focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 
                      hover:border-cyan-400/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="team" className="block text-[#bdff3d] font-cyber mb-2 group-hover:text-cyan-400 transition-colors">
                      Team Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="team"
                      name="team"
                      value={formData.team}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 
                      focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 
                      hover:border-cyan-400/50 transition-all duration-300"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="experience" className="block text-[#bdff3d] font-cyber mb-2 group-hover:text-cyan-400 transition-colors">
                      Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 
                      focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 
                      hover:border-cyan-400/50 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 text-lg font-bold relative overflow-hidden
                  border-2 border-[#dbff3d] text-[#dbff3d] rounded-lg group
                  hover:bg-[#dbff3d] hover:text-black transform hover:scale-105 
                  transition-all duration-300"
                >
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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