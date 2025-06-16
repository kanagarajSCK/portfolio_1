import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="bg-black text-white py-20 text-center" id="home">
      <div className="flex flex-col items-center justify-center">
        <img
          src={"https://res.cloudinary.com/du2th3ih8/image/upload/v1707838298/IMG_20240112_190223_106_kwmk1s.jpg"}
          alt="Kanagaraj"
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Kanagaraj</h1>

        <TypeAnimation
          sequence={[
            'Full Stack Developer', 2000,
            'Ethical Hacker', 2000,
            'React.js Enthusiast', 2000,
            'Node.js Backend Expert', 2000,
            'Freelancer & Tech Mentor', 2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl mb-8 text-green-400"
          repeat={Infinity}
        />

        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/file/d/19lJt27jKo4ShONzSZ6ynrcU5IJY0LjfA/view?usp=sharing"
          download
          className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full hover:scale-105 transition-transform animate-pulse text-white font-semibold"
        >
          <FaDownload />
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-8 text-2xl">
          <a href="https://www.linkedin.com/in/kanagarajsck/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
