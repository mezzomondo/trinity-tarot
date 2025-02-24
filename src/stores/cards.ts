import type { Card } from '../types';
import { derived, writable } from 'svelte/store';
import { t } from 'svelte-i18n';

export const language = writable<'it' | 'en'>('it'); // 'it' per Italiano, 'en' per Inglese

export const cards = derived(t, ($t) => [
	{
		id: 1,
		name: $t('card.1.name'),
		image: '/images/trinity-tarot-card-01-embryo.jpg',
		figurativeElement: $t('card.1.figurativeElement'),
		ability: $t('card.1.ability'),
		meaning: $t('card.1.meaning'),
		numberAndQuantity: $t('card.1.numberAndQuantity'),
		contextualDescription: $t('card.1.contextualDescription'),
		oracle: $t('card.1.oracle')
	},
	{
		id: 2,
		name: $t('card.2.name'),
		image: '/images/trinity-tarot-card-02-eye.jpg',
		figurativeElement: $t('card.2.figurativeElement'),
		ability: $t('card.2.ability'),
		meaning: $t('card.2.meaning'),
		numberAndQuantity: $t('card.2.numberAndQuantity'),
		contextualDescription: $t('card.2.contextualDescription'),
		oracle: $t('card.2.oracle')
	},
	{
		id: 3,
		name: $t('card.3.name'),
		image: '/images/trinity-tarot-card-03-step.jpg',
		figurativeElement: $t('card.3.figurativeElement'),
		ability: $t('card.3.ability'),
		meaning: $t('card.3.meaning'),
		numberAndQuantity: $t('card.3.numberAndQuantity'),
		contextualDescription: $t('card.3.contextualDescription'),
		oracle: $t('card.3.oracle')
	},
	{
		id: 4,
		name: $t('card.4.name'),
		image: '/images/trinity-tarot-card-04-hand.jpg',
		figurativeElement: $t('card.4.figurativeElement'),
		ability: $t('card.4.ability'),
		meaning: $t('card.4.meaning'),
		numberAndQuantity: $t('card.4.numberAndQuantity'),
		contextualDescription: $t('card.4.contextualDescription'),
		oracle: $t('card.4.oracle')
	},
	{
		id: 5,
		name: $t('card.5.name'),
		image: '/images/trinity-tarot-card-05-mouth.jpg',
		figurativeElement: $t('card.5.figurativeElement'),
		ability: $t('card.5.ability'),
		meaning: $t('card.5.meaning'),
		numberAndQuantity: $t('card.5.numberAndQuantity'),
		contextualDescription: $t('card.5.contextualDescription'),
		oracle: $t('card.5.oracle')
	},
	{
		id: 6,
		name: $t('card.6.name'),
		image: '/images/trinity-tarot-card-06-kiss.jpg',
		figurativeElement: $t('card.6.figurativeElement'),
		ability: $t('card.6.ability'),
		meaning: $t('card.6.meaning'),
		numberAndQuantity: $t('card.6.numberAndQuantity'),
		contextualDescription: $t('card.6.contextualDescription'),
		oracle: $t('card.6.oracle')
	},
	{
		id: 7,
		name: $t('card.7.name'),
		image: '/images/trinity-tarot-card-07-panther.jpg',
		figurativeElement: $t('card.7.figurativeElement'),
		ability: $t('card.7.ability'),
		meaning: $t('card.7.meaning'),
		numberAndQuantity: $t('card.7.numberAndQuantity'),
		contextualDescription: $t('card.7.contextualDescription'),
		oracle: $t('card.7.oracle')
	},
	{
		id: 8,
		name: $t('card.8.name'),
		image: '/images/trinity-tarot-card-08-balance.jpg',
		figurativeElement: $t('card.8.figurativeElement'),
		ability: $t('card.8.ability'),
		meaning: $t('card.8.meaning'),
		numberAndQuantity: $t('card.8.numberAndQuantity'),
		contextualDescription: $t('card.8.contextualDescription'),
		oracle: $t('card.8.oracle')
	},
	{
		id: 9,
		name: $t('card.9.name'),
		image: '/images/trinity-tarot-card-09-rest.jpg',
		alternateImage: '/images/magic-square-3x3-1.jpg',
		figurativeElement: $t('card.9.figurativeElement'),
		ability: $t('card.9.ability'),
		meaning: $t('card.9.meaning'),
		numberAndQuantity: $t('card.9.numberAndQuantity'),
		contextualDescription: $t('card.9.contextualDescription'),
		oracle: $t('card.9.oracle')
	},
	{
		id: 10,
		name: $t('card.10.name'),
		image: '/images/trinity-tarot-card-10-key.jpg',
		figurativeElement: $t('card.10.figurativeElement'),
		ability: $t('card.10.ability'),
		meaning: $t('card.10.meaning'),
		numberAndQuantity: $t('card.10.numberAndQuantity'),
		contextualDescription: $t('card.10.contextualDescription'),
		oracle: $t('card.10.oracle')
	},
	{
		id: 11,
		name: $t('card.11.name'),
		image: '/images/trinity-tarot-card-11-force.jpg',
		figurativeElement: $t('card.11.figurativeElement'),
		ability: $t('card.11.ability'),
		meaning: $t('card.11.meaning'),
		numberAndQuantity: $t('card.11.numberAndQuantity'),
		contextualDescription: $t('card.11.contextualDescription'),
		oracle: $t('card.11.oracle')
	},
	{
		id: 12,
		name: $t('card.12.name'),
		image: '/images/trinity-tarot-card-12-revolution.jpg',
		figurativeElement: $t('card.12.figurativeElement'),
		ability: $t('card.12.ability'),
		meaning: $t('card.12.meaning'),
		numberAndQuantity: $t('card.12.numberAndQuantity'),
		contextualDescription: $t('card.12.contextualDescription'),
		oracle: $t('card.12.oracle')
	},
	{
		id: 13,
		name: $t('card.13.name'),
		image: '/images/trinity-tarot-card-13-sleep.jpg',
		figurativeElement: $t('card.13.figurativeElement'),
		ability: $t('card.13.ability'),
		meaning: $t('card.13.meaning'),
		numberAndQuantity: $t('card.13.numberAndQuantity'),
		contextualDescription: $t('card.13.contextualDescription'),
		oracle: $t('card.13.oracle')
	},
	{
		id: 14,
		name: $t('card.14.name'),
		image: '/images/trinity-tarot-card-14-soul.jpg',
		figurativeElement: $t('card.14.figurativeElement'),
		ability: $t('card.14.ability'),
		meaning: $t('card.14.meaning'),
		numberAndQuantity: $t('card.14.numberAndQuantity'),
		contextualDescription: $t('card.14.contextualDescription'),
		oracle: $t('card.14.oracle')
	},
	{
		id: 15,
		name: $t('card.15.name'),
		image: '/images/trinity-tarot-card-15-meaning.jpg',
		figurativeElement: $t('card.15.figurativeElement'),
		ability: $t('card.15.ability'),
		meaning: $t('card.15.meaning'),
		numberAndQuantity: $t('card.15.numberAndQuantity'),
		contextualDescription: $t('card.15.contextualDescription'),
		oracle: $t('card.15.oracle')
	},
	{
		id: 16,
		name: $t('card.16.name'),
		image: '/images/trinity-tarot-card-16-anchor.jpg',
		figurativeElement: $t('card.16.figurativeElement'),
		ability: $t('card.16.ability'),
		meaning: $t('card.16.meaning'),
		numberAndQuantity: $t('card.16.numberAndQuantity'),
		contextualDescription: $t('card.16.contextualDescription'),
		oracle: $t('card.16.oracle')
	},
	{
		id: 17,
		name: $t('card.17.name'),
		image: '/images/trinity-tarot-card-17-stairs.jpg',
		figurativeElement: $t('card.17.figurativeElement'),
		ability: $t('card.17.ability'),
		meaning: $t('card.17.meaning'),
		numberAndQuantity: $t('card.17.numberAndQuantity'),
		contextualDescription: $t('card.17.contextualDescription'),
		oracle: $t('card.17.oracle')
	},
	{
		id: 18,
		name: $t('card.18.name'),
		image: '/images/trinity-tarot-card-18-cobra.jpg',
		figurativeElement: $t('card.18.figurativeElement'),
		ability: $t('card.18.ability'),
		meaning: $t('card.18.meaning'),
		numberAndQuantity: $t('card.18.numberAndQuantity'),
		contextualDescription: $t('card.18.contextualDescription'),
		oracle: $t('card.18.oracle')
	},
	{
		id: 19,
		name: $t('card.19.name'),
		image: '/images/trinity-tarot-card-19-sun.jpg',
		figurativeElement: $t('card.19.figurativeElement'),
		ability: $t('card.19.ability'),
		meaning: $t('card.19.meaning'),
		numberAndQuantity: $t('card.19.numberAndQuantity'),
		contextualDescription: $t('card.19.contextualDescription'),
		oracle: $t('card.19.oracle')
	},
	{
		id: 20,
		name: $t('card.20.name'),
		image: '/images/trinity-tarot-card-20-star.jpg',
		figurativeElement: $t('card.20.figurativeElement'),
		ability: $t('card.20.ability'),
		meaning: $t('card.20.meaning'),
		numberAndQuantity: $t('card.20.numberAndQuantity'),
		contextualDescription: $t('card.20.contextualDescription'),
		oracle: $t('card.20.oracle')
	},
	{
		id: 21,
		name: $t('card.21.name'),
		image: '/images/trinity-tarot-card-21-trinity.jpg',
		figurativeElement: $t('card.21.figurativeElement'),
		ability: $t('card.21.ability'),
		meaning: $t('card.21.meaning'),
		numberAndQuantity: $t('card.21.numberAndQuantity'),
		contextualDescription: $t('card.21.contextualDescription'),
		oracle: $t('card.21.oracle')
	},
	{
		id: 22,
		name: $t('card.22.name'),
		image: '/images/trinity-tarot-card-22-beetle.jpg',
		figurativeElement: $t('card.22.figurativeElement'),
		ability: $t('card.22.ability'),
		meaning: $t('card.22.meaning'),
		numberAndQuantity: $t('card.22.numberAndQuantity'),
		contextualDescription: $t('card.22.contextualDescription'),
		oracle: $t('card.22.oracle')
	},
	{
		id: 23,
		name: $t('card.23.name'),
		image: '/images/trinity-tarot-card-23-wave.jpg',
		figurativeElement: $t('card.23.figurativeElement'),
		ability: $t('card.23.ability'),
		meaning: $t('card.23.meaning'),
		numberAndQuantity: $t('card.23.numberAndQuantity'),
		contextualDescription: $t('card.23.contextualDescription'),
		oracle: $t('card.23.oracle')
	},
	{
		id: 24,
		name: $t('card.24.name'),
		image: '/images/trinity-tarot-card-24-praying-feet.jpg',
		figurativeElement: $t('card.24.figurativeElement'),
		ability: $t('card.24.ability'),
		meaning: $t('card.24.meaning'),
		numberAndQuantity: $t('card.24.numberAndQuantity'),
		contextualDescription: $t('card.24.contextualDescription'),
		oracle: $t('card.24.oracle')
	},
	{
		id: 25,
		name: $t('card.25.name'),
		image: '/images/trinity-tarot-card-25-evolution.jpg',
		alternateImage: '/images/magic-square-5x5-1.jpg',
		figurativeElement: $t('card.25.figurativeElement'),
		ability: $t('card.25.ability'),
		meaning: $t('card.25.meaning'),
		numberAndQuantity: $t('card.25.numberAndQuantity'),
		contextualDescription: $t('card.25.contextualDescription'),
		oracle: $t('card.25.oracle')
	},
	{
		id: 26,
		name: $t('card.26.name'),
		image: '/images/trinity-tarot-card-26-horus.jpg',
		figurativeElement: $t('card.26.figurativeElement'),
		ability: $t('card.26.ability'),
		meaning: $t('card.26.meaning'),
		numberAndQuantity: $t('card.26.numberAndQuantity'),
		contextualDescription: $t('card.26.contextualDescription'),
		oracle: $t('card.26.oracle')
	},
	{
		id: 27,
		name: $t('card.27.name'),
		image: '/images/trinity-tarot-card-27-freedom.jpg',
		figurativeElement: $t('card.27.figurativeElement'),
		ability: $t('card.27.ability'),
		meaning: $t('card.27.meaning'),
		numberAndQuantity: $t('card.27.numberAndQuantity'),
		contextualDescription: $t('card.27.contextualDescription'),
		oracle: $t('card.27.oracle')
	},
	{
		id: 28,
		name: $t('card.28.name'),
		image: '/images/trinity-tarot-card-28-life.jpg',
		alternateImage: '/images/venus-symbol.jpg',
		figurativeElement: $t('card.28.figurativeElement'),
		ability: $t('card.28.ability'),
		meaning: $t('card.28.meaning'),
		numberAndQuantity: $t('card.28.numberAndQuantity'),
		contextualDescription: $t('card.28.contextualDescription'),
		oracle: $t('card.28.oracle')
	}
]);

export const selectedCards = writable<Card[]>([]);
