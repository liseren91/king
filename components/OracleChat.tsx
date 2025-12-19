import React, { useState, useRef, useEffect } from 'react';
import { consultOracle } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const OracleChat: React.FC = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when language changes
  useEffect(() => {
    setMessages([{ role: 'model', content: t.oracle.initial }]);
  }, [language, t.oracle.initial]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Only scroll if there are user messages to avoid scrolling down the page
    // on initial load or language switch
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await consultOracle(input, language);
    
    setMessages(prev => [...prev, { role: 'model', content: responseText }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="oracle" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] bg-gray-900 border-t border-b border-amber-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-5xl">🔮</span>
          <h2 className="text-3xl md:text-4xl font-fantasy font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 mt-4">
            {t.oracle.title}
          </h2>
          <p className="text-amber-900/60 mt-2 font-fantasy uppercase text-sm tracking-[0.3em]">{t.oracle.poweredBy}</p>
        </div>

        <div className="bg-gray-950 border-4 border-double border-amber-800 rounded-lg shadow-[0_0_50px_rgba(180,83,9,0.2)] overflow-hidden flex flex-col h-[500px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-4 rounded-lg relative ${
                    msg.role === 'user' 
                      ? 'bg-amber-900/40 text-amber-100 border border-amber-700/50 rounded-br-none' 
                      : 'bg-gray-900/80 text-gray-200 border border-gray-700 rounded-bl-none shadow-lg'
                  }`}
                >
                  <p className="leading-relaxed font-serif">{msg.content}</p>
                  {msg.role === 'model' && (
                    <span className="absolute -left-2 -top-2 text-amber-500 text-xl">✧</span>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-gray-900/50 text-amber-500 p-4 rounded-lg border border-gray-800 italic font-fantasy">
                  {t.oracle.loading}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900 border-t border-amber-900 flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.oracle.placeholder}
              className="flex-1 bg-gray-950 text-amber-100 placeholder-gray-600 border border-amber-900/50 rounded p-3 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-serif"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="px-6 py-2 bg-amber-800 hover:bg-amber-700 disabled:opacity-50 text-white font-fantasy uppercase tracking-wider rounded transition-colors border border-amber-600"
            >
              {t.oracle.btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OracleChat;