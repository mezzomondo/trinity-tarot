import { writable } from 'svelte/store';
import type { Card } from '../types';

export const language = writable<'it' | 'en'>('it'); // 'it' per Italiano, 'en' per Inglese

export const cards: Card[] = [
  {
    id: 1,
    name: { it: "Embrione", en: "Embryo" },
    image: "/images/trinity-tarot-card-01-embryo.jpg",
    figurativeElement: {
      it: "Embrione, il non ancora nato e già vivo. L'uovo fecondato.",
      en: "Embryo, the still unborn and already living. The fertilised egg."
    },
    ability: {
      it: "La prontezza a iniziare che precede il primo passo.",
      en: "The readiness to begin that precedes the first step."
    },
    meaning: {
      it: "L'inizio potenziale, un prerequisito per ogni vero inizio. Impulso iniziale che precede ogni attività. Senza durata propria, è sempre da richiamare alla vita. Cosmologicamente: il senza tempo prima del Big Bang, l'esistente prima del tempo e dello spazio.",
      en: "The potential beginning, a prerequisite for any real beginning. Initiating impulse that precedes every activity. Without own duration, is always to be called into being anew. Cosmological: the timeless before the Big Bang, the existing before time and space."
    },
    numberAndQuantity: {
      it: "UNITÀ. L'unità a riposo in se stessa, prima della molteplicità contabile. L'unico indivisibile prima dell'infinità del divisibile, l'atomo della molteplicità. Tutte le qualità sono contenute nell'unità, che poi si dispiegano in quantità, schemi e cicli. Ogni numero successivo è una forma di gioco dell'unità. Tutti i modelli delle loro combinazioni sono varianti della potenzialità dell'unità. Primo elemento nella triade delle abilità del livello elementare (1, 2, 3). Analogo a 10 nel livello mentale e 19 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base). 10 = 1 + 0 = 1; 19 = 1 + 9 = 10 = 1 + 0 = 1.",
      en: "UNITY. The unity at rest in itself, before the countable multiplicity. The only indivisible before the infinity of the divisible, the atom of multiplicity. All qualities are contained in unity, which later unfold in quantities, patterns and cycles. Each subsequent number is a play form of unity. All patterns of their combinations are variants of the potentiality of unity. First element in the triad of abilities of the elementary level (1, 2, 3). Analogue to 10 in the mental level and 19 in the cosmic level (with the same cross sum, position and core quality). 10 = 1 + 0 = 1; 19 = 1 + 9 = 10 = 1 + 0 = 1."
    },
    contextualDescription: {
      it: "Primo elemento nella triade delle abilità del livello elementare (1, 2, 3). Analogo a 10 nel livello mentale e 19 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base). 10 = 1 + 0 = 1; 19 = 1 + 9 = 10 = 1 + 0 = 1.",
      en: "First element in the triad of abilities of the elementary level (1, 2, 3). Analogue to 10 in the mental level and 19 in the cosmic level (with the same cross sum, position and core quality). 10 = 1 + 0 = 1; 19 = 1 + 9 = 10 = 1 + 0 = 1."
    },
    oracle: {
      it: "Sii pronto a iniziare!",
      en: "Be ready to start!"
    }
  },
  {
    id: 2,
    name: { it: "Occhio", en: "Eye" },
    image: "/images/trinity-tarot-card-02-eye.jpg",
    figurativeElement: {
      it: "Occhio che vede, archeogramma per il risveglio e la percezione in ogni forma. Geroglifico VISTA e AZIONE.",
      en: "Seeing eye, archeogram for waking and perceiving in every form. Hieroglyph SIGHT and DOING."
    },
    ability: {
      it: "Percezione: sensi esterni e interni: vedere, udire, sentire, odorare, pensare, percepire, emozioni.",
      en: "Perceiving: outer and inner senses: seeing, hearing, feeling, smelling, thinking, sensing, emotions."
    },
    meaning: {
      it: "Capacità complessiva di percepire. Prerequisito per questo: Vigilanza. La percezione è un prerequisito per la coscienza e la creatività. La percezione collega il percepente con il percepito: Soggetto con oggetto. All'ego, una controparte. L'inizio della dualità. Con apparenti coppie di opposti: bene/male, luce/buio, sopra/sotto. Il principio connettivo in tutto ciò che vive permette all'elemento attivo (1) di dare impulsi all'elemento passivo/ricevente (3) e a quest'ultimo di reagire ad essi.",
      en: "Overall ability to perceive. Prerequisite for this: Alertness. Perception is a prerequisite for consciousness and creativity. Perception connects the perceiving with the perceived: Subject with object. To the ego, a counterpart. The beginning of duality. With apparent pairs of opposites: good/bad, light/dark, above/below. The all-connecting principle in elementary life enables the active element (1) to give impulses to the passive/receiving element (3) and the latter to react to them."
    },
    numberAndQuantity: {
      it: "DUE. La dualità, gli antipodi. La tensione tra loro forma la prima linea. Dualità. Raddoppiamento/Riflessione dell'unità che si riconosce nell'opposto. L'universo: letteralmente il fronteggiarsi. Secondo elemento nella triade delle abilità del livello elementare (1, 2, 3). Forza connettiva. Analogo a 11 nel piano mentale e 20 nel piano cosmico (con la stessa somma trasversale e posizione).",
      en: "TWO. The duality, the antipodes. The tension between them forms the first line. Duality. Doubling/Reflection of the unity that recognises itself in the opposite. The universe: literally the facing. Second element in the triad of abilities of the elementary level (1, 2, 3). Connecting force. Analogue to 11 in the mental plane and 20 in the cosmic plane (with the same cross sum and position)."
    },
    contextualDescription: {
      it: "Secondo elemento nella triade delle abilità del livello elementare (1, 2, 3). Forza connettiva. Analogo a 11 nel piano mentale e 20 nel piano cosmico (con la stessa somma trasversale e posizione).",
      en: "Second element in the triad of abilities of the elementary level (1, 2, 3). Connecting force. Analogue to 11 in the mental plane and 20 in the cosmic plane (with the same cross sum and position)."
    },
    oracle: {
      it: "Presta attenzione a percepire! Sii vigile!",
      en: "Pay attention to perceive! Be awake!"
    }
  },
  {
    id: 3,
    name: { it: "Passo", en: "Step" },
    image: "/images/trinity-tarot-card-03-step.jpg",
    figurativeElement: {
      it: "Gambe che camminano, geroglifico per il movimento.",
      en: "Walking legs, hieroglyph for movement."
    },
    ability: {
      it: "Movimento: movimento fisico, movimento mentale, movimento spirituale. Cambio di posizione, crescita, fertilità, sviluppo.",
      en: "Movement: physical movement, mental movement, spiritual movement. Change of location, growth, fertility, development."
    },
    meaning: {
      it: "La dimensione del tempo nello spazio. Il movimento è la somma e la conseguenza dei primi due elementi. Ogni azione è movimento. Respirare è movimento. Pensare è movimento. La crescita è movimento. Ricordare muove il passato nel presente. Aspettare è una forma di ricordare. La trinità gioca un ruolo speciale in tutte le tradizioni. Forma una nuova unità attiva. Trinità dall'interazione di tre principi: attivo - reattivo/ricevente - mediatrice/creativa. Tutte le cose buone vengono in tre. Fede / amore / speranza. Il bello / vero / buono.",
      en: "The dimension of time in space. Movement is the sum and consequence of the first two elements. Every action is movement. Breathing is movement. Thinking is movement. Growth is movement. Remembering moves the past into the now. Expecting is a form of remembering. The trinity plays a special role in all traditions. It forms a new active unity. Trinity from the interaction of three principles: active - reactive/receiving - mediating/creative. All good things come in threes. Faith / love / hope. The beautiful / true / good."
    },
    numberAndQuantity: {
      it: "TRE. La trinità. Con tre impulsi diversi che interagiscono per creare una nuova unità dinamica. Primo impulso: attivo, trasmettitore. Secondo impulso: ricettivo, ricevitore. Terzo impulso: unificante. Forma: il triangolo, tre punti definiscono la superficie. Terzo elemento nella triade delle abilità del livello elementare (1, 2, 3). Analogo a 12 nel piano mentale e 21 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base). Il principio passivo, accettante nella vita elementare.",
      en: "THREE. The trinity. With three different impulses that interact to create a dynamic new unity. First impulse: active, transmitter. Second impulse: receptive, receiver. Third impulse: unifying. Shape: the triangle, three points define the surface. Third element in the triad of abilities of the elementary level (1, 2, 3). Analogue to 12 in the mental plane and 21 in the cosmic plane (with the same cross sum, position and core quality). The passive, accepting principle in elemental life."
    },
    contextualDescription: {
      it: "Terzo elemento nella triade delle abilità del livello elementare (1, 2, 3). Analogo a 12 nel piano mentale e 21 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base). Il principio passivo, accettante nella vita elementare.",
      en: "Third element in the triad of abilities of the elementary level (1, 2, 3). Analogue to 12 in the mental plane and 21 in the cosmic plane (with the same cross sum, position and core quality). The passive, accepting principle in elemental life."
    },
    oracle: {
      it: "Presta attenzione a ogni forma di movimento, fisico e mentale!",
      en: "Pay attention to every form of movement, physical and mental!"
    }
  },
  {
    id: 4,
    name: { it: "Mano", en: "Hand" },
    image: "/images/trinity-tarot-card-04-hand.jpg",
    figurativeElement: {
      it: "Mano, il mondo delle azioni, attività.",
      en: "Hand, the world of actions, activities."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Ogni azione avviene nel tempo. Il suo effetto è in un futuro che presto sarà passato. L'impulso per l'azione può venire dal futuro, così come dal passato, che diventa futuro attraverso l'azione. Quaternità. Fin dai tempi antichi, quattro è il numero della materia. Quattro elementi, quattro stagioni, quattro direzioni del vento, quattro umori. Il paradiso aveva quattro fiumi. Al centro c'era l'albero della conoscenza. Quattro è il principio attivo della triade dei luoghi d'azione e fornisce l'impulso per l'elemento ricettivo, passivo (6), da cui è attratto.",
      en: "Every action happens in time. Its effect is in a future that will soon be the past. The impulse for action can come from the future, as well as from the past, which becomes the future through action. Fourness. Since ancient times, four has been the number of matter. Four elements, four seasons, four wind directions, four humours. Paradise had four rivers. In the centre was the tree of knowledge. Four is the active principle of the triad of places of action and provides the impulse for the receptive, passive element (6), from which it is attracted."
    },
    numberAndQuantity: {
      it: "QUATTRO. La quaternità consiste in due coppie che si incontrano in una prima forma di compagnia. È simmetrica. Ogni punto tocca due vicini diretti e ha una controparte più distante, diagonale. Il quadrato simboleggia i quattro elementi e l'ordine materiale. Quattro punti definiscono lo spazio e formano il tetraedro con quattro facce triangolari, quattro bordi e quattro angoli. Primo dei tre luoghi di azione in cui le abilità (carte 1, 2, 3) si manifestano a livello elementare. Elemento connettivo nella triade dei luoghi d'azione. Analogo a 13 nel livello mentale e 22 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "FOUR. The quaternity consists of two pairs that meet in a first form of company. It is symmetrical. Each point touches two direct neighbours and has a more distant, diagonal counterpart. The square symbolises the four elements and material order. Four points define the space and form the tetrahedron with four triangular faces, four edges and four corners. First of the three places of action where the abilities (cards 1, 2, 3 ) manifest on the elemental level. Connecting element in the triad of places of action. Analogue to 13 on the mental level and 22 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Primo dei tre luoghi di azione in cui le abilità (carte 1, 2, 3) si manifestano a livello elementare. Elemento connettivo nella triade dei luoghi d'azione. Analogo a 13 nel livello mentale e 22 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First of the three places of action where the abilities (cards 1, 2, 3 ) manifest on the elemental level. Connecting element in the triad of places of action. Analogue to 13 on the mental level and 22 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione alle azioni e ai loro effetti!",
      en: "Pay attention to actions and their effects!"
    }
  },
  {
    id: 5,
    name: { it: "Bocca", en: "Mouth" },
    image: "/images/trinity-tarot-card-05-mouth.jpg",
    figurativeElement: {
      it: "Bocca.",
      en: "Mouth."
    },
    ability: {
      it: "Capacità mentale di usare la lingua come strumento.",
      en: "The mental ability to use the tongue as a tool."
    },
    meaning: {
      it: "Il mondo del linguaggio, della comunicazione: Tutte le cose viventi comunicano. Animali e piante, tutti gli organi tra loro, cervello con intestino, cellule con cellule vicine, soli con pianeti. Luce con gravità. 5 Comunica con 4 e 6. Il linguaggio porta 'intuizione' dal mondo impalpabile delle emozioni (6 BACIO) nel mondo delle azioni (4 MANO) e gli effetti delle azioni nel mondo delle emozioni.",
      en: "The world of language, of communication: All living things communicate. Animals and plants, all organs with each other, brain with intestine, cells with neighbouring cells, suns with planets. Light with gravity. 5 Communicates with 4 and 6. Language brings ‘intuition’ from the ungraspable world of emotions (6 KISS) into the world of actions (4 HAND) and the effects of actions back into the world of emotions."
    },
    numberAndQuantity: {
      it: "CINQUE. L'insieme 5 è formato da due gruppi di tre che hanno un elemento in comune, che funge da ponte di collegamento tra i due. Cinque dita. Quintessenza. La croce, un punto al centro che collega quattro direzioni. Corpo: la piramide, un punto in altezza collega quattro angoli a terra. Secondo dei tre luoghi d'azione/mondi in cui le abilità (1, 2, 3) si manifestano a livello elementare. Elemento connettivo nella triade dei luoghi d'azione. Analogo a 14 nel livello mentale e 23 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "FIVE. The set 5 is formed from two groups of three that have one element in common, which acts as a connecting bridge between the two. Five fingers. Quintessence. The cross, a point in the centre connecting four directions. Body: the pyramid, a point in the height connects four corners on the ground. Second of the three places of action / worlds on which the abilities (1, 2, 3) manifest on the elemental level. Connecting element in the triad of places of action. Analogue to 14 on the mental level and 23 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Secondo dei tre luoghi d'azione/mondi in cui le abilità (1, 2, 3) si manifestano a livello elementare. Elemento connettivo nella triade dei luoghi d'azione. Analogo a 14 nel livello mentale e 23 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second of the three places of action / worlds on which the abilities (1, 2, 3) manifest on the elemental level. Connecting element in the triad of places of action. Analogue to 14 on the mental level and 23 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione al modo in cui comunichi!",
      en: "Pay attention to the way you communicate!"
    }
  },
  {
    id: 6,
    name: { it: "Bacio", en: "Kiss" },
    image: "/images/trinity-tarot-card-06-kiss.jpg",
    figurativeElement: {
      it: "Bacio.",
      en: "Kiss."
    },
    ability: {
      it: "La capacità di amare e di essere amati.",
      en: "The ability to love and to be loved."
    },
    meaning: {
      it: "Il mondo del sensuale, emozionale, Eros. Qualità: Amore, attrazione, repulsione. A livello funzionale, questa stazione è legata al compito elementare della riproduzione. L'efficacia è premiata qui con un rilascio di piacere. Allo stesso modo, il piacere mentale e il piacere cosmico sono percepiti rispettivamente nelle stazioni 15 SIGNIFICATO e 24 PIEDI. Il principio ricettivo nella vita elementare. Reagisce agli impulsi dalla zona efficace delle azioni che essa, in attesa, evoca. Tipico per 6, 15, 24, comandamenti, proibizioni e tabù hanno effetto qui.",
      en: "The world of the sensual, emotional, Eros. Quality: Love, attraction, repulsion. On a functional level, this station is linked to the elementary task of reproduction. Effectiveness is rewarded here with a release of pleasure. Similarly, mental pleasure and cosmic pleasure are perceived in the stations 15 MEANING and 24 FEET respectively. The receptive principle in elementary life. It reacts to impulses from the effective zone of the actions that it, waiting, evokes. Typical for 6, 15, 24, commandments, prohibitions and taboos have an effect here."
    },
    numberAndQuantity: {
      it: "SEI. 6 è il numero cosiddetto 'perfetto'. L'unico numero nell'infinità dei numeri che è sia la somma che la moltiplicazione dei suoi divisori. Primo numero triangolare: 1+2+3. Relativo agli altri numeri triangolari 10, 15, 21, 28. Come simbolo: due triangoli intrecciati: l'esagramma. Gli esagoni regolari riempiono un piano senza spazi vuoti. Forma del nido d'ape. Terzo dei tre luoghi d'azione/mondi in cui le abilità (1, 2, 3) si manifestano a livello elementare. Elemento reattivo nella triade dei centri d'azione. Reagisce agli impulsi emanati da 4 e trasmessi da 5. Analogo a 15 nel livello mentale e 24 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "SIX. 6 is the so-called ‘perfect number’. The only number in the infinity of numbers that is both the sum and multiplication of its divisors. First triangular number: 1+2+3. Related to the other triangular numbers 10, 15, 21, 28. As a symbol: two triangles interlocked: the hexagram. Regular hexagons fill a plane without gaps. Shape of honeycomb. Third of the three places of action / worlds on which the abilities (1, 2, 3) manifest on the elemental level. Reactive element in the triad of centres of action. Reacts to impulses emanating from 4 and transmitted by 5. Analogue to 15 on the mental level and 24 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Terzo dei tre luoghi d'azione/mondi in cui le abilità (1, 2, 3) si manifestano a livello elementare. Elemento reattivo nella triade dei centri d'azione. Reagisce agli impulsi emanati da 4 e trasmessi da 5. Analogo a 15 nel livello mentale e 24 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third of the three places of action / worlds on which the abilities (1, 2, 3) manifest on the elemental level. Reactive element in the triad of centres of action. Reacts to impulses emanating from 4 and transmitted by 5. Analogue to 15 on the mental level and 24 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione alla componente erotica!",
      en: "Pay attention to the erotic component!"
    }
  },
  {
    id: 7,
    name: { it: "Pantera", en: "Panther" },
    image: "/images/trinity-tarot-card-07-panther.jpg",
    figurativeElement: {
      it: "Pantera, archeogramma per l'indomito, elegante.",
      en: "Panther, archeogram for the untamed, sleek."
    },
    ability: {
      it: "La forza impulsiva e attiva della giovinezza.",
      en: "The impulsive and active power of youth."
    },
    meaning: {
      it: "Prima fase della realizzazione: giovinezza, Curiosità. Individualità. Testare la propria forza e i propri limiti. Partire per nuovi territori. Rilascio dalla protezione della famiglia. 7 - un numero speciale in molte tradizioni: sette giorni. Sette note nell'ottava. Sette colori nell'arcobaleno.",
      en: "First phase of realisation: youth, Curiosity. Individuality. Testing one‘s own strength and limits. Setting off into new territory. Release from the protection of the family. 7 - a special number in many traditions: seven days. Seven notes in the octave. Seven colours in the rainbow."
    },
    numberAndQuantity: {
      it: "SETTE. 6 punti intorno a un nucleo interno di dimensioni uguali. I punti esterni proteggono/nascondono quello interno, che dà loro supporto. Prima stazione nella triade delle fasi in cui le abilità (1,2,3) si sviluppano a livello elementare. Potere impulsivo e attivo. Analogo a 16 nel livello mentale e 25 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "SEVEN. 6 points around an inner core of equal size. The outer ones protect/hide the inner one, which gives them support. First station in the triad Phases in which the abilities (1,2,3) develop on the elementary level. Impulsive and active power. Analogue to 16 on the mental level and 25 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Prima stazione nella triade delle fasi in cui le abilità (1,2,3) si sviluppano a livello elementare. Potere impulsivo e attivo. Analogo a 16 nel livello mentale e 25 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First station in the triad Phases in which the abilities (1,2,3) develop on the elementary level. Impulsive and active power. Analogue to 16 on the mental level and 25 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Sii indomito!",
      en: "Be untamed!"
    }
  },
  {
    id: 8,
    name: { it: "Equilibrio", en: "Balance" },
    image: "/images/trinity-tarot-card-08-balance.jpg",
    figurativeElement: {
      it: "Ciclo, ascendente e discendente.",
      en: "Loop, ascending and descending."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Il percorso della mezza età. Il potere stabilizzante dell'equilibrio. 'Giustizia'. La persona giusta presta attenzione al trattamento equo di tutte le parti e si mette in secondo piano. Fase di bilanciamento. 8, 17, 26 sono fasi di transizione: Il dubbio. Due direzioni sono possibili. Media tra giovinezza (7 PANTERA) e vecchiaia (9 RIPOSO).",
      en: "The path of midlife. The stabilising power of balance. ‘Justice’. The righteous person pays attention to equal treatment of all parties and puts himself in the background. Phase of balancing. 8, 17, 26 are transitional phases: Doubt. Two directions are possible. Mediates between youth (7 PANTHER) and old age (9 REST)."
    },
    numberAndQuantity: {
      it: "OTTO. Il quadrato 3 x 3 senza un centro. O 2 x 4, scala del materiale. 8 = 2 ³, primo cubo. Come solido: l'ottagono, la doppia piramide, forma cristallina del carbonio, diamante. La quantità 8 può essere divisa tre volte in parti uguali. Seconda stazione nella triade delle fasi in cui le abilità (1,2,3) si sviluppano a livello elementare. Forza connettiva e bilanciante. Analogo a 17 nel livello mentale e 26 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "EIGHT. The square 3 x 3 without a centre. Or 2 x 4, scales of the material. 8 = 2 ³, first cube. As a solid: the octagon, the double pyramid, crystal form of carbon, diamond. The quantity 8 can be divided three times into equal parts. Second station in the triad of phases in which the abilities (1,2,3) develop on the elementary level. Connecting and balancing force. Analogue to 17 on the mental level and 26 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Seconda stazione nella triade delle fasi in cui le abilità (1,2,3) si sviluppano a livello elementare. Forza connettiva e bilanciante. Analogo a 17 nel livello mentale e 26 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second station in the triad of phases in which the abilities (1,2,3) develop on the elementary level. Connecting and balancing force. Analogue to 17 on the mental level and 26 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione all'equilibrio!",
      en: "Pay attention to balance!"
    }
  },
  {
    id: 9,
    name: { it: "Riposo", en: "Rest" },
    image: "/images/trinity-tarot-card-09-rest.jpg",
    alternateImage: "/images/magic-square-3x3-1.jpg",
    figurativeElement: {
      it: "Figura che riposa.",
      en: "Resting figure."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Fase: vecchiaia, 'riposo meritato', esperienza accumulata.",
      en: "Phase: old age, ‘earned rest’, accumulated experience."
    },
    numberAndQuantity: {
      it: "NOVE. La totalità dei numeri di base in un quadrato. Quadrato magico. Un nuovo ciclo inizia dopo 9. Quadrato magico 3 × 3. somme, anche in diagonale 15. Terza stazione nella triade delle fasi in cui le abilità (1,2,3) si sviluppano a livello elementare. Potere ricettivo e reattivo. Analogo a 18 nel livello mentale e 27 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "NINE. The totality of the basic numbers in a square. Magic square. A new cycle begins after 9. Magic square 3 × 3. sums, also diagonally 15. Third station in the triad of phases in which the abilities (1,2,3) develop on the elementary level. Receptive and reactive power. Analogue to 18 on the mental level and 27 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Terza stazione nella triade delle fasi in cui le abilità (1,2,3) si sviluppano a livello elementare. Potere ricettivo e reattivo. Analogo a 18 nel livello mentale e 27 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third station in the triad of phases in which the abilities (1,2,3) develop on the elementary level. Receptive and reactive power. Analogue to 18 on the mental level and 27 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "La forza risiede nella tranquillità!",
      en: "Strength resides in tranquillity!"
    }
  },
  {
    id: 10,
    name: { it: "Chiave", en: "Key" },
    image: "/images/trinity-tarot-card-10-key.jpg",
    figurativeElement: {
      it: "Chiave.",
      en: "Key."
    },
    ability: {
      it: "La capacità mentale di usare la mente come strumento.",
      en: "The mental ability to use the mind as a tool."
    },
    meaning: {
      it: "Ingresso nel mondo mentale. Distingue il mondo umano dal mondo animale. Biblicamente: il frutto dell'albero della conoscenza. Uscita dal paradiso. Apertura alla cultura. La chiave apre e chiude. Il mondo mentale è il ponte tra la vita elementare e il cosmo. Con i propri limiti.",
      en: "Entry into the mental world. Distinguishes the human world from the animal world. Biblically: the fruit of the tree of knowledge. Leaving paradise. Opening up culture. The key opens and closes. The mental world is the bridge between elemental life and the cosmos. With its own limits."
    },
    numberAndQuantity: {
      it: "DIECI. Set triangolare di 1 + 2 + 3 + 4, correlato come forma agli altri set triangolari 6, 15, 21, 28. Mostra l'effetto delle tre facoltà di base 1, 2, 3 sulla materia 4. Nell'antichità: Tetraktys: segno di perfezione e completamento. La quantità 8 può essere divisa tre volte in parti uguali. Primo elemento della triade delle facoltà del piano mentale (10, 11, 12). Potenza attiva e impulsiva. Analogo a 1 nel piano elementare e 19 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "TEN. Triangular set of 1 + 2 + 3 + 4, related as a form to the other triangular sets 6, 15, 21, 28. Shows the effect of the three basic faculties 1, 2, 3 on matter 4. In antiquity: Tetraktys: sign of perfection and completion. The quantity 8 can be divided three times into equal parts. First element of the triad of faculties of the mental plane (10, 11, 12). Active and impulse-giving power. Analogue to 1 in the elemental plane and 19 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Primo elemento della triade delle facoltà del piano mentale (10, 11, 12). Potenza attiva e impulsiva. Analogo a 1 nel piano elementare e 19 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First element of the triad of faculties of the mental plane (10, 11, 12). Active and impulse-giving power. Analogue to 1 in the elemental plane and 19 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Usa la mente come strumento!",
      en: "Use the mind as a tool!"
    }
  },
  {
    id: 11,
    name: { it: "Forza", en: "Force" },
    image: "/images/trinity-tarot-card-11-force.jpg",
    figurativeElement: {
      it: "Mani e braccia sollevate, geroglifico KA, forza vitale.",
      en: "Raised hands and arms, hieroglyph KA, life force."
    },
    ability: {
      it: "La capacità mentale di cercare e trovare forza.",
      en: "The mental ability to seek and find force."
    },
    meaning: {
      it: "Posizione classica di preghiera. Il tocco del cielo, contatto con forze superiori. (11) FORZA trasmette l'impulso del pensiero da (10 CHIAVE) e permette (12) RIVOLUZIONE.",
      en: "Classic prayer posture. The touch of heaven, contact with higher forces. (11) FORCE transmits the impulse of thought from (10 KEY) and enables (12) REVOLUTION."
    },
    numberAndQuantity: {
      it: "UNDICI. L'insieme 11 collega due triangoli di 1+2+3 a un punto comune. Due mondi si incontrano in questo punto e si fondono l'uno nell'altro. 11 è la prima quantità composita, collegando alto e basso: Qui si libera la forza. Secondo elemento della triade delle abilità del piano mentale (10, 11, 12). Forza connettiva e bilanciante. Analogo a 2 nel piano elementare e 20 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "ELEVEN. The set 11 connects two triangles of 1+2+3 at a common point. Two worlds meet at this point and merge into one another. 11 is the first composite quantity, connecting top and bottom: Force is released here. Second element of the triad of abilities of the mental plane (10, 11, 12). Connecting and balancing power. Analogue to 2 in the elemental plane and 20 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Secondo elemento della triade delle abilità del piano mentale (10, 11, 12). Forza connettiva e bilanciante. Analogo a 2 nel piano elementare e 20 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second element of the triad of abilities of the mental plane (10, 11, 12). Connecting and balancing power. Analogue to 2 in the elemental plane and 20 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Trova la forza!",
      en: "Find the force!"
    }
  },
  {
    id: 12,
    name: { it: "Rivoluzione", en: "Revolution" },
    image: "/images/trinity-tarot-card-12-revolution.jpg",
    figurativeElement: {
      it: "Spirali contro-rotanti.",
      en: "Counter-rotating spirals."
    },
    ability: {
      it: "La capacità mentale di cambiare la direzione del pensiero.",
      en: "The mental ability to change the direction of thought."
    },
    meaning: {
      it: "Applicazione del pensiero e della forza. Indipendenza. Prontezza per la rivoluzione.",
      en: "Application of thought and strength. Independence. Readiness for revolution."
    },
    numberAndQuantity: {
      it: "DODICI. Tre sette interbloccati (7=individuo) formano un triangolo con punte troncate e centri vaganti. Libertà individuale. 12 è il numero con molti divisori: 1, 2, 3, 4, 6 e 12. La dozzina è stata quindi usata fin dall'antichità come base per molti sistemi di conteggio e misurazione. Dalle prime civiltà della Mesopotamia, il giorno è stato diviso in due periodi di dodici ore e l'anno in 12 mesi con 12 stazioni e segni dello zodiaco. Terzo elemento della triade delle abilità del piano mentale (10, 11, 12). Potere ricettivo e reattivo. Analogo a 3 nel piano elementare e 21 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "TWELVE. Three interlocking sevens (7=individual) form a triangle with truncated points and wandering centres. Individual freedom. 12 is the number with many divisors: 1, 2, 3, 4, 6 and 12. The dozen has therefore been used since antiquity as the basis for many counting and measurement systems. Since the early civilisations of Mesopotamia, the day has been divided into two twelve-hour periods and the year into 12 months with 12 stations and signs of the zodiac. Third element of the triad of abilities of the mental plane (10, 11, 12). Receptive and reactive power. Analogue to 3 in the elemental plane and 21 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Terzo elemento della triade delle abilità del piano mentale (10, 11, 12). Potere ricettivo e reattivo. Analogo a 3 nel piano elementare e 21 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third element of the triad of abilities of the mental plane (10, 11, 12). Receptive and reactive power. Analogue to 3 in the elemental plane and 21 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Sii pronto per la rivoluzione!",
      en: "Be ready for revolution!"
    }
  },
  {
    id: 13,
    name: { it: "Sonno", en: "Sleep" },
    image: "/images/trinity-tarot-card-13-sleep.jpg",
    figurativeElement: {
      it: "Volto addormentato.",
      en: "Sleeping face."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Il mondo del sonno e dei sogni. L'antitesi del risveglio. Sonno: Fratello della morte. Hypnos (sonno) fratello di Thanatos (morte). Nella mitologia greca, figli di Nyx (notte) e Erebos (oscurità). Il sonno termina la percezione cosciente e apre alla percezione del mondo dei sogni personali, dei ricordi inconsci e delle impronte. Risveglio e sonno: ripetizione ciclica. La transitorietà cerca durata nella ripetizione. L'ispirazione da 12 RIVOLUZIONE e 14 ANIMA è possibile nei sogni. 13 può dare impulso all'azione (4 MANO).",
      en: "The world of sleep and dreams. The antithesis of waking. Sleep: Brother of death. Hypnos (sleep) brother of Thanatos (death). In Greek mythology, sons of Nyx (night) and Erebos (darkness). Sleep ends conscious perception and opens up perception of the world of personal dreams, unconscious memories and imprints. Waking and sleeping: cyclical repetition. Transience seeks duration in repetition. Inspiration from 12 REVOLUTION and 14 SOUL is possible in dreams. 13 can give impulse to action (4 HAND)."
    },
    numberAndQuantity: {
      it: "TREDICI. Due triangoli tetraktys intrecciati. (1+2+3+4). Formano una stella a sei punte con il numero 7 come centro. Le punte esterne dei triangoli formano un involucro aperto, una seconda conchiglia. 13 sfere delle stesse dimensioni riempiono una sfera esterna con tre volte il suo diametro. Il nucleo interno tocca tutte le sfere esterne, che circondano intorno ad esso in 4 file su 4 assi e formano un involucro. Primo dei tre luoghi d'azione in cui le abilità (10, 11, 12) si manifestano a livello mentale. Elemento attivo e impulsivo nella triade dei centri d'azione. Analogo a 4 nel livello elementare e 22 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "THIRTEEN. Two interlocked tetraktys triangles. (1+2+3+4). They form a six-pointed star with the quantity 7 as the centre. The outer tips of the triangles form an open, second shell. 13 spheres of the same size fill an outer sphere with three times its diameter. The inner core touches all the outer spheres, which circle around it in 4 rows around 4 axes and form a shell. First of the three sites of action in which the abilities (10, 11, 12) manifest on a mental level. Active and impulse-giving element in the triad of centres of action. Analogue to 4 on the elemental level and 22 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Primo dei tre luoghi d'azione in cui le abilità (10, 11, 12) si manifestano a livello mentale. Elemento attivo e impulsivo nella triade dei centri d'azione. Analogo a 4 nel livello elementare e 22 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First of the three sites of action in which the abilities (10, 11, 12) manifest on a mental level. Active and impulse-giving element in the triad of centres of action. Analogue to 4 on the elemental level and 22 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione ai tuoi sogni!",
      en: "Pay attention to your dreams!"
    }
  },
  {
    id: 14,
    name: { it: "Anima", en: "Soul" },
    image: "/images/trinity-tarot-card-14-soul.jpg",
    figurativeElement: {
      it: "Uccello con testa umana. Sirena nella mitologia greca, geroglifico BA, anima.",
      en: "Bird with human head. Siren in Greek mythology, hieroglyph BA, soul."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Il mondo del sovrapersonale. Mondo dell'anima. Effetto della memoria epigenetica, collettiva. Immortalità relativa e supratemporalità. Coscienza normativa. Conflitto con posizioni individuali-personali. Come 'intuizione', porta significati da (15 SIGNIFICATO) nei sogni chiaroveggenti (13 SONNO) e, viceversa, esperienze personali nelle manifestazioni dei significati.",
      en: "World of the supra-personal. World of the soul. Effect of the epigenetic, collective memory. Relative immortality and supratemporality. Normative conscience. Conflict with individual-personal positions. As ‘intuition’, brings meanings from (15 MEANING) into clairvoyant dreams (13 SLEEP) and, conversely, personal experiences into the manifestations of the meanings."
    },
    numberAndQuantity: {
      it: "QUATTORDICI. L'insieme 14 è formato dagli insiemi 7+7, le esperienze di un individuo fluiscono in un altro. Secondo dei tre luoghi d'azione in cui le abilità (10, 11, 12) si manifestano a livello mentale. Elemento connettivo e bilanciante della triade dei luoghi d'azione. Analogo a 5 nel livello elementare e 23 nel livello cosmico. (con la stessa somma trasversale, posizione e qualità di base).",
      en: "FOURTEEN. The set 14 is formed from the sets 7+7, the experiences of one individual flow into another. Second of the three places of action where the abilities (10, 11, 12) manifest on the mental level. Connecting and balancing element of the triad of sites of action. Analogue to 5 on the elementary level and 23 on the cosmic level. (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Secondo dei tre luoghi d'azione in cui le abilità (10, 11, 12) si manifestano a livello mentale. Elemento connettivo e bilanciante della triade dei luoghi d'azione. Analogo a 5 nel livello elementare e 23 nel livello cosmico. (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second of the three places of action where the abilities (10, 11, 12) manifest on the mental level. Connecting and balancing element of the triad of sites of action. Analogue to 5 on the elementary level and 23 on the cosmic level. (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione al sovrapersonale!",
      en: "Pay attention to the supra-personal!"
    }
  },
  {
    id: 15,
    name: { it: "Significato", en: "Meaning" },
    image: "/images/trinity-tarot-card-15-meaning.jpg",
    figurativeElement: {
      it: "Mano con dito indice puntato.",
      en: "Hand with pointing index finger."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Mondo dei significati, delle assegnazioni e delle regolamentazioni, comandamenti, proibizioni e tabù. I significati sono prodotti del pensiero, stampi della struttura mentale che li ha creati. La forma complessiva di tutte le impronte mentali e delle restrizioni alla libertà dell'individuo. La ricerca del significato promette piacere come ricompensa per averlo trovato (come nella risoluzione di enigmi), oltre a dare 'significato' alla vita. Questo fenomeno corrisponde alla componente erotica di 6 BACIO e all'esperienza del piacere nell'illuminazione cosmica 24 PIEDI.",
      en: "World of meanings, assignments and regulations, commandments, prohibitions and taboos. Meanings are products of thought, moulds of the mental structure that created them. The overall form of all mental imprints and restrictions on the freedom of the individual. The search for meaning promises pleasure as a reward for finding it (as in solving puzzles), as well as giving ‘meaning’ to life. This phenomenon corresponds to the erotic component of 6 KISS and the experience of pleasure in cosmic enlightenment 24 FEET."
    },
    numberAndQuantity: {
      it: "QUINDICI. 15 è l'insieme triangolare di 1 + 2 + 3 + 4 + 5. Come forma è correlato agli altri insiemi triangolari 6, 10, 21, 28. La comunicazione 5 si aggiunge alla perfezione (10). Terzo dei tre luoghi d'azione in cui le abilità (10, 11, 12) si manifestano a livello mentale. Elemento ricettivo e reattivo della triade dei centri d'azione. Analogo a 6 nel livello elementare e 24 nel livello cosmico. (con la stessa somma trasversale, posizione e qualità di base). Tipici per 6, 15, 24 sono le promesse di piacere così come i comandamenti, le proibizioni e i tabù.",
      en: "FIFTEEN. 15 is the triangular set of 1 + 2 + 3 + 4 + 5. As a form it is related to the other triangular sets 6, 10, 21, 28. Communication 5 is added to perfection (10). Third of the three places of action in which the abilities (10, 11, 12) manifest themselves on a mental level. Receptive and reactive element of the triad of centres of action. Analogue to 6 on the elementary level and 24 on the cosmic level. (with the same cross sum, position and core quality). Typical for 6, 15, 24 are promises of pleasure as well as commandments, prohibitions and taboos."
    },
    contextualDescription: {
      it: "Terzo dei tre luoghi d'azione in cui le abilità (10, 11, 12) si manifestano a livello mentale. Elemento ricettivo e reattivo della triade dei centri d'azione. Analogo a 6 nel livello elementare e 24 nel livello cosmico. (con la stessa somma trasversale, posizione e qualità di base). Tipici per 6, 15, 24 sono le promesse di piacere così come i comandamenti, le proibizioni e i tabù.",
      en: "Third of the three places of action in which the abilities (10, 11, 12) manifest themselves on a mental level. Receptive and reactive element of the triad of centres of action. Analogue to 6 on the elementary level and 24 on the cosmic level. (with the same cross sum, position and core quality). Typical for 6, 15, 24 are promises of pleasure as well as commandments, prohibitions and taboos."
    },
    oracle: {
      it: "Riconosci il significato!",
      en: "Recognise the meaning!"
    }
  },
  {
    id: 16,
    name: { it: "Ancora", en: "Anchor" },
    image: "/images/trinity-tarot-card-16-anchor.jpg",
    figurativeElement: {
      it: "Ancora.",
      en: "Anchor."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Ancorare ciò che è stato appreso. Costruire su ciò che è stato appreso. Lottare contro l'oblio. Completamento dell'apprendistato. Verificare ciò che è stato appreso. Riconoscerne i limiti.",
      en: "Anchoring what has been learnt. Building on what has been learnt. Fight against forgetting. Completion of the apprenticeship. Testing what has been learnt. Recognising its limits."
    },
    numberAndQuantity: {
      it: "SEDICI. 16 quadrato 4x4. 4 file con 4 unità ciascuna. Immagine dell'ordinato e costruito artificialmente. Artificiale e instabile. Prima stazione della triade delle fasi in cui le abilità (10,11,12) si sviluppano a livello mentale. Potenza impulsiva, attiva. Analogo a 7 nel livello elementare e 25 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "SIXTEEN. 16 square 4x4. 4 rows with 4 units each. Image of the artificially ordered and constructed. Artificial and unstable. First station of the triad of phases in which the abilities (10,11,12) develop on the mental level. Impulsive, active power. Analogue to 7 on the elementary level and 25 on the cosmic level (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Prima stazione della triade delle fasi in cui le abilità (10,11,12) si sviluppano a livello mentale. Potenza impulsiva, attiva. Analogo a 7 nel livello elementare e 25 nel livello cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First station of the triad of phases in which the abilities (10,11,12) develop on the mental level. Impulsive, active power. Analogue to 7 on the elementary level and 25 on the cosmic level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Tutto ciò che è stato appreso è limitato!",
      en: "Everything learnt is limited!"
    }
  },
  {
    id: 17,
    name: { it: "Scale", en: "Stairs" },
    image: "/images/trinity-tarot-card-17-stairs.jpg",
    figurativeElement: {
      it: "Scale.",
      en: "Stairs."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Transizione tra due livelli. Decisione: salire / scendere / fermarsi. 8, 17, 26 sono fasi di transizione: Il dubbio. Due direzioni possibili. L'altezza crea profondità. Le montagne creano valli. L'orgoglio precede una caduta.",
      en: "Transition between two levels. Decision: upwards / downwards / standstill. 8, 17, 26 are transitional phases: Doubt. Two directions possible. Height makes depth. Mountains make valleys. Pride comes before a fall."
    },
    numberAndQuantity: {
      it: "DICIASSETTE. Due quadrati 3 × 3, in alto e in basso, con un elemento comune come punto di transizione. Punto decisionale per salita o discesa. Seconda stazione della triade delle fasi in cui le abilità (10,11,12) si sviluppano nel piano mentale. Forza connettiva e bilanciante. Analogo a 8 nel piano elementare e 26 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "SEVENTEEN. Two squares 3 × 3, top and bottom, with a common element as a transition point. Decision point for ascent or descent. Second station of the triad of phases in which the abilities (10,11,12) develop in the mental plane. Connecting and balancing force. Analogue to 8 in the elemental plane and 26 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Seconda stazione della triade delle fasi in cui le abilità (10,11,12) si sviluppano nel piano mentale. Forza connettiva e bilanciante. Analogo a 8 nel piano elementare e 26 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second station of the triad of phases in which the abilities (10,11,12) develop in the mental plane. Connecting and balancing force. Analogue to 8 in the elemental plane and 26 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Decidi: su o giù!",
      en: "Decide: up or down!"
    }
  },
  {
    id: 18,
    name: { it: "Cobra", en: "Cobra" },
    image: "/images/trinity-tarot-card-18-cobra.jpg",
    figurativeElement: {
      it: "Cobra eretto. Ureo, il cobra eretto, era l'elemento centrale sulla corona del faraone. Difende la conoscenza dietro la fronte del re.",
      en: "Upright cobra. Uraeus the erect cobra was the central element on the pharaoh‘s crown. It defends the knowledge behind the king‘s forehead."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Difesa della conoscenza preziosa. Separazione della comprensione esperienziale dalla conoscenza appresa. Disponibilità a difendere la verità. Difesa del mondo mentale nel suo complesso.",
      en: "Defence of valuable knowledge. Separation of experienced understanding from learnt knowledge. Willingness to defend truth. Defence of the mental world as a whole."
    },
    numberAndQuantity: {
      it: "DICIOTTO. Un cerchio di sei elementi, circondato da un esagono di dodici elementi, circondano e proteggono un centro che rimane vuoto. L'insieme 19, (IL SOLE) senza il nucleo centrale. 18 mostra la vicinanza al sole, il cui centro difende. Terza stazione della triade delle fasi in cui le abilità (10,11,12) si sviluppano nel piano mentale. Potere ricettivo e reattivo. Analogo a 9 nel piano elementare e 27 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "EIGHTEEN. A circle of six elements, surrounded by a hexagon of twelve elements, surround and protect a centre that is kept empty. The set 19, (THE SUN) without the central core. 18 shows proximity to the sun, whose centre it defends. Third station of the triad of phases in which the abilities (10,11,12) develop in the mental plane. Receptive and reactive power. Analogue to 9 in the elemental plane and 27 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    contextualDescription: {
      it: "Terza stazione della triade delle fasi in cui le abilità (10,11,12) si sviluppano nel piano mentale. Potere ricettivo e reattivo. Analogo a 9 nel piano elementare e 27 nel piano cosmico (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third station of the triad of phases in which the abilities (10,11,12) develop in the mental plane. Receptive and reactive power. Analogue to 9 in the elemental plane and 27 in the cosmic plane (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Scrutina ciò che stai difendendo!",
      en: "Scrutinise what you are defending!"
    }
  },
  {
    id: 19,
    name: { it: "Sole", en: "Sun" },
    image: "/images/trinity-tarot-card-19-sun.jpg",
    figurativeElement: {
      it: "Ideogramma sole, oro, geroglifico non modificato.",
      en: "Ideogram sun, gold, unmodified hieroglyph."
    },
    ability: {
      it: "Percezione della qualità 'sole': luce, splendore spirituale, bellezza.",
      en: "Perception of the quality ‘sun’: light, spiritual splendour, beauty."
    },
    meaning: {
      it: "La bellezza è una forma di gioia. Gioia, piacere; la bellezza è ricompensa e nutrimento, bussola e segnale.",
      en: "Beauty is a form of joy. Joy, pleasure; beauty is reward and nourishment, compass and signpost."
    },
    numberAndQuantity: {
      it: "DICIANNOVE. Un nucleo centrale al centro e sei elementi che formano un guscio protettivo attorno a questo nucleo (insieme il numero 7, la settenza, l'individuo). Pertanto un esagono di dodici punti di dimensioni uguali come seconda conchiglia. Protezione e stabilità. Primo elemento della triade delle abilità nel piano cosmico (19, 20, 21). Forza energetica e attiva. Analogo a 10 nel piano mentale e 1 nel piano elementare (con la stessa somma trasversale e posizione).",
      en: "NINETEEN. A central core in the centre and six elements that form a protective shell around this core (together the number 7, the sevenness, the individual). Therefore a hexagon of twelve equally sized points as a second shell. Protection and stability. First element of the triad of abilities in the cosmic plane (19, 20, 21). Energising and active force. Analogue to 10 in the mental plane and 1 in the elemental plane (with the same cross sum and position)."
    },
    contextualDescription: {
      it: "Primo elemento della triade delle abilità nel piano cosmico (19, 20, 21). Forza energetica e attiva. Analogo a 10 nel piano mentale e 1 nel piano elementare (con la stessa somma trasversale e posizione).",
      en: "First element of the triad of abilities in the cosmic plane (19, 20, 21). Energising and active force. Analogue to 10 in the mental plane and 1 in the elemental plane (with the same cross sum and position)."
    },
    oracle: {
      it: "Presta attenzione allo splendore, alla gioia, alla bellezza!",
      en: "Pay attention to splendour, joy, beauty!"
    }
  },
  {
    id: 20,
    name: { it: "Stella", en: "Star" },
    image: "/images/trinity-tarot-card-20-star.jpg",
    figurativeElement: {
      it: "Ideogramma stella e essere umano.",
      en: "Ideogram star and human being."
    },
    ability: {
      it: "Percezione della connessione tra uomo e cosmo.",
      en: "Perception of the connection between man and the cosmos."
    },
    meaning: {
      it: "Microcosmo / Macrocosmo. Stella esterna e stella interna. Leonardo: ‘Chi si è rivolto alla sua stella non torna più indietro’.",
      en: "Microcosm / Macrocosm. Outer star and inner star. Leonardo: ‘He who has turned to his star no longer turns back’."
    },
    numberAndQuantity: {
      it: "VENTI. 20 si presenta come due insiemi triangolari di 10 (1+2+3+4), che giacciono con le loro punte l'uno contro l'altro. Un triangolo punta verso l'alto, l'altro verso il basso. Microcosmo e macrocosmo si toccano.",
      en: "TWENTY. 20 presents itself as two triangular sets of 10 (1+2+3+4), which lie with their tips against each other. One triangle points upwards, the other downwards. Microcosm and macrocosm touch each other."
    },
    contextualDescription: {
      it: "Secondo elemento della triade delle abilità del livello cosmico (19, 20, 21). Forza connettiva e bilanciante. Analogo a 11 del piano mentale e 2 del piano elementare (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second element of the triad of abilities of the cosmic level (19, 20, 21). Connecting and balancing force. Analogue to 11 of the mental plane and 2 of the elemental plane (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Senti la stella interiore!",
      en: "Feel the inner star!"
    }
  },
  {
    id: 21,
    name: { it: "Trinità", en: "Trinity" },
    image: "/images/trinity-tarot-card-21-trinity.jpg",
    figurativeElement: {
      it: "3 elementi formano un'unità fluendo l'uno nell'altro. Inversione continua. Figura senza esterno e interno. Un cuore si forma da un altro, formando il primo.",
      en: "3 elements form a unit by flowing into one another. Continuous inversion. Figure without outside and inside. One heart shape emerges from another, forming the first."
    },
    ability: {
      it: "Percezione dell'interazione triplice di tre forze / principi in tutti i fenomeni.",
      en: "Perception of the threefold interaction of three forces / principles in all phenomena."
    },
    meaning: {
      it: "Impulsore - trasmettitore - ricevitore / trasformatore. Trinità di principi che si compenetrano, producono e condizionano a vicenda. Nella logica del linguaggio: soggetto, attività, oggetto.",
      en: "Impulse giver - transmitter - receiver / transformer. Trinity of principles that interpenetrate, produce and condition each other. In the logic of language: subject, activity, object."
    },
    numberAndQuantity: {
      it: "VENTUNO. 21 è l'insieme triangolare di 6 (1 + 2 + 3 + 4 + 5 + 6 = 21). Come forma sequenziale di 15 (1 + 2 + 3 + 4 + 5), combina la qualità di 6 AMORE per formare 15 SIGNIFICATO.",
      en: "TWENTY-ONE. 21 is the triangular set of 6 (1 + 2 + 3 + 4 + 5 + 6 = 21). As a sequential form of 15 (1 + 2 + 3 + 4 + 5), it combines the quality of 6 LOVE to form 15 MEANING."
    },
    contextualDescription: {
      it: "Terzo elemento della triade delle abilità del livello cosmico (19, 20, 21). Potere ricettivo e reattivo. Analogo a 12 del livello mentale e 3 del livello elementare (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third element of the triad of abilities of the cosmic level (19, 20, 21). Receptive and reactive power. Analogue to 12 of the mental level and 3 of the elemental level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Trova il lavoro della trinità nel soggetto della tua domanda!",
      en: "Find the work of trinity in the subject of your question!"
    }
  },
  {
    id: 22,
    name: { it: "Scarabeo", en: "Beetle" },
    image: "/images/trinity-tarot-card-22-beetle.jpg",
    figurativeElement: {
      it: "Scarabeo.",
      en: "Beetle, Scarab."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Il mondo del terreno, materiale, transitorio. Tutto ciò che ha un inizio ha una fine. La transitorietà dell'individuo. Ciclico. La transitorietà cerca la permanenza attraverso la ripetizione, non l'imperitura. Venire / andare / tornare. La vita cosmica come forma di esistenza intermittente. Nella mitologia egizia, uno scarabeo cosmico muove il sole nella notte dopo il tramonto attraverso il mondo sotterraneo fino al luogo del suo sorgere al mattino.",
      en: "The world of the earthly, material, transient. Everything that has a beginning has an end. The transience of the individual. Cyclic. Transience seeks permanence through repetition, not imperishability. Coming / going / returning. Cosmic life as an intermittent form of existence. In Egyptian mythology, a cosmic scarab moves the sun in the night after its setting through the underworld to the place of its rising in the morning."
    },
    numberAndQuantity: {
      it: "VENTIDUE. Il numero triangolare di 5 (15 SIGNIFICATO) sta sopra il sette (7 PANTERA = individuo indomito). Nell'ambito dell'effimero, i significati limitano il mondo con comandamenti e proibizioni.",
      en: "TWENTY-TWO. The triangular number of 5 (15 MEANING) stands above the seven (7 PANTHER = untamed individual). In the realm of the ephemeral, meanings limit the world with commandments and prohibitions."
    },
    contextualDescription: {
      it: "Primo dei tre luoghi di azione in cui le abilità (19, 20, 21) si manifestano a livello cosmico. Elemento impulsivo e attivo della triade dei centri di azione. Analogo a 4 nel livello elementare e 13 nel livello mentale (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First of the three places of action in which the abilities (19, 20, 21) manifest themselves on the cosmic level. Impulsive and active element of the triad of centres of action. Analogue to 4 on the elementary level and 13 on the mental level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione alle cose materiali e transitorie!",
      en: "Pay attention to material and transient things!"
    }
  },
  {
    id: 23,
    name: { it: "Onda", en: "Wave" },
    image: "/images/trinity-tarot-card-23-wave.jpg",
    figurativeElement: {
      it: "Onda, oscillazione.",
      en: "Wave, oscillation."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "L'immateriale, il continuo. Il mondo dell'imperituro. Senza inizio, senza fine. Immateriale. Onnipresente. Eterno ADESSO. Luce. Comunicazione cosmica. Nella mitologia egizia, l'oceano primordiale NUN, che esisteva prima del mondo e da cui il Sole Creatore ha fatto emergere il nostro mondo. 23 ONDA porta 'intuizione' dal mondo dell'inimmaginabile (24 PIEDI IN PREGHIERA) nel presente materiale 22 SCARABEO.",
      en: "The immaterial, the continuous. The world of the imperishable. Without beginning, without end. Immaterial. Omnipresent. Eternal NOW. Light. Cosmic communication. In Egyptian mythology, the primordial ocean NUN, which existed before the world and from which the Creator Sun brought forth our world. 23 WAVE brings ‘intuition’ from the world of the unimaginable (24 PRAYING FEET) into the material present 22 BEETLE."
    },
    numberAndQuantity: {
      it: "VENTITRÈ. Il quadrato 4 × 4 = 16 PANTERE, sta sopra il sette (7 PANTERA = individuo indomito). La somma di ciò che è stato appreso, con i suoi limiti, punta all'illimitato.",
      en: "TWENTY-THREE. The square 4 × 4 = 16 PANTHERS, stands above the seven (7 PANTHERS = untamed individual). The sum of what has been learnt, with its limitedness, points to the unlimited."
    },
    contextualDescription: {
      it: "Secondo dei tre luoghi di azione in cui le abilità (19, 20, 21) si manifestano a livello cosmico. Elemento connettivo e bilanciante della triade dei centri di azione. Analogo a 5 nel livello elementare e 14 nel livello mentale (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Second of the three places of action where the abilities (19, 20, 21 ) manifest themselves on the cosmic level. Connecting and balancing element of the triad of centres of action. Analogue to 5 on the elementary level and 14 on the mental level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione all'immateriale e all'imperituro!",
      en: "Pay attention to the immaterial and the imperishable!"
    }
  },
  {
    id: 24,
    name: { it: "Piedi in preghiera", en: "Praying Feet" },
    image: "/images/trinity-tarot-card-24-praying-feet.jpg",
    figurativeElement: {
      it: "'Piedi' che si toccano come in una postura di preghiera, collegati da una linea paradossale.",
      en: "‘Feet’ touching each other as if in a praying posture, connected by a paradoxical line."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Il mondo dell'inspiegabile, dell'incomprensibile, inaccessibile alla mente. La sensazione di un mondo oltre i limiti dell'immaginabile. Amore cosmico. Verificare il potere della propria immaginazione. Verificare i suoi limiti. Piacere e gioia come ricompensa per aver superato questi limiti.",
      en: "World of the inexplicable, the incomprehensible, inaccessible to the mind. A sense of a world beyond the limits of the imaginable. Cosmic love. Testing the power of one‘s own imagination. Testing its limits. Pleasure and joy as a reward for exceeding these limits."
    },
    numberAndQuantity: {
      it: "VENTIQUATTRO. Raddoppiamento dei sette che si fondono l'uno nell'altro. Un individuo si moltiplica nelle proprie riflessioni. Enigma e inspiegabilità. Rappresentato diversamente: 17 scale stanno sopra la settenza (7 = individuo indomito). Possibilità di andare oltre i limiti del concepibile.",
      en: "TWENTY-FOUR. Doubling of sevens that merge into one another. An individual multiplies itself in its own reflections. Enigma and inexplicability. Represented differently: 17 stairs stand above the sevenness (7 = untamed individual). Possibility of going beyond the limits of the conceivable."
    },
    contextualDescription: {
      it: "Terzo dei tre luoghi di azione in cui le abilità (19, 20, 21 ) si manifestano a livello cosmico. Elemento ricettivo e reattivo nella triade dei centri di azione. Analogo a 6 nel livello elementare e 15 nel livello mentale (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third of the three places of action in which the abilities (19, 20, 21 ) manifest themselves on a cosmic level. Receptive and reactive element in the triad of sites of action. Analogue to 6 on the elementary level and 15 on the mental level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione al mondo oltre l'immaginabile!",
      en: "Pay attention to the world beyond the imaginable!"
    }
  },
  {
    id: 25,
    name: { it: "Evoluzione", en: "Evolution" },
    image: "/images/trinity-tarot-card-25-evolution.jpg",
    alternateImage: "/images/magic-square-5x5-1.jpg",
    figurativeElement: {
      it: "Spirale che sale dalla superficie. Sforzo verso l'alto.",
      en: "Spiral rising from the surface. Striving upwards."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Fase di riconoscimento della propria posizione nell'evoluzione. La forza motrice per crescere, svilupparsi, ascendere. La propria evoluzione personale all'interno dell'evoluzione collettiva circostante.",
      en: "Phase of recognising one‘s own position in evolution. The driving force to grow, to develop, to ascend. One‘s own personal evolution within the surrounding collective evolution."
    },
    numberAndQuantity: {
      it: "VENTICINQUE. Il quadrato 5 × 5. Quadrato del numero 5 (BOCCA = comunicazione.) Comunicazione cosmo con individuo. Quadrato Magico. Quadrato magico di 5 × 5. somma in tutte le direzioni, anche diagonalmente, 65. 6 + 5 = 11 (LA FORZA). Al centro 13 (SONNO).",
      en: "TWENTY-FIVE. The square 5 × 5. Square of the number 5 (MOUTH = communication.) Communication cosmos with individual. Magic Square. Magic square of 5 × 5. sum in all directions, also diagonally, 65. 6 + 5 = 11 (THE FORCE). In the centre 13 (SLEEP)."
    },
    contextualDescription: {
      it: "Prima stazione della triade delle fasi in cui le abilità (19, 20, 21) si sviluppano nel piano cosmico. Fase impulso-givante e attiva. Analogo a 7 nel livello elementare e 16 nel livello mentale (con la stessa somma trasversale, posizione e qualità di base).",
      en: "First station of the triad of phases in which the abilities (19, 20, 21) develop in the cosmic plane. Impulse-giving and active phase. Analogue to 7 in the elementary level and 16 in the mental level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Presta attenzione al tuo ruolo nell'evoluzione!",
      en: "Pay attention to your role in evolution!"
    }
  },
  {
    id: 26,
    name: { it: "Horus", en: "Horus" },
    image: "/images/trinity-tarot-card-26-horus.jpg",
    figurativeElement: {
      it: "Falco. Lo sguardo di Horus.",
      en: "Falcon. The gaze of Horus."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Cambio di prospettiva, dall'alto verso il basso. Horus si allontana dalla terra. Dalla sua prospettiva, gli eventi appaiono da una nuova angolazione. Modelli e ripetizioni diventano riconoscibili.",
      en: "Change of perspective, from far above to events far below. Horus moves away from the earthly. From his perspective, events appear from a new angle. Patterns and repetitions become recognisable."
    },
    numberAndQuantity: {
      it: "VENTISEI. Il quadrato 5 × 5 + 1 elemento. Posizione sopra EVOLUZIONE.",
      en: "TWENTY-SIX. The square 5 × 5 + 1 element. Position above EVOLUTION."
    },
    contextualDescription: {
      it: "Seconda stazione della triade delle fasi in cui le abilità (19, 20, 21) si sviluppano sul piano cosmico. Fase trasmittente e mediatrice. Analogo a 8 nel livello elementare e 17 nel livello mentale (con la stessa somma trasversale, posizione e qualità di base). 8 (EQUILIBRIO), 17 (SCALE), 26 (HORUS) sono fasi di transizione: Due direzioni sono possibili. Dubbi.",
      en: "Second station of the triad of phases in which the abilities (19, 20, 21) develop on the cosmic level. Transmitting and mediating phase. Analogue to 8 on the elementary level and 17 on the mental level (with the same cross sum, position and core quality). 8 (BALANCE), 17 (STAIRS), 26 (HORUS) are transitional phases: Two directions are possible. Doubts."
    },
    oracle: {
      it: "Trova la nuova prospettiva!",
      en: "Find the new perspective!"
    }
  },
  {
    id: 27,
    name: { it: "Libertà", en: "Freedom" },
    image: "/images/trinity-tarot-card-27-freedom.jpg",
    figurativeElement: {
      it: "Figura volante.",
      en: "Flying figure."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Liberazione, rilascio da tutti i legami. Dalla gravità della terra così come dalla gravità del passato.",
      en: "Liberation, release from all bonds. From the gravity of the earthly as well as from the gravity of the past."
    },
    numberAndQuantity: {
      it: "VENTISETTE. 3 x 3 x 3, conclusione dei tre filoni della vita. Spazio di tre triadi. Insieme triangolare di 7 senza un picco. Vicino al completamento (28).",
      en: "TWENTY-SEVEN. 3 x 3 x 3, conclusion of the three strands of life. Space of three triads. Triangular set of 7 without a peak. Close to completion (28)."
    },
    contextualDescription: {
      it: "Terza stazione della triade delle fasi in cui le abilità (19, 20, 21) si sviluppano sul piano cosmico. Fase ricettiva e reattiva. Analogo a 9 nel livello elementare e 18 nel livello mentale (con la stessa somma trasversale, posizione e qualità di base).",
      en: "Third station of the triad of phases in which the abilities (19, 20, 21) develop on a cosmic level. Receptive and reactive phase. Analogue to 9 in the elementary level and 18 in the mental level (with the same cross sum, position and core quality)."
    },
    oracle: {
      it: "Trova te stesso vicino al tuo obiettivo!",
      en: "Find yourself close to your goal!"
    }
  },
  {
    id: 28,
    name: { it: "Vita", en: "Life" },
    image: "/images/trinity-tarot-card-28-life.jpg",
    alternateImage: "/images/venus-symbol.jpg",
    figurativeElement: {
      it: "Ankh, geroglifico per la vita.",
      en: "Ankh, hieroglyph for life."
    },
    ability: {
      it: "",
      en: ""
    },
    meaning: {
      it: "Croce con manico, croce con anello all'incrocio tra verticale e orizzontale: che sale da lì e ritorna lì. Le divinità dell'antico Egitto portavano l'ANKH come segno della loro divinità. Quando pronunciata, la sequenza di lettere A N Kh significava specchio. Come segno, indica una figura con le braccia aperte - pronta per un abbraccio, e punta a una relazione con il simbolo della dea dell'amore mesopotamica, il 'specchio della dea dell'amore' e segno di femminilità.",
      en: "Handle Cross, cross with loop at the intersection of vertical and horizontal: rising from there and returning there. The ancient Egyptian deities carried ANKH as a sign of their divinity. When pronounced, the sequence of letters A N Kh meant mirror. As a sign, it indicates a figure with outstretched arms - ready for an embrace, and points to a relationship with the Mesopotamian Venus symbol, the ‘mirror of the goddess of love’ and a sign of femininity."
    },
    numberAndQuantity: {
      it: "VENTOTTO. La quantità triangolare di 7: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 28 combina le qualità di tutti i suoi fattori: 1 + 2 + 4 + 7 + 14. Sommati insieme, arrivano a 28, moltiplicati per 784 = 28 ². In 28, il modello di base triadico della Trinità trova un nuovo inizio: Somma trasversale 2 + 8 = 10 = 1 + 0 = 1.",
      en: "TWENTY-EIGHT. The triangular quantity of 7: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 28 combines the qualities of all its factors: 1 + 2 + 4 + 7 + 14. Added together, they add up to 28, multiplied by 784 = 28 ². In 28, the triadic basic pattern of Trinity finds a new beginning: Cross sum 2 + 8 = 10 = 1 + 0 = 1."
    },
    contextualDescription: {
      it: "",
      en: ""
    },
    oracle: {
      it: "Sii l'onda nell'oceano!",
      en: "Be the wave in the ocean!"
    }
  }
];

export const selectedCards = writable<Card[]>([]);