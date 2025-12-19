import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-950 to-black opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-4 inline-block animate-bounce text-amber-500 text-4xl filter drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">♛</div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-fantasy text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-900 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] mb-8 tracking-tighter">
          {t.hero.title}
        </h1>
        
        <div className="mb-10 relative inline-block">
          <div className="absolute inset-0 bg-amber-500/10 blur-2xl rounded-full"></div>
          <p className="relative text-xl md:text-3xl text-gray-200 font-fantasy tracking-[0.2em] uppercase border-y border-amber-900/50 py-4 px-12">
            {t.hero.subtitle}
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 italic font-light tracking-wide mb-12 max-w-2xl mx-auto border-l-2 border-amber-700/50 pl-6 py-2">
          {t.hero.tagline}
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 font-fantasy text-lg font-bold uppercase tracking-widest rounded border border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300">
            {t.hero.startBtn}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;