type TranslationKeys = 'start' | 'calculateXY' | 'calculateZ';

export const translations: Record<'it' | 'en', Record<TranslationKeys, string>> = {
  it: {
    start: 'Inizia',
    calculateXY: 'Calcola X e Y',
    calculateZ: 'Calcola Z',
  },
  en: {
    start: 'Start',
    calculateXY: 'Calculate X and Y',
    calculateZ: 'Calculate Z',
  }
};

export type Language = 'it' | 'en';

export function t(key: TranslationKeys, lang: Language): string {
  return translations[lang][key];
}