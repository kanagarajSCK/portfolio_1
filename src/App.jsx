// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Projects from './components/Projects';
// import Service from './components/Service';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <section id="about"><About /></section>
//       <section id="service"><Service /></section>
//       <section id="project"><Projects /></section>
//       <section id="contact"><Contact /></section>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
