import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhyInfluence from './components/sections/WhyInfluence';
import Benefits from './components/sections/Benefits';
import Services from './components/sections/Services';
import SevenPrinciples from './components/sections/SevenPrinciples';
import AboutCialdini from './components/sections/AboutCialdini';
import Certification from './components/sections/Certification';
import AboutCoach from './components/sections/AboutCoach';
import SocialProof from './components/sections/SocialProof';
import LinkedInProof from './components/sections/LinkedInProof';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyInfluence />
        <SocialProof />
        <Benefits />
        <LinkedInProof />
        <Services />
        <SevenPrinciples />
        <AboutCialdini />
        <Certification />
        <AboutCoach />
      </main>
      <Footer />
    </div>
  );
}

export default App;
