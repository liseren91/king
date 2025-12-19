import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import { ScrollText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimpleQuests = () => {
  const { language } = useLanguage();
  const t = translations[language].mastersArea;

  return (
    <div className="space-y-12 animate-fade-in">
      <Link to="/master" className="text-gray-500 hover:text-amber-500 transition-all flex items-center gap-2 font-fantasy uppercase tracking-widest text-sm group mb-8">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        {language === 'ru' ? 'Назад в панель' : 'Back to Dashboard'}
      </Link>

      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
          <ScrollText className="text-amber-500" />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-fantasy text-amber-500 uppercase tracking-wider">
            {t.content.simpleQuests.title}
          </h1>
          <p className="text-gray-500 font-serif italic">
            {t.content.simpleQuests.subtitle}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {t.content.simpleQuests.blocks.map((block: any, idx: number) => (
          <div key={idx} className="bg-gray-900/40 border border-amber-900/20 rounded-3xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all group/quest">
            <h3 className="text-2xl font-fantasy text-amber-500 mb-6 uppercase tracking-wide border-b border-amber-900/30 pb-4 flex items-center justify-between">
              {block.title}
              <span className="text-amber-900/30 text-xs font-mono">SECTION_{idx + 1}</span>
            </h3>
            <ul className="space-y-4">
              {block.quests.map((quest: string, qIdx: number) => (
                <li key={qIdx} className="flex gap-4 text-gray-300 leading-relaxed group-hover/quest:text-gray-200 transition-colors">
                  <span className="text-amber-500/50 mt-1.5 shrink-0 w-2 h-2 rounded-full bg-current shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
                  {quest}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleQuests;

