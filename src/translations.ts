export type TranslationKeys = 'start' | 'calculateXY' | 'calculateZ' | 'figurativeElement' | 'ability' | 'meaning' | 'numberAndQuantity' | 'oracle' | 'instructions' | 'oracleGameText' | 'oracleGameTitle' | 'restart';

export const translations: Record<'it' | 'en', Record<TranslationKeys, string>> = {
  it: {
    start: 'Inizia',
    calculateXY: 'Calcola X e Y',
    calculateZ: 'Calcola Z',
    figurativeElement: 'Elemento Figurativo',
    ability: 'Abilità',
    meaning: 'Significato',
    numberAndQuantity: 'Numero e Quantità',
    oracle: 'Oracolo',
    instructions: 'Istruzioni',
    oracleGameTitle: 'UN GIOCO D\'ORACOLO',
    oracleGameText: 'Trinity è un modello del mondo composto da simboli elementari. Trinity Tarot sviluppa questo modello in un gioco d\'oracolo. Basato sul ‘linguaggio’ intuitivo delle immagini, piuttosto che delle parole, ti permette di attivare strati più profondi della tua coscienza – e quindi immergerti in fasi più profonde di auto-riflessione e orientamento.',
    restart: 'Ricomincia'
  },
  en: {
    start: 'Start',
    calculateXY: 'Calculate X and Y',
    calculateZ: 'Calculate Z',
    figurativeElement: 'Figurative Element',
    ability: 'Ability',
    meaning: 'Meaning',
    numberAndQuantity: 'Number and Quantity',
    oracle: 'Oracle',
    instructions: 'Instructions',
    oracleGameTitle: 'AN ORACLE GAME',
    oracleGameText: 'Trinity is a model of the world composed of elementary symbols. Trinity Tarot develops this model into an oracle game. Based on the intuitive ‘language’ of images, rather than words, it enables you to activate deeper layers of your consciousness – and thereby immerse into deeper stages of self-reflection and orientation.',
    restart: 'Restart'
  }
};

export const t = (key: TranslationKeys, lang: 'it' | 'en'): string => {
  return translations[lang][key];
};