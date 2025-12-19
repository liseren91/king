import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import { ScrollText, ArrowLeft, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnvelopeQuests = () => {
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
            {t.content.envelopeQuests.title}
          </h1>
          <p className="text-gray-500 font-serif italic">
            {t.content.envelopeQuests.subtitle}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.content.envelopeQuests.characters.map((char: any, idx: number) => (
          <div key={idx} className="bg-gray-900/40 border border-amber-900/20 rounded-3xl p-8 backdrop-blur-sm hover:border-amber-500/30 transition-all group/char">
            <h3 className="text-2xl font-fantasy text-amber-500 mb-6 uppercase tracking-wide border-b border-amber-900/30 pb-4 flex items-center gap-3">
              <UserCircle size={24} className="text-amber-500/50 group-hover/char:text-amber-500 transition-colors" />
              {char.name}
            </h3>
            <ul className="space-y-4">
              {char.quests.map((quest: string, qIdx: number) => (
                <li key={qIdx} className="flex gap-4 text-gray-400 leading-relaxed group-hover/char:text-gray-200 transition-colors text-sm">
                  <span className="text-amber-900/40 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
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

export default EnvelopeQuests;


