import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import { ArrowLeft, Sword, Shield, Skull, Ghost, Map, Info, ScrollText, Target, Zap, Trophy, Package, Sparkles } from 'lucide-react';

const FactionQuests = () => {
  const { factionId } = useParams();
  const { language } = useLanguage();

  const t = translations[language].mastersArea;
  const factionQuests = t.content.factionDungeons?.[factionId as string]?.quests || [];
  const factionTitle = t.content.factionDungeons?.[factionId as string]?.title;

  const factionData: Record<string, any> = {
    knights: {
      title: language === 'ru' ? 'Рыцари: Квесты и Данжи' : 'Knights: Quests & Dungeons',
      icon: <Sword className="text-blue-400" />,
      color: 'text-blue-400',
      border: 'border-blue-400/30'
    },
    princesses: {
      title: language === 'ru' ? 'Принцессы: Квесты и Данжи' : 'Princesses: Quests & Dungeons',
      icon: <Shield className="text-pink-400" />,
      color: 'text-pink-400',
      border: 'border-pink-400/30'
    },
    villains: {
      title: language === 'ru' ? 'Злодеи: Квесты и Данжи' : 'Villains: Quests & Dungeons',
      icon: <Skull className="text-purple-400" />,
      color: 'text-purple-400',
      border: 'border-purple-400/30'
    },
    monsters: {
      title: language === 'ru' ? 'Монстры: Квесты и Данжи' : 'Monsters: Quests & Dungeons',
      icon: <Ghost className="text-green-400" />,
      color: 'text-green-400',
      border: 'border-green-400/30'
    }
  };

  const faction = factionData[factionId || 'knights'];

  return (
    <div className="space-y-12 animate-fade-in">
      <Link to="/master" className="text-gray-500 hover:text-amber-500 transition-all flex items-center gap-2 font-fantasy uppercase tracking-widest text-sm group mb-8">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        {language === 'ru' ? 'Назад в панель' : 'Back to Dashboard'}
      </Link>

      <div className="flex items-center gap-6 mb-12">
        <div className={`w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center border ${faction.border} shadow-lg`}>
          {React.cloneElement(faction.icon, { size: 32 })}
        </div>
        <div>
          <h1 className={`text-3xl md:text-5xl font-fantasy ${faction.color} uppercase tracking-wider`}>
            {factionTitle || faction.title}
          </h1>
          <p className="text-gray-500 font-serif italic mt-2">
            {language === 'ru' ? 'Секретные материалы и механики фракции' : 'Secret faction materials and mechanics'}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Dungeon Mechanics Section */}
        <div className="bg-gray-900/40 border border-amber-900/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Map size={160} className={faction.color} />
          </div>
          
          <h2 className="text-2xl font-fantasy text-amber-500 uppercase tracking-widest mb-8 flex items-center gap-3">
            <Map size={24} />
            {language === 'ru' ? 'Механика Данжа' : 'Dungeon Mechanics'}
          </h2>
          
          <div className="space-y-6 text-gray-400 leading-relaxed font-serif">
            <p className="p-4 bg-gray-950/50 rounded-xl border border-gray-800 italic">
              {language === 'ru' 
                ? "В этой локации действуют особые правила подземелий. Квестодатели должны следить за выполнением всех условий." 
                : "Special dungeon rules apply in this location. Quest-givers must ensure all conditions are met."}
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Info size={18} className="text-amber-500 shrink-0 mt-1" />
                <span>{language === 'ru' ? 'Вход разрешен только при наличии квеста.' : 'Entry allowed only with a valid quest.'}</span>
              </li>
              <li className="flex gap-3">
                <Info size={18} className="text-amber-500 shrink-0 mt-1" />
                <span>{language === 'ru' ? 'Монстры в данже могут иметь дополнительные хиты или способности.' : 'Monsters in the dungeon may have extra HP or abilities.'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quest List Section */}
        <div className="bg-gray-900/40 border border-amber-900/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <ScrollText size={160} className={faction.color} />
          </div>

          <h2 className="text-2xl font-fantasy text-amber-500 uppercase tracking-widest mb-8 flex items-center gap-3">
            <ScrollText size={24} />
            {language === 'ru' ? 'Сюжетные Квесты' : 'Story Quests'}
          </h2>

          <div className="space-y-8">
            {factionQuests.length > 0 ? factionQuests.map((quest: any, idx: number) => (
              <div key={idx} className="p-6 bg-gray-950/50 rounded-2xl border border-gray-800 hover:border-amber-900/30 transition-all space-y-4">
                <h3 className="text-xl font-fantasy text-amber-500 uppercase tracking-wide border-b border-amber-900/20 pb-2">
                  {quest.title}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <Target size={16} className="text-amber-500 shrink-0 mt-1" />
                    <p><span className="text-gray-500 font-bold uppercase text-[10px] tracking-tighter mr-2">{language === 'ru' ? 'Цель:' : 'Objective:'}</span> {quest.objective}</p>
                  </div>
                  <div className="flex gap-3">
                    <Zap size={16} className="text-amber-500 shrink-0 mt-1" />
                    <p><span className="text-gray-500 font-bold uppercase text-[10px] tracking-tighter mr-2">{language === 'ru' ? 'Выполнение:' : 'Execution:'}</span> {quest.execution}</p>
                  </div>
                  <div className="flex gap-3">
                    <Trophy size={16} className="text-amber-500 shrink-0 mt-1" />
                    <p><span className="text-gray-500 font-bold uppercase text-[10px] tracking-tighter mr-2">{language === 'ru' ? 'Условие победы:' : 'Victory Condition:'}</span> {quest.victory}</p>
                  </div>
                  <div className="flex gap-3">
                    <Package size={16} className="text-amber-500 shrink-0 mt-1" />
                    <p><span className="text-gray-500 font-bold uppercase text-[10px] tracking-tighter mr-2">{language === 'ru' ? 'Реквизит:' : 'Stuff:'}</span> {quest.stuff}</p>
                  </div>
                  <div className="flex gap-3">
                    <Sparkles size={16} className="text-amber-500 shrink-0 mt-1" />
                    <p><span className="text-gray-500 font-bold uppercase text-[10px] tracking-tighter mr-2">{language === 'ru' ? 'Лут:' : 'Loot:'}</span> {quest.loot}</p>
                  </div>
                </div>
              </div>
            )) : (
              <p className="text-gray-500 italic font-serif">
                {language === 'ru' ? 'Для этой фракции пока нет сюжетных квестов.' : 'No story quests available for this faction yet.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactionQuests;


