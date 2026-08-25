/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { ServicesSection } from './components/ServicesSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { DesignApproachSection } from './components/DesignApproachSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactCTASection } from './components/ContactCTASection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BookCallModal } from './components/BookCallModal';
import { projectsData } from './data/projectsData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookCallOpen, setIsBookCallOpen] = useState<boolean>(false);
  const [bookCallNote, setBookCallNote] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('Website Design & Development');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleCapabilitySelect = (capTitle: string) => {
    setSelectedService(`${capTitle} Development`);
    scrollToSection('contact');
  };

  const handleBookCallForProject = (projectTitle: string) => {
    setBookCallNote(`Interested in a website like ${projectTitle}`);
    setIsBookCallOpen(true);
  };

  const handleOpenGeneralBookCall = () => {
    setBookCallNote('');
    setIsBookCallOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#202020] font-sans antialiased flex flex-col justify-between selection:bg-[#16A7B7] selection:text-white">
      
      {/* Floating Pill Navigation */}
      <Navbar
        onOpenBookCall={handleOpenGeneralBookCall}
        onNavigateTo={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full space-y-2 sm:space-y-4">
        
        {/* 1. Hero Section */}
        <Hero
          onWorkClick={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
          onOpenProject={handleOpenProjectById}
        />

        {/* 2. Mission Section (Teal Rounded Banner) */}
        <MissionSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 3. Services Section ("How Can I Help You?") */}
        <ServicesSection
          onContactWithService={handleServiceSelect}
        />

        {/* 4. Selected Work (Featured Case Study + Asymmetric Grid) */}
        <SelectedWorkSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 5. Why Work With Me ("More Than Just a Website.") */}
        <WhyWorkWithMe
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 6. Capabilities ("What I Can Build") */}
        <CapabilitiesSection
          onSelectCapability={handleCapabilitySelect}
        />

        {/* 7. Design Approach (Soft Lavender Specimen & Design System) */}
        <DesignApproachSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 8. Process ("How We Build Your Website") */}
        <ProcessSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 9. Contact CTA (2-Card Layout matching reference video 00:15) */}
        <ContactCTASection
          onOpenBookCall={handleOpenGeneralBookCall}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 10. Contact Form (Soft Lavender Gradient Form) */}
        <ContactFormSection
          initialService={selectedService}
        />

      </main>

      {/* Footer */}
      <Footer
        onNavigateTo={scrollToSection}
        onOpenBookCall={handleOpenGeneralBookCall}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookCallForProject={handleBookCallForProject}
      />

      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        initialNote={bookCallNote}
      />

    </div>
  );
}
