import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    experience: "beginner",
  });

  const [players, setPlayers] = useState<{ name: string; email: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, players });
  };

  const handleAddPlayer = () => {
    if (players.length < 5) {
      setPlayers([...players, { name: "", email: "" }]);
    } else {
      alert("Maximum 5 players allowed.");
    }
  };

  const handleRemovePlayer = (index: number) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  const handlePlayerChange = (index: number, field: string, value: string) => {
    const updatedPlayers = players.map((player, i) =>
      i === index ? { ...player, [field]: value } : player
    );
    setPlayers(updatedPlayers);
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="group">
          <label
            htmlFor="team"
            className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2"
          >
            Team Name
          </label>
          <input
            type="text"
            id="team"
            value={formData.team}
            onChange={(e) => handleFormChange("team", e.target.value)}
            className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
            required
          />
        </div>

        <div className="group">
          <label
            htmlFor="name"
            className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2"
          >
            Team Leader Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleFormChange("name", e.target.value)}
            className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
            required
          />
        </div>

        <div className="group">
          <label
            htmlFor="email"
            className="block text-[#bdff3d] font-cyber text-sm md:text-base mb-2"
          >
            Leader Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleFormChange("email", e.target.value)}
            className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
            required
          />
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <h3 className="text-[#bdff3d] font-cyber text-lg md:text-xl mb-4">
          Team Players
        </h3>
        {players.map((player, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4"
          >
            <input
              type="text"
              placeholder="Player Name"
              value={player.name}
              onChange={(e) =>
                handlePlayerChange(index, "name", e.target.value)
              }
              className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Player Email"
              value={player.email}
              onChange={(e) =>
                handlePlayerChange(index, "email", e.target.value)
              }
              className="w-full bg-black/50 border-2 border-cyan-500/30 rounded-lg p-2 md:p-3 text-sm md:text-base text-gray-300"
              required
            />
            <button
              type="button"
              onClick={() => handleRemovePlayer(index)}
              className="w-20 h-10 text-sm md:text-md font-bold  mt-3
              border-2 border-[#bdff3d] text-[#bdff3d] rounded-lg
              hover:bg-[#bdff3d] hover:text-black transition-all duration-300"
          >
            remove
             
            </button>
          </div>
        ))}
        {players.length < 5 && (
          <button
            type="button"
            onClick={handleAddPlayer}
            className="px-3 py-2 text-sm md:text-md font-bold p
              border-2 border-[#bdff3d] text-[#bdff3d] rounded-lg
              hover:bg-[#bdff3d] hover:text-black transition-all duration-300"
          >
            Add Player
          </button>
        )}
      </div>

        <div className="ml-2">
        <input type="checkbox"/>
            <label htmlFor="checkbox" className="text-[#bdff3d] ml-3">Accomodation</label>
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
  );
};
