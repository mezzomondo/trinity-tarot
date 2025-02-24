<script lang="ts">
	import { setupI18n } from '../i18n'; // Importa la configurazione di i18n per garantire l'inizializzazione
	import '../app.css';

	let { children } = $props();
	const setupResult = setupI18n();
</script>

{#await setupResult}
	<!-- Just wait -->
{:then}
	{@render children()}
{/await}
