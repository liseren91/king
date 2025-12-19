import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Lore from './components/Lore';
import ClassShowcase from './components/ClassShowcase';
import RoleExamples from './components/RoleExamples';
import GameRules from './components/GameRules';
import CombatRules from './components/CombatRules';
import Timeline from './components/Timeline';
import Logistics from './components/Logistics';
import MasterLayout from './components/master/MasterLayout';
import MasterDashboard from './components/master/MasterDashboard';
import SimpleQuests from './components/master/SimpleQuests';
import EnvelopeQuests from './components/master/EnvelopeQuests';
import FactionQuests from './components/master/FactionQuests';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function LandingPage() {
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
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
              <Route path="/master" element={<MasterLayout />}>
                <Route index element={<MasterDashboard />} />
                <Route path="quests" element={<SimpleQuests />} />
                <Route path="envelopes" element={<EnvelopeQuests />} />
                <Route path=":factionId" element={<FactionQuests />} />
              </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
