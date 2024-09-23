import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TravelPartners from './components/TravelPartners';
import ServicesSection from './components/ServicesSection';
import TopDestinationSection from './components/TopDestinationSection';
import TravelPointsSection from './components/TravelPointsSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <TravelPartners/>
        <ServicesSection />
        <TopDestinationSection />
        <TravelPointsSection/>
        <KeyFeaturesSection/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

