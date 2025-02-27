import { register, init, locale } from 'svelte-i18n';

// Registrazione delle lingue
register('it', () => import('./locales/it.json'));
register('en', () => import('./locales/en.json'));

// Funzione per impostare l'inizializzazione
export async function setupI18n() {
	await init({
		fallbackLocale: 'en',
		initialLocale: 'en' // Puoi modificare questo valore per ottenere la lingua dal navigatore
	});
}

export const changeLocale = (lang: string) => locale.set(lang);
