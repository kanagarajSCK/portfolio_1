import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          About Me
        </h2>

        <div
          className="flex flex-col md:flex-row items-center md:space-x-12"
          data-aos="fade-right"
        >
          <img
            src={AboutImage}
            alt="About Kanagaraj"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            data-aos="zoom-in"
          />

          <div className="flex-1" data-aos="fade-left">
            {/* <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p> */}
            <p className="text-lg mb-8">
              At <strong>NxtWave’s CCBP 4.0 Academy</strong>, I’m currently
              mastering MERN Stack development, specializing in 4.0
              technologies. Passionate about coding challenges and hands-on
              projects, I thrive in solving complex problems and building
              real-world applications. With the industry’s first-ever{" "}
              <strong>IRC 4.0 certification</strong>, I'm gearing up to take on
              exciting challenges in the tech world.
            </p>

            <div className="space-y-4">
              <div className="flex items-center" data-aos="fade-up">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
            </div>

            <div
              className="mt-12 flex justify-between text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
