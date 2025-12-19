import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Lore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'knights' | 'princesses' | 'villains' | 'smac'>('history');
  const { t } = useLanguage();

  const tabColors: Record<string, string> = {
    history: 'text-amber-500',
    knights: 'text-blue-400',
    princesses: 'text-pink-400',
    villains: 'text-red-500',
    smac: 'text-green-500'
  };

  return (
    <section id="lore" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">{t.lore.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.lore.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(t.lore.tabs).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-6 py-2 border rounded font-fantasy uppercase tracking-wider transition-all ${
                activeTab === key
                  ? 'bg-amber-800 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-gray-950 border border-gray-800 p-8 rounded-lg shadow-xl min-h-[400px] relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-amber-600/30"></div>
           <div className="animate-fadeIn space-y-6">
             <h3 className={`text-3xl font-fantasy mb-6 tracking-widest uppercase ${tabColors[activeTab]}`}>
               {t.lore.tabs[activeTab]}
             </h3>
             <div className="space-y-4">
               {t.lore.content[activeTab].map((paragraph, idx) => (
                 <p key={idx} className="leading-relaxed text-gray-300 text-lg font-light italic border-l border-gray-800 pl-6">
                   {paragraph}
                 </p>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Lore;