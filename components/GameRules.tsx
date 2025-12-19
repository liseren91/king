import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const GameRules: React.FC = () => {
  const { t } = useLanguage();
  const r = t.rules;

  return (
    <section id="rules" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">{r.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
        </div>
        
        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Victory - Full Width */}
          <div className="bg-gray-950 p-8 rounded-lg border border-gray-800 md:col-span-2 shadow-lg shadow-amber-900/10 hover:border-amber-700/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-900/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-amber-500 font-fantasy text-3xl mb-6 border-b border-gray-800 pb-4 tracking-widest uppercase flex items-center gap-3">
              <span className="text-2xl">🏆</span> {r.victory.title}
            </h3>
            <p className="text-gray-200 leading-relaxed text-xl font-light italic">{r.victory.desc}</p>
          </div>

          {/* Roles */}
          {/* ... (already updated) ... */}

          {/* Quests - Full Width */}
          <div className="bg-gray-950 p-8 rounded-lg border border-gray-800 md:col-span-2 hover:border-amber-700/50 transition-all relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-900/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
            <h3 className="text-amber-500 font-fantasy text-2xl mb-6 border-b border-gray-800 pb-4 tracking-widest uppercase flex items-center gap-3">
              <span className="text-xl">📜</span> {r.quests.title}
            </h3>
            <p className="text-gray-300 whitespace-pre-wrap leading-relaxed text-base">{r.quests.desc}</p>
          </div>

          {/* Stats */}
          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col hover:border-amber-900/50 transition-colors">
            <h3 className="text-amber-500 font-fantasy text-xl mb-3 tracking-widest uppercase">{r.glory.title}</h3>
            <p className="text-gray-400 whitespace-pre-wrap leading-relaxed flex-grow text-sm">{r.glory.desc}</p>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col hover:border-amber-900/50 transition-colors">
            <h3 className="text-amber-500 font-fantasy text-xl mb-3 tracking-widest uppercase">{r.xp.title}</h3>
            <p className="text-gray-400 whitespace-pre-wrap leading-relaxed flex-grow text-sm">{r.xp.desc}</p>
          </div>

          {/* World & Masters */}
          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:border-amber-900/50 transition-colors">
             <h3 className="text-amber-500 font-fantasy text-xl mb-3 tracking-widest uppercase">{r.dungeon.title}</h3>
             <p className="text-gray-400 leading-relaxed text-sm">{r.dungeon.desc}</p>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:border-amber-900/50 transition-colors">
             <h3 className="text-amber-500 font-fantasy text-xl mb-3 tracking-widest uppercase">{r.masters.title}</h3>
             <p className="text-gray-400 whitespace-pre-wrap leading-relaxed text-sm">{r.masters.desc}</p>
          </div>
        </div>

        {/* Faction Relations Visualizer */}
        <div className="bg-black/40 p-8 rounded-xl border border-gray-800 relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-fantasy text-gray-100 uppercase tracking-widest">{r.factions.title}</h3>
            <div className="h-0.5 w-16 bg-amber-600 mx-auto mt-2"></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
             {/* Diagram Lines (Hidden on mobile) */}
             <div className="absolute inset-0 z-0 hidden md:block">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#4ade80" />
                      </marker>
                      <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                      </marker>
                    </defs>
                    
                    {/* Green Connections (Allies) - Square Perimeter */}
                    {/* Top: Knights -> Monsters */}
                    <line x1="25%" y1="20%" x2="75%" y2="20%" stroke="#84cc16" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
                    {/* Bottom: Princesses -> Villains */}
                    <line x1="25%" y1="80%" x2="75%" y2="80%" stroke="#84cc16" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
                    {/* Left: Knights -> Princesses */}
                    <line x1="20%" y1="25%" x2="20%" y2="75%" stroke="#84cc16" strokeWidth="4" markerEnd="url(#arrowhead-green)" />
                    {/* Right: Monsters -> Villains */}
                    <line x1="80%" y1="25%" x2="80%" y2="75%" stroke="#84cc16" strokeWidth="4" markerEnd="url(#arrowhead-green)" />

                    {/* Red Connections (Enemies) - Cross */}
                    {/* Knights -> Villains */}
                    <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrowhead-red)" />
                    {/* Princesses -> Monsters */}
                    <line x1="25%" y1="75%" x2="75%" y2="25%" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrowhead-red)" />
                </svg>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-32 md:gap-x-24 relative z-10 p-4">
                
                {/* Knights - Top Left */}
                <div className="bg-yellow-500/20 border-2 border-yellow-400 p-6 rounded-lg text-center backdrop-blur-md shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:scale-105 transition-transform">
                   <div className="font-fantasy text-yellow-400 text-3xl mb-2 uppercase tracking-widest">{r.factions.knights.name}</div>
                   <div className="text-sm text-yellow-100/90 font-serif">{r.factions.knights.allies}</div>
                   <div className="text-sm text-red-400 font-bold mt-2">{r.factions.knights.enemy}</div>
                </div>

                {/* Monsters - Top Right (Moved to match diagram) */}
                <div className="bg-green-600/20 border-2 border-green-500 p-6 rounded-lg text-center backdrop-blur-md shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform">
                   <div className="font-fantasy text-green-400 text-3xl mb-2 uppercase tracking-widest">{r.factions.monsters.name}</div>
                   <div className="text-sm text-green-100/90 font-serif">{r.factions.monsters.allies}</div>
                   <div className="text-sm text-red-400 font-bold mt-2">{r.factions.monsters.enemy}</div>
                </div>

                {/* Princesses - Bottom Left */}
                <div className="bg-pink-600/20 border-2 border-pink-500 p-6 rounded-lg text-center backdrop-blur-md shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:scale-105 transition-transform">
                   <div className="font-fantasy text-pink-400 text-3xl mb-2 uppercase tracking-widest">{r.factions.princesses.name}</div>
                   <div className="text-sm text-pink-100/90 font-serif">{r.factions.princesses.allies}</div>
                   <div className="text-sm text-red-400 font-bold mt-2">{r.factions.princesses.enemy}</div>
                </div>

                {/* Villains - Bottom Right (Moved to match diagram) */}
                <div className="bg-gray-800 border-2 border-gray-500 p-6 rounded-lg text-center backdrop-blur-md shadow-[0_0_25px_rgba(107,114,128,0.3)] hover:scale-105 transition-transform">
                   <div className="font-fantasy text-gray-200 text-3xl mb-2 uppercase tracking-widest">{r.factions.villains.name}</div>
                   <div className="text-sm text-gray-300/90 font-serif">{r.factions.villains.allies}</div>
                   <div className="text-sm text-red-400 font-bold mt-2">{r.factions.villains.enemy}</div>
                </div>

             </div>
          </div>
          <p className="text-center text-gray-400 mt-12 text-sm italic">
            {r.factions.warn}
          </p>
        </div>

      </div>
    </section>
  );
};

export default GameRules;