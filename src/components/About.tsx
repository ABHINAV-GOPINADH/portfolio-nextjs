const About = () => {
    return (
      <section className="py-20 px-8 bg-[#2d0452] text-white" id="about">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">About Me</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed">
          <p className="mb-6">
            Passionate about graphic design and frontend development, I combine creativity and technical skills to create impactful visual experiences.
            With a strong background in graphic design and expertise in web development, I create <span className="text-yellow-400 font-semibold">Aesthetic, Intuitive, & Responsive User Interfaces</span>.
          </p>
          <p className="mb-6">
            My user-centered approach allows me to design captivating visuals and provide an optimal user experience. Continuously seeking the latest trends,
            <span className="text-yellow-400 font-semibold"> I enjoy taking on new challenges</span> and collaborating with clients to bring their ideas to life through high-quality graphic design and web experiences.
          </p>
        </div>
  
        {/* Tools/Skills section */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "Ai", "Ps", "Id", "Dn",
            "Ae", "Xd", "Pdf", "Lr",
            "Html", "Css", "Js", "Wp"
          ].map((tool, index) => (
            <div key={index} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
              {tool}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default About;
  