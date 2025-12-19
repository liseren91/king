import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../data/translations';
import { Lock, Unlock, Eye, EyeOff, ShieldAlert, ArrowLeft, Languages } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const MasterLayout = () => {
  const { language, setLanguage } = useLanguage();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const t = translations[language].mastersArea;
  const SECRET_PASSWORD = 'OneDayAtNoviSad';

  useEffect(() => {
    const authStatus = localStorage.getItem('master_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
      localStorage.setItem('master_auth', 'true');
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('master_auth');
    navigate('/master');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-[100px]" />
        </div>

        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-20">
          <Link to="/" className="text-gray-500 hover:text-amber-500 transition-all flex items-center gap-2 font-fantasy uppercase tracking-widest text-sm group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            {language === 'ru' ? 'Вернуться на сайт' : 'Back to site'}
          </Link>

          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 border border-amber-900/30 rounded-lg text-xs font-fantasy tracking-wider text-amber-500 hover:bg-gray-800 transition-colors backdrop-blur-sm"
          >
            <Languages size={14} />
            <span>{language === 'en' ? 'RU' : 'EN'}</span>
          </button>
        </div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="bg-gray-900/50 border border-amber-900/30 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-amber-900/20 rounded-full flex items-center justify-center border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                <Lock className="text-amber-500 w-10 h-10" />
              </div>
            </div>
            
            <h2 className="text-3xl font-fantasy text-amber-500 text-center mb-2 tracking-widest uppercase">
              {t.title}
            </h2>
            <p className="text-gray-400 text-center mb-8 font-serif italic">
              {t.loginSubtitle}
            </p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full bg-gray-950 border border-gray-800 rounded-xl py-4 px-5 text-gray-200 focus:outline-none focus:border-amber-500/50 transition-all shadow-inner placeholder:text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {error && (
                <div className="flex items-center gap-3 text-red-400 text-sm animate-pulse bg-red-900/10 p-3 rounded-lg border border-red-900/20">
                  <ShieldAlert size={18} />
                  <span>{t.error}</span>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-amber-900/40 hover:bg-amber-800/60 border border-amber-500/30 text-amber-500 font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] uppercase tracking-[0.2em] text-sm"
              >
                {t.loginBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 selection:bg-amber-900 selection:text-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
      </div>

      <nav className="border-b border-amber-900/30 bg-gray-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/master" className="text-xl font-fantasy text-amber-500 tracking-widest uppercase hover:text-amber-400 transition-colors">
            King's Bounty <span className="text-gray-600 text-sm ml-2 font-sans tracking-normal">Master Portal</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1 bg-amber-900/20 border border-amber-500/30 rounded text-xs font-fantasy tracking-wider text-amber-500 hover:bg-amber-900/40 transition-colors"
            >
              <Languages size={14} />
              <span>{language === 'en' ? 'RU' : 'EN'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-amber-500 transition-colors text-xs uppercase tracking-widest flex items-center gap-2 font-fantasy"
            >
              <Lock size={14} />
              {language === 'ru' ? 'Выйти' : 'Logout'}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 relative z-10">
        <Outlet />
      </main>

      <footer className="py-8 border-t border-amber-900/20 text-center text-gray-600 text-xs uppercase tracking-widest font-fantasy">
        Master Access Terminal v2.0 // Endoria Secret Division
      </footer>
    </div>
  );
};

export default MasterLayout;

