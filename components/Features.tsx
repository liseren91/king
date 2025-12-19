import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-gray-900 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-fantasy font-bold text-gray-100 mb-4">{t.features.title}</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.features.items.map((feature, idx) => (
            <div key={idx} className="group relative p-8 bg-gray-950 border border-gray-800 rounded-lg hover:border-amber-700/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 border border-amber-700 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-fantasy font-bold text-amber-500 mb-3 text-center group-hover:text-amber-400">{feature.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;