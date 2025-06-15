// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', id: 'home' },
//     { label: 'About Me', id: 'about' },
//     { label: 'Services', id: 'service' },
//     { label: 'Projects', id: 'project' },
//     { label: 'Contact', id: 'contact' },
//   ];

//   return (
//     <nav className="bg-black text-white px-6 py-4 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
//       <div className="flex justify-between items-center">
//         <div className="text-2xl font-bold cursor-pointer">
//           <Link to="home" smooth={true} duration={500}>Yousof</Link>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-8 items-center">
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               to={item.id}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               className="cursor-pointer relative group transition duration-300 hover:text-green-400"
//             >
//               {item.label}
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-4 text-center bg-gray-900 py-4 rounded">
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               to={item.id}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               onClick={() => setIsOpen(false)}
//               className="block cursor-pointer hover:text-green-400 transition duration-300"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about' },
    { label: 'Services', id: 'service' },
    { label: 'Projects', id: 'project' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-black text-white px-6 py-4 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center">
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          Yousof
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="cursor-pointer relative group transition duration-300 hover:text-green-400"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center bg-gray-900 py-4 rounded">
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block cursor-pointer hover:text-green-400 transition duration-300"
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
