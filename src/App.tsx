import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import BitacoraDownloadSection from './components/sections/BitacoraDownloadSection';
import B2CFamiliarSituationSection from './components/sections/B2CFamiliarSituationSection';
import AboutInfluenceBoxSection from './components/sections/AboutInfluenceBoxSection';
import MissionVisionSection from './components/sections/MissionVisionSection';
import TargetAudienceMasterySection from './components/sections/TargetAudienceMasterySection';
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
import PainPointsB2B from './components/sections/b2b/PainPointsB2B';
import B2BTrainingSection from './components/sections/b2b/B2BTrainingSection';
import RoiCards from './components/sections/b2b/RoiCards';
import Differentiators from './components/sections/b2b/Differentiators';
import PackagesB2B from './components/sections/b2b/PackagesB2B';
import FinalCtaB2B from './components/sections/b2b/FinalCtaB2B';
import CertificationB2B from './components/sections/b2b/CertificationB2B';

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
            <BitacoraDownloadSection />
            <B2CFamiliarSituationSection />
            <WhyInfluence />
            <SocialProof />
            <Benefits />
            <LinkedInProof />
            <Services />
            <SevenPrinciples />
            <AboutCialdini />
            <Certification />
            <AboutCoach />
            <AboutInfluenceBoxSection />
            <MissionVisionSection />
            <TargetAudienceMasterySection />
          </>
        ) : (
          <>
            <HeroB2B />
            <PainPointsB2B />
            <B2BTrainingSection />
            <RoiCards />
            <SocialProof />
            <LinkedInProof />
            <Differentiators />
            <PackagesB2B />
            <AboutCialdini />
            <CertificationB2B />
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
