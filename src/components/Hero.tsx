'use client';
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-fuchsia-900 text-white relative overflow-hidden">
      <motion.div 
        className="max-w-xl space-y-6 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg">Hello, My name is</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        <span className="text-yellow-400 font-extrabold" style={{ color: "#facc15" }}>
          ABHINAV GOPINADH
        </span>
        </h1>



        <h2 className="text-xl md:text-2xl font-medium text-indigo-200">
          I&#39;m a Software Developer &amp; AI Engineer.
        </h2>
        <div className="flex gap-4 mt-6">
          <a
            href="/ABHINAV_K_G.pdf"
            download
            className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-yellow-400 text-yellow-400 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Let’s talk
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 md:mt-0 md:ml-12 mr-10" // Added mr-10 for right space
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src="/abhinav_emoji.jpg"
          alt="Emoji"
          className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl z-10" // Increased size
        />
      </motion.div>


      {/* Optional: animated gradient blur background (optional but cool) */}
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_left,_#ff00cc,_transparent)] top-[-100px] left-[-100px] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#00ffff,_transparent)] bottom-[-100px] right-[-100px] rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Hero;
