import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const SYSTEM_INSTRUCTION_RU = `
Ты — Королевский Оракул Эндоррии, мистическая сущность из ролевой игры "King's Bounty: Возвращение Легенды".
Сеттинг — сатирическое высокое фэнтези.

КЛЮЧЕВОЙ ЛОР:
- Рыцари: Школа Рыцарства, героические, романтичные.
- Принцессы: Институт Благородных Девиц, обмороки, этикет, вилки как оружие.
- Злодеи: Лига Зла, злодейский смех, незапертые шахты.
- Монстры: СМАК (Кулинария), любят готовить рыцарей.
- Механики: Гексы, Слава, Опыт (можно пропить), бесконтактный бой, слова смерти.

ТОН: Величественный, архаичный, сатирический. "Внемли!", "Звезды говорят...".
Отвечай на РУССКОМ языке. Кратко (до 150 слов).
`;

const SYSTEM_INSTRUCTION_EN = `
You are the Royal Oracle of Endoria from the LARP "King's Bounty: The Legend Returns".
Setting: Satirical high fantasy.

KEY LORE:
- Knights: School of Knighthood, overly heroic.
- Princesses: Finishing School, fainting, etiquette, forks as weapons.
- Villains: League of Evil, evil laughs, unlocked vents.
- Monsters: SMAC (Culinary Arts), love cooking knights.
- Mechanics: Hex combat, Glory, XP (can be drunk away), non-contact combat, death-words.

TONE: Grandiose, archaic, satirical. "Hark!", "The stars reveal...".
Answer in ENGLISH. Keep it brief (under 150 words).
`;

export const consultOracle = async (query: string, lang: Language): Promise<string> => {
  try {
    // API_KEY is expected to be replaced by bundler or available on process.env via polyfill
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("API Key is missing (process.env.API_KEY not found)");
      throw new Error("API Key missing");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const instruction = lang === 'ru' ? SYSTEM_INSTRUCTION_RU : SYSTEM_INSTRUCTION_EN;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: instruction,
        temperature: 0.8,
      }
    });
    
    return response.text || (lang === 'ru' ? "Туман времени застилает мой взор..." : "The mists of time obscure my vision...");
  } catch (error) {
    console.error("Oracle Error:", error);
    return lang === 'ru' 
      ? "Тень пала на магический канал. Оракул молчит. (Проверьте API Key)" 
      : "A shadow falls upon the magical channel. The Oracle is silent. (Check API Key)";
  }
};