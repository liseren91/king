import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black py-16 border-t border-gray-900 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="font-fantasy text-3xl text-amber-900/40 mb-8 tracking-[0.3em] uppercase transition-colors hover:text-amber-800/60 cursor-default">King's Bounty</h3>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed text-sm italic">
          {t.footer.disclaimer}
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-500 font-fantasy tracking-widest">
          {t.footer.links.map((link, i) => (
             <a key={i} href="#" className="hover:text-amber-500 transition-colors">{link}</a>
          ))}
        </div>
        <div className="mt-8 text-xs text-gray-700">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;