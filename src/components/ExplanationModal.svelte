<script lang="ts">
	import { t } from 'svelte-i18n';

	type Props = {
		stateName: string;
	};

	let { stateName } = $props();
</script>

<p class="mb-2 text-sm text-gray-600">
	{#await $t(stateName) then translatedText}{translatedText}{/await}
</p>
