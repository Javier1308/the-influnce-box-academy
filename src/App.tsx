import { useState } from 'react';
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
import SelectorScreen from './components/sections/SelectorScreen';
import HeroB2B from './components/sections/b2b/HeroB2B';
import RoiCards from './components/sections/b2b/RoiCards';
import Differentiators from './components/sections/b2b/Differentiators';
import PackagesB2B from './components/sections/b2b/PackagesB2B';
import CurriculumB2B from './components/sections/b2b/CurriculumB2B';
import FinalCtaB2B from './components/sections/b2b/FinalCtaB2B';

export type AppMode = 'selector' | 'b2c' | 'b2b';

function App() {
  const [mode, setMode] = useState<AppMode>('selector');

  if (mode === 'selector') {
    return <SelectorScreen onSelect={setMode} />;
  }

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light flex flex-col">
      <Navbar
        mode={mode as 'b2c' | 'b2b'}
        onSwitchMode={setMode}
        onGoHome={() => setMode('selector')}
      />
      <main className="flex-1">
        {mode === 'b2c' ? (
          <>
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
          </>
        ) : (
          <>
            <HeroB2B />
            <RoiCards />
            <SocialProof />
            <LinkedInProof />
            <Differentiators />
            <PackagesB2B />
            <CurriculumB2B />
            <AboutCialdini />
            <Certification />
            <AboutCoach />
            <FinalCtaB2B />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
