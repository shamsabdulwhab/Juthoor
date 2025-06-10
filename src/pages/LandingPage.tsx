import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Hero from '../components/Hero'; // Import the Hero component
import About from '../components/About'; // Import the About component
import Services from '../components/Services'; // Import the Services component
import Testimonials from '../components/Testimonials'; // Import the Testimonials component
import Clients from '../components/Clients'; // Import the Clients component
import Footer from '../components/Footer'; // Import the Footer component
// Import other components here as they are created

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar /> {/* Render the Navbar component */}
      <Hero /> {/* Render the Hero component */}
      <About /> {/* Render the About component */}
      <Services /> {/* Render the Services component */}
      <Testimonials /> {/* Render the Testimonials component */}
      <Clients /> {/* Render the Clients component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default LandingPage; 