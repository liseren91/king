import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Lore from './components/Lore';
import ClassShowcase from './components/ClassShowcase';
import RoleExamples from './components/RoleExamples';
import GameRules from './components/GameRules';
import CombatRules from './components/CombatRules';
import Timeline from './components/Timeline';
import Logistics from './components/Logistics';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-amber-900 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Lore />
        <ClassShowcase />
        <RoleExamples />
        <GameRules />
        <CombatRules />
        <Timeline />
        <Logistics />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;