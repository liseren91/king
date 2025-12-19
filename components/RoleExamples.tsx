import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RoleExamples: React.FC = () => {
  const { t } = useLanguage();
  const { princesses, knights, villains, monsters } = t.roleExamples;

  interface PairCardProps {
    hero: string;
    companion: string;
    colorClass: string;
    borderColor: string;
  }

  const PairCard: React.FC<PairCardProps> = ({ hero, companion, colorClass, borderColor }) => (
    <div className="relative group/pair transition-all duration-300 hover:scale-[1.02]">
      <div className={`flex items-stretch bg-gray-900/40 rounded-lg border ${borderColor} group-hover/pair:border-amber-500/50 transition-all overflow-hidden shadow-lg backdrop-blur-sm`}>
        {/* Hero Side */}
        <div className="flex-1 p-4 flex flex-col justify-center items-center text-center border-r border-gray-800/50 bg-amber-900/5">
          <span className="text-amber-400 font-medium text-sm md:text-lg leading-tight">{hero}</span>
        </div>
        
        {/* Linker */}
        <div className="flex items-center justify-center px-2 bg-gray-950/50">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-amber-600/50 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-600/40 font-fantasy text-xs group-hover/pair:text-amber-500/60 transition-colors">
            ✧
          </div>
        </div>

        {/* Companion Side */}
        <div className="flex-1 p-4 flex flex-col justify-center items-center text-center bg-gray-950/20">
          <span className="text-amber-100 font-medium text-sm md:text-lg leading-tight">{companion}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="role-examples" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-amber-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">
            {t.roleExamples.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto italic text-lg leading-relaxed">
            {t.roleExamples.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Princesses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-fantasy text-pink-500 tracking-wider uppercase">{princesses.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-pink-900/50 to-transparent"></div>
            </div>
            <div className="flex flex-col gap-4">
              {princesses.items.map((item: any, idx: number) => (
                <PairCard 
                  key={idx} 
                  hero={item.hero} 
                  companion={item.companion} 
                  colorClass="text-pink-500" 
                  borderColor="border-pink-900/20"
                />
              ))}
            </div>
          </div>

          {/* Knights */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-fantasy text-blue-500 tracking-wider uppercase">{knights.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-900/50 to-transparent"></div>
            </div>
            <div className="flex flex-col gap-4">
              {knights.items.map((item: any, idx: number) => (
                <PairCard 
                  key={idx} 
                  hero={item.hero} 
                  companion={item.companion} 
                  colorClass="text-blue-500" 
                  borderColor="border-blue-900/20"
                />
              ))}
            </div>
          </div>

          {/* Villains */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-fantasy text-purple-500 tracking-wider uppercase">{villains.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-purple-900/50 to-transparent"></div>
            </div>
            <div className="flex flex-col gap-4">
              {villains.items.map((item: any, idx: number) => (
                <PairCard 
                  key={idx} 
                  hero={item.hero} 
                  companion={item.companion} 
                  colorClass="text-purple-500" 
                  borderColor="border-purple-900/20"
                />
              ))}
            </div>
          </div>

          {/* Monsters */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-fantasy text-emerald-500 tracking-wider uppercase">{monsters.title}</h3>
              <div className="flex-grow h-px bg-gradient-to-r from-emerald-900/50 to-transparent"></div>
            </div>
            <div className="flex flex-col gap-3">
              {monsters.items.map((name: string, idx: number) => (
                <div key={idx} className="group/monster transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-4 bg-gray-900/40 rounded-lg border border-emerald-900/20 group-hover/monster:border-emerald-500/50 transition-all text-center shadow-lg backdrop-blur-sm">
                    <div className="text-amber-400 font-medium text-base md:text-lg leading-tight">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleExamples;
