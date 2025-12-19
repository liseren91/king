import React, { useState } from 'react';
import { GameClass } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ClassShowcase: React.FC = () => {
  const [activeClass, setActiveClass] = useState<GameClass>(GameClass.WARRIOR);
  const [expandedAbilityIndex, setExpandedAbilityIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const classStyles = {
    [GameClass.WARRIOR]: { color: "from-red-900 to-red-950" },
    [GameClass.WIZARD]: { color: "from-blue-900 to-blue-950" },
    [GameClass.ROGUE]: { color: "from-green-900 to-gray-900" },
    [GameClass.MONSTER]: { color: "from-emerald-900 to-green-950" }
  };

  const currentClassData = t.classes.roles[activeClass];

  const toggleAbility = (index: number) => {
    setExpandedAbilityIndex(expandedAbilityIndex === index ? null : index);
  };

  return (
    <section id="classes" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${classStyles[activeClass].color} opacity-20 transition-colors duration-700`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">{t.classes.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.classes.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Class Tabs */}
          <div className="lg:col-span-3 flex flex-col space-y-2">
            <h3 className="text-2xl font-fantasy text-amber-500 mb-6 tracking-widest uppercase">{t.nav.classes}</h3>
            {Object.values(GameClass).map((className) => (
              <button
                key={className}
                onClick={() => setActiveClass(className)}
                className={`p-4 text-left border transition-all duration-300 rounded ${
                  activeClass === className 
                    ? 'border-amber-500 bg-amber-900/40 text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
                    : 'border-gray-800 bg-gray-900/40 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <div className="font-fantasy tracking-widest uppercase text-sm">{t.classes.roles[className].title}</div>
              </button>
            ))}
          </div>

          {/* Class Details */}
          <div className="lg:col-span-5 bg-gray-900/90 border border-gray-700 p-8 rounded-lg shadow-2xl flex flex-col">
            <div className="flex justify-between items-start mb-6 border-b border-gray-700 pb-4">
              <h3 className="text-4xl font-fantasy text-amber-500 tracking-wider uppercase">{currentClassData.title}</h3>
              <div className="px-3 py-1 bg-amber-900/50 rounded border border-amber-800">
                 <div className="text-amber-200 font-fantasy uppercase text-xs tracking-widest">{currentClassData.role}</div>
              </div>
            </div>
            
            <div className="space-y-6 text-gray-300 flex-grow">
              {currentClassData.details.map((detail, index) => (
                <div key={index} className="leading-relaxed">
                  <strong className="block text-amber-600/90 font-fantasy tracking-widest uppercase mb-1 text-sm">
                    {detail.label}
                  </strong>
                  <span className="text-gray-200 font-light text-base block">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Starting Capital Info */}
          <div className="lg:col-span-4 bg-gray-800/50 p-6 rounded border border-gray-700 h-fit">
            <h4 className="font-fantasy text-amber-500 text-2xl mb-4 tracking-widest uppercase">{t.classes.capital.title}</h4>
            <div className="h-0.5 w-12 bg-amber-600/50 mb-4"></div>
            <p className="text-base text-gray-300 mb-4 italic">{t.classes.capital.desc}</p>
            <ul className="text-base text-gray-400 space-y-3 list-none">
              {t.classes.capital.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">✧</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Abilities Accordion */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-fantasy text-gray-100 uppercase tracking-widest">{t.classes.abilities.title}</h3>
            <div className="h-0.5 w-16 bg-amber-600/50 mx-auto mt-2 mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto italic">
              {t.classes.abilities.subtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {t.classes.abilities.list.map((ab, idx) => {
              const isExpanded = expandedAbilityIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-gray-900 border transition-all duration-300 rounded overflow-hidden ${
                    isExpanded 
                      ? 'border-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.1)] bg-gray-900/80' 
                      : 'border-gray-800 hover:border-amber-900 hover:bg-gray-800/50'
                  }`}
                >
                  <button 
                    onClick={() => toggleAbility(idx)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-fantasy text-xl transition-colors ${
                        isExpanded ? 'text-amber-400' : 'text-gray-300 group-hover:text-amber-500/80'
                      }`}>
                        {ab.name}
                      </span>
                    </div>
                    <span className={`transform transition-transform duration-300 text-amber-700 group-hover:text-amber-500 ${
                      isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-900/50 to-transparent mb-4"></div>
                      <div className="text-lg text-gray-400 leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-amber-900/30">
                        {ab.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Single Use Items - Redesigned */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-gray-900/60 border border-amber-900/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="bg-amber-950/40 p-6 border-b border-amber-900/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">📜</span>
                <h3 className="text-2xl md:text-3xl font-fantasy text-amber-500 uppercase tracking-widest">
                  {t.classes.items.title}
                </h3>
              </div>
              <div className="hidden md:flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-amber-700/50"></div>)}
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Rules Content */}
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-700/50 via-amber-900/20 to-transparent"></div>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                      {t.classes.items.desc.split('**').map((part, i) => (
                        i % 2 === 1 ? <strong key={i} className="text-amber-400 font-bold">{part}</strong> : part
                      ))}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-950/50 border border-gray-800 p-5 rounded flex items-center gap-4 group/item hover:border-amber-900/50 transition-colors">
                      <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
                      <span className="text-sm text-gray-400 uppercase tracking-widest font-fantasy">Можно передавать или дарить</span>
                    </div>
                    <div className="bg-gray-950/50 border border-gray-800 p-5 rounded flex items-center gap-4 group/item hover:border-amber-900/50 transition-colors">
                      <span className="text-2xl group-hover:scale-110 transition-transform">🛡️</span>
                      <span className="text-sm text-gray-400 uppercase tracking-widest font-fantasy">Нельзя отнять силой</span>
                    </div>
                  </div>

                  <div className="bg-amber-900/10 border-l-4 border-amber-600 p-6 rounded-r shadow-lg">
                    <div className="flex items-center gap-2 text-amber-500 font-fantasy text-sm mb-2">
                      <span className="text-xl">⚡</span> ИСПОЛЬЗОВАНИЕ И ОГРАНИЧЕНИЯ
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Зелья лечения и оглушалки <span className="text-amber-400 font-bold">не требуют действия</span>. 
                      Остальное — 1 действие в ваш ход. После использования сертификат <span className="text-red-500 font-bold uppercase tracking-tighter">рвется</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassShowcase;