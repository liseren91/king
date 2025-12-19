import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import { 
  Unlock, ScrollText, Printer, ExternalLink, Contact, 
  Sword, Shield, FlaskConical, Map, Flame, Skull, Ghost 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MasterDashboard = () => {
  const { language } = useLanguage();
  const t = translations[language].mastersArea;

  const factionLinks = [
    { id: 'knights', icon: <Sword size={24} />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'princesses', icon: <Shield size={24} />, color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { id: 'villains', icon: <Skull size={24} />, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { id: 'monsters', icon: <Ghost size={24} />, color: 'text-green-400', bg: 'bg-green-400/10' },
  ];

  return (
    <div className="space-y-16">
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-amber-900/50"></div>
            <div className="flex items-center gap-4">
              <Unlock className="text-amber-500 w-8 h-8" />
              <h1 className="text-4xl md:text-6xl font-fantasy text-amber-500 tracking-tighter uppercase text-center">
                {t.title}
              </h1>
              <Unlock className="text-amber-500 w-8 h-8" />
            </div>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-amber-900/50"></div>
          </div>

          {/* Main Sections Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/master/quests" className="group p-8 bg-gray-900/40 border border-amber-900/20 rounded-3xl hover:border-amber-500/50 transition-all hover:bg-amber-900/5">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
                <ScrollText className="text-amber-500" />
              </div>
              <h3 className="text-xl font-fantasy text-amber-500 uppercase tracking-wider mb-2">
                {language === 'ru' ? 'Примеры квестов' : 'Quest Examples'}
              </h3>
              <p className="text-gray-500 text-sm font-serif italic">
                {language === 'ru' ? 'Сборник простых заданий для всех фракций' : 'Collection of simple tasks for all factions'}
              </p>
            </Link>

            <Link to="/master/envelopes" className="group p-8 bg-gray-900/40 border border-amber-900/20 rounded-3xl hover:border-amber-500/50 transition-all hover:bg-amber-900/5">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 mb-6 group-hover:scale-110 transition-transform">
                <ScrollText className="text-amber-500" />
              </div>
              <h3 className="text-xl font-fantasy text-amber-500 uppercase tracking-wider mb-2">
                {language === 'ru' ? 'Квесты из конвертов' : 'Envelope Quests'}
              </h3>
              <p className="text-gray-500 text-sm font-serif italic">
                {language === 'ru' ? 'Персональные цели героев' : 'Character-specific hero goals'}
              </p>
            </Link>

            {factionLinks.map((faction) => (
          <Link 
            key={faction.id} 
            to={`/master/${faction.id}`} 
            className="group p-8 bg-gray-900/40 border border-amber-900/20 rounded-3xl hover:border-amber-500/50 transition-all hover:bg-amber-900/5"
          >
            <div className={`w-12 h-12 ${faction.bg} rounded-xl flex items-center justify-center border border-amber-500/10 mb-6 group-hover:scale-110 transition-transform`}>
              {React.cloneElement(faction.icon as React.ReactElement, { className: faction.color })}
            </div>
            <h3 className="text-xl font-fantasy text-amber-500 uppercase tracking-wider mb-2">
              {language === 'ru' ? `Данжи: ${faction.id === 'knights' ? 'Рыцари' : faction.id === 'princesses' ? 'Принцессы' : faction.id === 'villains' ? 'Злодеи' : 'Монстры'}` : `${faction.id.charAt(0).toUpperCase() + faction.id.slice(1)}: Dungeons`}
            </h3>
            <p className="text-gray-500 text-sm font-serif italic">
              {language === 'ru' ? 'Сюжеты и механики подземелий' : 'Dungeon plots and mechanics'}
            </p>
          </Link>
        ))}
      </div>

      <div className="h-px bg-amber-900/20"></div>

      {/* XP Cheatsheet Section */}
      <div className="bg-gray-900/30 border border-amber-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <ScrollText size={120} className="text-amber-500" />
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
            <ScrollText className="text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-fantasy text-amber-500 uppercase tracking-wider">
            {t.content.cheatsheet.title}
          </h2>
        </div>

        {/* XP Table */}
        <div className="mb-12 overflow-x-auto rounded-2xl border border-amber-900/30 bg-gray-950/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-amber-900/20 border-b border-amber-900/30">
                {t.content.cheatsheet.table.headers.map((header: string, idx: number) => (
                  <th key={idx} className="p-5 text-amber-500 font-fantasy tracking-widest uppercase text-sm">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.content.cheatsheet.table.rows.map((row: string[], idx: number) => (
                <tr key={idx} className="border-b border-amber-900/10 hover:bg-white/5 transition-colors">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className={`p-5 ${cellIdx === 0 ? 'text-gray-200 font-fantasy' : 'text-gray-400 font-mono'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* XP Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.content.cheatsheet.sections.map((section: any, idx: number) => (
            <div key={idx} className="p-6 bg-gray-950/40 border border-gray-800 rounded-2xl hover:border-amber-900/30 transition-colors group/card">
              <h3 className="text-xl font-fantasy text-amber-500/80 mb-3 uppercase tracking-wide group-hover/card:text-amber-500 transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm italic font-serif whitespace-pre-wrap">
                {section.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* XP Costs and Items Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/30 border border-amber-900/20 rounded-3xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-fantasy text-amber-500 uppercase tracking-wider mb-8">
            {t.content.xpCosts.title}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-amber-900/30 bg-gray-950/50 mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-amber-900/20 border-b border-amber-900/30">
                  {t.content.xpCosts.table.headers.map((header: string, idx: number) => (
                    <th key={idx} className="p-4 text-amber-500 font-fantasy tracking-widest uppercase text-xs">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.content.xpCosts.table.rows.map((row: string[], idx: number) => (
                  <tr key={idx} className="border-b border-amber-900/10 hover:bg-white/5 transition-colors">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className={`p-4 ${cellIdx === 0 ? 'text-gray-200 font-fantasy text-sm' : 'text-gray-400 font-mono text-sm'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            {t.content.xpCosts.startingEquip.map((item: any, idx: number) => (
              <div key={idx} className="flex flex-col">
                <span className="text-amber-500 font-fantasy uppercase tracking-wide text-sm">{item.class}</span>
                <span className="text-gray-400 text-sm italic">{item.equipment}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/30 border border-amber-900/20 rounded-3xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-fantasy text-amber-500 uppercase tracking-wider mb-8">
            {t.content.xpCosts.items.title}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-amber-900/30 bg-gray-950/50 mb-8">
            <table className="w-full text-left border-collapse">
              <tbody>
                {t.content.xpCosts.items.rows.map((row: string[], idx: number) => (
                  <tr key={idx} className="border-b border-amber-900/10 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-gray-200 font-fantasy text-sm">{row[0]}</td>
                    <td className="p-4 text-gray-400 font-mono text-sm text-right">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-amber-900/10 border border-amber-500/20 rounded-2xl">
            <p className="text-amber-500 font-fantasy tracking-wide text-center">
              {t.content.xpCosts.abilitiesNote}
            </p>
          </div>
        </div>
      </div>

      {/* Polygraphy Section */}
      <div className="bg-gray-900/30 border border-amber-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
            <Printer className="text-amber-500" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-fantasy text-amber-500 uppercase tracking-wider">
              {t.content.polygraphy.title}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.content.polygraphy.items.map((item: any, idx: number) => (
            <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="group bg-gray-950 border border-gray-800 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-amber-500/50 transition-all">
              <ScrollText size={32} className="text-amber-900/40 group-hover:text-amber-500 transition-colors" />
              <h3 className="text-amber-500 font-fantasy uppercase tracking-widest text-xs text-center">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* Character Card Template Section */}
      <div className="bg-gray-900/30 border border-amber-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
            <Contact className="text-amber-500" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-fantasy text-amber-500 uppercase tracking-wider">
              {t.content.characterCard.title}
            </h2>
            <p className="text-gray-500 font-serif italic text-sm">
              {t.content.characterCard.subtitle}
            </p>
          </div>
        </div>

        <div className="bg-white text-black p-4 md:p-8 rounded-sm shadow-2xl max-w-5xl mx-auto font-sans overflow-x-auto mb-8">
          <table className="w-full border-2 border-black border-collapse text-[10px] md:text-xs">
            <thead>
              <tr>
                <th colSpan={3} className="border-2 border-black p-2 uppercase font-bold text-center bg-gray-100">{t.content.characterCard.attacks}</th>
                <th colSpan={6} className="border-2 border-black p-2 uppercase font-bold text-center bg-gray-100">{t.content.characterCard.defense}</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3].map((rowIdx) => (
                <tr key={rowIdx} className="h-12 md:h-16">
                  <td className="border border-black p-1 w-[11%] align-bottom text-center font-semibold">{t.content.characterCard.types.physical[rowIdx]}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center font-semibold">{t.content.characterCard.types.magical[rowIdx]}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center font-semibold">{t.content.characterCard.types.tier2[rowIdx]}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center font-semibold">{t.content.characterCard.types.physical[rowIdx]}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center text-[8px] text-gray-400">{t.content.characterCard.slot}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center font-semibold">{t.content.characterCard.types.magical[rowIdx]}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center text-[8px] text-gray-400">{t.content.characterCard.slot}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center font-semibold">{t.content.characterCard.types.tier2[rowIdx]}</td>
                  <td className="border border-black p-1 w-[11%] align-bottom text-center text-[8px] text-gray-400">{t.content.characterCard.slot}</td>
                </tr>
              ))}
              <tr className="h-12 md:h-16">
                <td colSpan={3} className="border-2 border-black p-2 align-bottom text-center font-bold uppercase italic">{t.content.characterCard.types.ultimate}</td>
                <td colSpan={3} className="border-2 border-black p-2 align-bottom text-center font-bold uppercase">{t.content.characterCard.classLabel}</td>
                <td colSpan={2} className="border-2 border-black p-2 align-bottom text-center font-bold uppercase italic">{t.content.characterCard.types.ultimate}</td>
                <td className="border-2 border-black p-1 align-bottom text-center text-[8px] text-gray-400 uppercase">{t.content.characterCard.slot}</td>
              </tr>
              <tr className="h-12 md:h-16">
                <td colSpan={5} className="border-2 border-black p-2 align-bottom text-center font-bold uppercase">{t.content.characterCard.ability1}</td>
                <td colSpan={4} className="border-2 border-black p-2 align-bottom text-center font-bold uppercase">{t.content.characterCard.ability2}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-center">
          <button onClick={() => window.print()} className="flex items-center gap-2 px-6 py-2 bg-amber-900/20 border border-amber-500/30 rounded-full text-amber-500 hover:bg-amber-900/40 transition-all font-fantasy tracking-widest text-sm">
            <Printer size={18} />
            {language === 'ru' ? 'Распечатать карточки' : 'Print Cards'}
          </button>
        </div>
      </div>

      <div className="p-8 border border-amber-900/20 rounded-2xl bg-amber-900/5 text-center">
        <p className="text-gray-500 font-serif italic max-w-2xl mx-auto">
          {language === 'ru' 
            ? "Эта информация предназначена исключительно для мастеров игры. Пожалуйста, не разглашайте её игрокам до окончания мероприятия."
            : "This information is strictly for game masters. Please do not disclose it to players until the event is over."}
        </p>
      </div>
    </div>
  );
};

export default MasterDashboard;

