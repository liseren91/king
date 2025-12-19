import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Timeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">{t.timeline.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          {t.timeline.desc && (
            <p className="text-gray-400 max-w-2xl mx-auto whitespace-pre-wrap">
              {t.timeline.desc}
            </p>
          )}
        </div>
        
        <div className="relative border-l-2 border-amber-700 ml-4 md:ml-0 space-y-8">
          {t.timeline.events.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-gray-900 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              
              <div className="md:flex md:items-center md:justify-between group">
                 <div className="md:w-1/4 md:text-right md:pr-8">
                   <span className="text-amber-500 font-mono font-bold text-lg">{item.time}</span>
                 </div>
                 <div className="md:w-3/4 bg-gray-950 p-6 rounded-lg border border-gray-800 group-hover:border-amber-700/50 transition-all shadow-lg group-hover:shadow-amber-900/5">
                   <span className="text-gray-300 leading-relaxed">{item.event}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;