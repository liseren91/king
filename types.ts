export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum GameClass {
  WARRIOR = 'Warrior',
  WIZARD = 'Wizard',
  ROGUE = 'Rogue',
  MONSTER = 'Monster'
}

export interface UnitInfo {
  name: string;
  description: string;
  imageUrl: string;
}

export type Language = 'en' | 'ru';