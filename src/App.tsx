import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalStory } from './components/PersonalStory';
import { ThreeSides } from './components/ThreeSides';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ImpactSection } from './components/ImpactSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedSideId, setSelectedSideId] = useState<string>('player');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('MC & Event Hosting');

  const handleSelectSideFromHero = (sideId: string) => {
    setSelectedSideId(sideId);
    const el = document.getElementById('three-sides');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0B0F19] text-[#121417] dark:text-[#F8FAFC] flex flex-col font-sans selection:bg-[#111827] selection:text-white dark:selection:bg-blue-600 dark:selection:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar onSelectContact={handleConnect} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 01 — HERO */}
        <Hero
          onExploreWork={handleExploreWork}
          onConnect={handleConnect}
          onSelectSide={handleSelectSideFromHero}
        />

        {/* 02 — INTRO / PERSONAL STORY */}
        <PersonalStory />

        {/* 03 — THREE SIDES OF ME */}
        <ThreeSides
          selectedSideId={selectedSideId}
          onSideChange={setSelectedSideId}
        />

        {/* 04 — ABOUT ME */}
        <AboutSection />

        {/* 05 — SERVICES / WHAT I DO */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 06 — IMPACT / THINGS I'VE HELPED MAKE HAPPEN */}
        <ImpactSection />

        {/* 07 — SELECTED WORK / PROJECTS */}
        <ProjectsSection />

        {/* 08 — EXPERIENCE TIMELINE */}
        <ExperienceSection />

        {/* 09 — SKILLS / EXPERTISE */}
        <SkillsSection />

        {/* 10 — PHILOSOPHY / WHAT I BELIEVE */}
        <PhilosophySection />

        {/* 11 — CONTACT & COLLABORATION */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
