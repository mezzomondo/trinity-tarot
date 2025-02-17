import { register, init } from 'svelte-i18n';

// Registrazione delle lingue
register('it', () => import('./locales/it.json'));
register('en', () => import('./locales/en.json'));

// Funzione per impostare l'inizializzazione
export async function setupI18n() {
  await init({
    fallbackLocale: 'en',
    initialLocale: 'it', // Puoi modificare questo valore per ottenere la lingua dal navigatore
  });
}