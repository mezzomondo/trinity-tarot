// +layout.server.ts
import { locale } from 'svelte-i18n';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	// Recupera il parametro di query "lang"
	const langParam = url.searchParams.get('lang');
	// Lista delle lingue supportate
	const supportedLocales = ['en', 'it'];
	// Se langParam esiste e fa parte delle lingue supportate, usalo; altrimenti fallback a 'en'
	const chosenLocale = supportedLocales.includes(langParam || '') ? langParam : 'en';
	locale.set(chosenLocale);
	return { locale: chosenLocale };
};
