import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ExtensionGuide from './components/ExtensionGuide';
import CommandList from './components/CommandList';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference or local storage on mount
    const savedTheme = localStorage.getItem('spikebot-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Scroll Animation Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Run once on mount

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('spikebot-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('spikebot-theme', 'light');
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <ExtensionGuide />
        <CommandList />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;