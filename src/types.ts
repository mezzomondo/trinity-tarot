export interface Card {
    id: number;
    name: { it: string; en: string };
    image: string;
    alternateImage?: string;
    figurativeElement: { it: string; en: string };
    ability: { it: string; en: string };
    meaning: { it: string; en: string };
    numberAndQuantity: { it: string; en: string };
    contextualDescription: { it: string; en: string };
    oracle: { it: string; en: string };
  }
