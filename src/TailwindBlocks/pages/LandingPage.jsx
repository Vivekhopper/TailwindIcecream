import React from 'react';
import NavBarSection from '../components/NavBarSection';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import GallerySection from '../components/GallerySection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

const LandingPage = ({ change }) => {
  return (
    <div>
      <NavBarSection change={change} />
      <HeroSection id="hero" />
      <ContentSection id="content" />
      <GallerySection id="gallery" />
      <TeamSection id="team" />
      <ContactSection id="contact" />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
