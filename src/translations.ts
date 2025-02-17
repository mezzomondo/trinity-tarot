export type TranslationKeys = 'start' | 'calculateXY' | 'calculateZ' | 'figurativeElement' | 'ability' | 'meaning' | 'numberAndQuantity' | 'oracle';

export const translations: Record<'it' | 'en', Record<TranslationKeys, string>> = {
    it: {
        start: 'Inizia',
        calculateXY: 'Calcola X e Y',
        calculateZ: 'Calcola Z',
        figurativeElement: 'Elemento Figurativo',
        ability: 'Abilità',
        meaning: 'Significato',
        numberAndQuantity: 'Numero e Quantità',
        oracle: 'Oracolo'
        },
        en: {
        start: 'Start',
        calculateXY: 'Calculate X and Y',
        calculateZ: 'Calculate Z',
        figurativeElement: 'Figurative Element',
        ability: 'Ability',
        meaning: 'Meaning',
        numberAndQuantity: 'Number and Quantity',
        oracle: 'Oracle'
        }
};


export type Language = 'it' | 'en';

export function t(key: TranslationKeys, lang: Language): string {
  return translations[lang][key];
}