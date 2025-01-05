import { Form } from "./Form";

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
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;