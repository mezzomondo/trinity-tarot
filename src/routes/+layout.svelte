<script lang="ts">
	import { setupI18n, changeLocale } from '../i18n'; // Importa la configurazione di i18n per garantire l'inizializzazione
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();
	const setupResult = setupI18n().then(() => {
		// Accedi al dato 'locale' dal load function tramite lo store $page
		const loadedLocale = page.data.locale;
		const supportedLocales = ['en', 'it'];
		const chosenLocale = supportedLocales.includes(loadedLocale) ? loadedLocale : 'en';
		changeLocale(chosenLocale);
	});
</script>

{#await setupResult}
	<!-- Just wait -->
{:then}
	{@render children()}
{/await}
