export type TranslationKeys = 'start' | 'calculateXY' | 'calculateZ' | 'figurativeElement' | 'ability' | 'meaning' | 'numberAndQuantity' | 'oracle' | 'instructions' | 'oracleGameText' | 'oracleGameTitle' | 'oracleGameSubTitle' | 'restart' | 'gameInstructions' | 'instGameTitle' | 'instLayingTitle' | 'instLayingText' | 'instAxialTitle' | 'instAxialText';

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
    oracleGameTitle: 'Il Gioco-Oracolo definitivo',
    oracleGameSubTitle: 'Un aiuto per la navigazione nel mondo',
    oracleGameText: 'Trinity è un modello del mondo composto da simboli elementari. Trinity Tarot sviluppa questo modello in un gioco-oracolo. Basato sul ‘linguaggio’ intuitivo delle immagini anziché delle parole, ti permette di attivare strati più profondi della tua coscienza – e quindi immergerti in fasi più profonde di auto-riflessione e orientamento.',
    restart: 'Ricomincia',
    gameInstructions: 'Istruzioni del Gioco',
    instGameTitle: "Un Gioco-Oracolo",
    instLayingTitle: "Disposizione e lettura",
    instLayingText: "Lo scopo è aggregare coincidenze, generando ciò che lo psicologo C. G. Jung chiamava 'Singolarità'. Pensa a una domanda personale che ti sta a cuore. Un oracolo ha bisogno di una domanda per rispondere.",
    instAxialTitle: "Leggere l'Oracolo della Croce Assiale",
    instAxialText: `Queste sono le istruzioni originali, il processo qui è in realtà quasi completamente automatico.
    
Le prime due carte effettive, A e B, formano l'asse temporale della tua domanda.

La carta A rappresenta l'inizio della situazione o del tema della tua domanda, come il lavoro, un obiettivo personale o una relazione.
La carta B indica la direzione in cui questa situazione si è sviluppata fino a questo momento.

Il passo successivo è determinare la carta X, il primo elemento del tuo oracolo.

La carta X è la carta il cui valore numerico corrisponde alla somma dei valori delle carte A e B.
Se la somma supera 28, utilizza la somma dei checksum delle carte A e B.
Il simbolo sulla carta X indica il comportamento o lo stato mentale su cui dovresti concentrarti per progredire positivamente lungo l'asse temporale della tua domanda.

Le due carte effettive successive, C e D, si riferiscono ai due poli opposti – forze e debolezze – cruciali nel contesto più ampio della tua domanda.

La carta Y, il secondo elemento del tuo oracolo, si determina con la stessa procedura di X, sommando i valori numerici (o i checksum) delle carte C e D.
Il simbolo sulla carta Y indica il comportamento o lo stato mentale su cui dovresti concentrarti per armonizzare i poli opposti rappresentati da C e D.

Infine, la somma di X e Y forma l'asse attorno al quale ruota tutto ciò che è rilevante per la tua domanda.

La carta risultante, Z, è l'elemento chiave e la sintesi del tuo oracolo.

Le procedure e i simboli del Trinity Tarot ti offrono stimoli e direzioni per l'auto-riflessione e l'orientamento.
Come accadeva a Delfi, il compito del destinatario di un oracolo è interpretare questi stimoli e indicazioni attraverso libere associazioni mentali, nel contesto della propria domanda. Le descrizioni dei simboli riportate di seguito potrebbero esserti di aiuto in questo processo.
`,
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
    oracleGameTitle: 'The ultimate Oracle Game',
    oracleGameSubTitle: 'An aid to navigation in the world',
    oracleGameText: 'Trinity is a model of the world composed of elementary symbols. Trinity Tarot develops this model into an oracle game. Based on the intuitive ‘language’ of images, rather than words, it enables you to activate deeper layers of your consciousness – and thereby immerse into deeper stages of self-reflection and orientation.',
    restart: 'Restart',
    gameInstructions: 'Game Instructions',
    instGameTitle: "An Oracle Game",
    instLayingTitle: "Laying and reading",
    instLayingText: "This process is about aggregating coincidences, resulting in what the psychologist C. G. Jung called ‘Singularity’. Think of a personal question you care about. An oracle requires a question to answer.",
    instAxialTitle: "Reading the Axial Cross Oracle",
    instAxialText: `This are the original instructions. The process here is almost completely automatic.

The first two effective cards, A and B, form the time axis of your question. Card A represents the beginning of the situation or theme your question is about – for example, work, a personal goal, or a relationship. Card B represents the direction in which this situation has been heading thus far.

The next step is determining card X, the first element of your oracle. Card X is the card whose numerical value equates to the sum of the values of card A and B. If this sum exceeds 28, use the sum of the checksums of card A and B instead.

The symbol on card X indicates what behaviour or state of mind you should focus on to positively advance along the time axis of your question.

The next two effective cards, C and D, relate to the two opposite poles – strengths and weaknesses – that are crucial in the broader context of your question.

Card Y, the second element of your oracle, is determined in the same fashion as card X, that is, by adding the numerical values (or checksums) of cards C and D.

The symbol on card Y indicates what behaviour or state of mind you should focus on to bring into harmony the opposite poles represented by cards C and D.

Finally, the sum of card X and Y forms the axis around which everything relevant to your question revolves. The resulting card, Z, is the key element and synthesis of your oracle.

The procedures and symbols of Trinity Tarot provide you with stimuli and directions for self-reflection and orientation. As it was in Delphi, your task as the recipient of an oracle is to interpret these stimuli and directions, in free mental association, within the context of your question. The descriptions of the symbols below might help you to that end. 
    `
}
};

export const t = (key: TranslationKeys, lang: 'it' | 'en'): string => {
  return translations[lang][key];
};