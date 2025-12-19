import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = Object.entries(t.nav).filter(([key]) => key !== 'cta');

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-gray-950/85 backdrop-blur-md border-amber-600/70 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#hero"
          className="text-xl md:text-2xl font-bold font-fantasy text-amber-500 tracking-wider cursor-pointer hover:text-amber-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          King's Bounty
        </a>
        
        <div className="flex items-center space-x-4 lg:space-x-8">
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map(([key, label]) => (
              <a 
                key={key} 
                href={`#${key}`}
                className={`font-fantasy text-xs uppercase tracking-widest transition-colors ${
                  isScrolled ? 'text-gray-300 hover:text-amber-400' : 'text-gray-200 hover:text-white drop-shadow-md'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button 
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 px-3 py-1 border rounded text-xs font-fantasy tracking-wider transition-colors ${
              isScrolled 
                ? 'bg-gray-900 border-amber-700 hover:bg-gray-800' 
                : 'bg-black/30 border-amber-500/50 hover:bg-black/50 backdrop-blur-sm'
            }`}
          >
            <span className={language === 'en' ? 'text-amber-400 font-bold' : 'text-gray-400'}>EN</span>
            <span className="text-gray-500">|</span>
            <span className={language === 'ru' ? 'text-amber-400 font-bold' : 'text-gray-400'}>RU</span>
          </button>

          <button className="hidden sm:block px-6 py-2 bg-amber-700 hover:bg-amber-600 text-white font-fantasy text-sm uppercase tracking-wider rounded border border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105">
            {t.nav.cta}
          </button>

          <button 
            className="lg:hidden p-2 text-gray-300 hover:text-amber-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-amber-900/50 animate-fadeIn">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map(([key, label]) => (
              <a 
                key={key} 
                href={`#${key}`}
                className="font-fantasy text-lg uppercase tracking-widest text-gray-300 hover:text-amber-400 transition-colors py-2 border-b border-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-amber-700 text-white font-fantasy text-base uppercase tracking-wider rounded border border-amber-500">
              {t.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;