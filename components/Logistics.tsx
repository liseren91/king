import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Logistics: React.FC = () => {
  const { t } = useLanguage();
  const l = t.logistics;

  const cards = [
    { title: l.accommodation.title, desc: l.accommodation.desc, icon: "⛺" },
    { title: l.food.title, desc: l.food.desc, icon: "🍲" },
    { title: l.alcohol.title, desc: l.alcohol.desc, icon: "🍺" },
    { title: l.ecology.title, desc: l.ecology.desc, icon: "♻️" },
    { title: l.transport.title, desc: l.transport.desc, icon: "🚗" },
    { title: l.medicine.title, desc: l.medicine.desc, icon: "💊" },
  ];

  return (
    <section id="logistics" className="py-24 bg-gray-950 relative border-t border-gray-800 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-900/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">{l.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          
          {/* Participation Fee Highlight */}
          <div className="inline-block bg-amber-900/20 border border-amber-500/30 rounded-full px-8 py-3 backdrop-blur-sm mb-8">
            <span className="text-amber-400 font-fantasy text-xl mr-2">{l.fee.title}:</span>
            <span className="text-gray-200 text-lg">{l.fee.desc}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-900/40 border border-gray-800 p-8 rounded-lg hover:border-amber-700/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-950 border border-gray-700 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-amber-500 transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-fantasy font-bold text-amber-500 group-hover:text-amber-400 transition-colors uppercase tracking-widest">
                  {card.title}
                </h3>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-gray-800 via-gray-800/50 to-transparent mb-6"></div>
              
              <p className="text-gray-400 leading-relaxed text-base flex-grow italic">
                {card.desc}
              </p>
              
              <div className="mt-6 flex justify-end">
                <span className="text-amber-900/40 text-4xl font-fantasy opacity-0 group-hover:opacity-100 transition-opacity">✧</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-fantasy uppercase tracking-[0.2em] text-xs">
            Endoria awaits your arrival
          </p>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
