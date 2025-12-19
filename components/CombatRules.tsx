import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CombatRules: React.FC = () => {
  const { t } = useLanguage();
  const c = t.combat;

  return (
    <section id="combat" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] bg-gray-950 border-t border-amber-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fantasy text-amber-500 mb-4 tracking-widest uppercase">{c.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* General & Equipment Column */}
          <div className="md:col-span-5 space-y-8">
            
            {/* General */}
            <div className="bg-gray-900/90 border border-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-fantasy text-amber-500 mb-6 uppercase tracking-widest">{c.general.title}</h3>
              <ul className="space-y-3">
                {c.general.list.map((item, i) => (
                   <li key={i} className="flex items-start text-gray-300">
                     <span className="mr-3 text-amber-600 mt-1">❖</span>
                     <span className="leading-relaxed">{item}</span>
                   </li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="bg-gray-900/90 border border-gray-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-fantasy text-amber-500 mb-6 uppercase tracking-widest">{c.equipment.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed italic">{c.equipment.desc}</p>
              
              <div className="p-4 bg-gray-950 rounded border border-gray-800 mb-4">
                 <strong className="block text-gray-200 mb-1 font-fantasy tracking-wide uppercase text-xs">Slots</strong>
                 <span className="text-amber-500/90 font-mono text-sm">{c.equipment.slots}</span>
              </div>
              <p className="text-xs text-gray-500 italic">{c.equipment.mechanic}</p>
            </div>

            {/* Combat Flow */}
            <div className="bg-gray-900/90 border border-gray-700 rounded-lg p-6 shadow-lg">
               <h3 className="text-2xl font-fantasy text-amber-500 mb-6 uppercase tracking-widest">{c.flow.title}</h3>
               <div className="mb-4 pb-4 border-b border-gray-800">
                 <div className="text-amber-400 font-fantasy uppercase tracking-wider mb-1">Start</div>
                 <div className="text-gray-300 text-sm leading-relaxed">{c.flow.start}</div>
               </div>
               <div className="mb-4">
                 <div className="text-amber-400 font-fantasy uppercase tracking-wider mb-1">Round</div>
                 <div className="text-gray-300 text-sm leading-relaxed">{c.flow.round}</div>
               </div>
               
               <div className="space-y-3 mt-6">
                 {c.flow.actions.map((act, i) => (
                   <div key={i} className="bg-gray-950 p-4 rounded border border-gray-800 hover:border-amber-900/50 transition-colors">
                     <span className="text-amber-500 font-fantasy tracking-wide block mb-1">{act.name}</span>
                     <span className="text-gray-400 text-xs leading-relaxed">{act.desc}</span>
                   </div>
                 ))}
               </div>
            </div>

          </div>

          {/* Death Words & Damage Column */}
          <div className="md:col-span-7 space-y-8">
            
            {/* Escalation Rule */}
            <div className="bg-gradient-to-r from-red-950/20 to-gray-900 border border-red-900/40 rounded-lg p-8 shadow-[0_0_30px_rgba(220,38,38,0.05)]">
               <div className="flex items-start gap-4 mb-6">
                 <div className="text-3xl filter drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">⚠️</div>
                 <h3 className="text-2xl font-fantasy text-red-500 uppercase tracking-widest pt-1">Escalation Rule</h3>
               </div>
               <div className="space-y-4 text-red-200/80 text-base italic border-l-2 border-red-900/50 pl-6">
                  {c.words.escalation.map((line, i) => (
                    <p key={i} className="leading-relaxed">{line}</p>
                  ))}
               </div>
            </div>

            {/* Death Words */}
            <div className="bg-gray-900/90 border border-gray-700 rounded-lg p-8 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <h3 className="text-3xl font-fantasy text-red-500 mb-8 text-center uppercase tracking-widest">{c.words.title}</h3>
               
               <div className="space-y-6">
                  {c.words.levels.map((lvl, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
                      <div className="relative border-l-2 border-red-900/30 pl-6 py-2 group-hover:border-red-600 transition-colors">
                         <div className="text-gray-500 font-fantasy uppercase text-xs tracking-widest mb-1">{lvl.lvl}</div>
                         <div className="text-amber-500 font-fantasy text-xl tracking-wide">{lvl.list}</div>
                      </div>
                    </div>
                  ))}
               </div>

               <div className="mt-8 pt-6 border-t border-gray-800">
                  <h4 className="text-center text-gray-400 font-fantasy uppercase tracking-widest mb-4">
                    {c.words.consequences.intro}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {c.words.consequences.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2">➤</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            {/* Aftermath */}
            <div className="bg-gray-900/90 border border-gray-700 rounded-lg p-6 shadow-lg">
               <h3 className="text-2xl font-fantasy text-amber-500 mb-6 uppercase tracking-widest">{c.aftermath.title}</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {c.aftermath.states.map((state, i) => (
                   <div key={i} className="bg-gray-950 p-4 rounded border border-gray-800 hover:border-amber-700 transition-colors">
                      <div className="text-amber-500 font-fantasy tracking-wide mb-2 text-sm h-10 flex items-center">{state.name}</div>
                      <div className="text-gray-400 text-xs leading-relaxed italic">{state.desc}</div>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>

        {/* Captivity & Mercy Rules - Redesigned to match site style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Captivity Rules */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-900/5 rounded-lg -m-1 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/90 border-2 border-purple-900/30 rounded-lg overflow-hidden shadow-2xl h-full flex flex-col">
              <div className="bg-purple-950/40 p-6 border-b border-purple-900/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-fantasy text-purple-400 uppercase tracking-widest">{c.captivity.title}</h3>
                  <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">⛓️</span>
                </div>
                <div className="h-0.5 w-16 bg-purple-600"></div>
              </div>
              
              <div className="p-8 space-y-8 flex-grow">
                {/* Ways to capture */}
                <div>
                  <p className="text-gray-400 font-serif italic mb-6 border-l-2 border-purple-800/50 pl-4">{c.captivity.intro}</p>
                  <div className="space-y-4">
                    {c.captivity.ways.map((way, i) => (
                      <div key={i} className="flex items-start gap-4 bg-gray-950/50 p-4 rounded border border-gray-800 group-hover:border-purple-900/30 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 font-fantasy shrink-0 border border-purple-700/50">
                          {i + 1}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">{way}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Prison Logic */}
                <div className="bg-gray-950 border border-purple-900/20 rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <h4 className="text-xl font-fantasy text-purple-400 mb-4 flex items-center gap-2 tracking-widest uppercase">
                    <span className="text-purple-500 text-2xl">🏰</span> {c.captivity.inPrison.title}
                  </h4>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-base">{c.captivity.inPrison.desc}</p>
                    
                    <div className="bg-purple-900/10 border-l-2 border-purple-600 p-5 rounded-r text-gray-300 text-sm italic">
                      {c.captivity.inPrison.prevent}
                    </div>
                    
                    <p className="text-gray-300 text-base leading-relaxed">{c.captivity.inPrison.escape}</p>
                    
                    <div className="pt-6 mt-6 border-t border-gray-800 space-y-3">
                      <div className="flex items-center gap-2 text-red-500 text-xs font-fantasy uppercase tracking-widest">
                        <span className="animate-pulse">⚠️</span> {c.captivity.inPrison.noChase}
                      </div>
                      <div className="text-gray-500 text-xs italic leading-relaxed">
                        {c.captivity.inPrison.exception}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mercy Rules */}
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-900/5 rounded-lg -m-1 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/90 border-2 border-amber-900/30 rounded-lg overflow-hidden shadow-2xl h-full flex flex-col">
              <div className="bg-amber-950/30 p-6 border-b border-amber-900/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-fantasy text-amber-500 uppercase tracking-widest">{c.mercy.title}</h3>
                  <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">🕊️</span>
                </div>
                <div className="h-0.5 w-16 bg-amber-600"></div>
              </div>
              
              <div className="p-8 space-y-8 flex-grow">
                <div className="space-y-6">
                  <p className="text-gray-400 font-serif italic border-l-2 border-amber-800/50 pl-4">{c.mercy.intro}</p>
                  
                  {/* Ritual Phrase */}
                  <div className="relative py-8 px-4 text-center">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
                    <div className="relative inline-block bg-gray-900 px-8 py-4 border border-amber-700/50 rounded shadow-[0_0_30px_rgba(245,158,11,0.1)] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
                      <span className="text-2xl md:text-3xl font-fantasy text-amber-200 tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        "Я пощажу тебя!"
                      </span>
                      <div className="absolute -top-2 -left-2 text-amber-600 text-2xl font-serif">❝</div>
                      <div className="absolute -bottom-2 -right-2 text-amber-600 text-2xl font-serif rotate-180">❝</div>
                    </div>
                  </div>

                  <div className="bg-amber-900/10 border border-amber-900/20 rounded p-6">
                    <p className="text-gray-300 leading-relaxed text-center font-serif text-lg">
                      {c.mercy.noFinish}
                    </p>
                  </div>

                  {/* Reward Card */}
                  <div className="bg-gray-950 border border-amber-900/30 rounded-lg p-6 relative group/reward overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-900/5 rounded-full blur-2xl -mb-12 -mr-12 group-hover/reward:scale-150 transition-transform duration-700"></div>
                    <h4 className="text-lg font-fantasy text-amber-400 mb-4 flex items-center gap-2">
                      <span className="text-xl">🤝</span> Взамен:
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-amber-800/30 pl-4 py-1">
                      {c.mercy.reward}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Footer for cards */}
              <div className="h-2 w-full bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CombatRules;