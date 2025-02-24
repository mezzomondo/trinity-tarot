<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h1 class="mb-10 text-center text-2xl font-bold text-red-600">
	{#await $t('gameInstructions') then translatedText}{translatedText.toUpperCase()}{/await}
</h1>
<h1 class="mb-2 text-left text-2xl font-bold text-black">
	{#await $t('oracleGameTitle') then translatedText}{translatedText.toUpperCase()}{/await}
</h1>
<p class="mb-8 px-6 text-left text-base text-black">
	{#await $t('oracleGameText') then translatedText}{translatedText}{/await}
</p>
<h1 class="mb-2 text-left text-2xl font-bold text-black">
	{#await $t('instLayingTitle') then translatedText}{translatedText.toUpperCase()}{/await}
</h1>
<p class="mb-8 px-6 text-left text-base text-black">
	{#await $t('instLayingText') then translatedText}{translatedText}{/await}
</p>
<h1 class="mb-8 text-left text-2xl font-bold text-black">
	{#await $t('instAxialTitle') then translatedText}{translatedText.toUpperCase()}{/await}
</h1>
<img
	src="/images/reading-the-axial-cross-oracle.jpg"
	alt="Axial Cross Oracle"
	class="mb-6 w-full max-w-2xl rounded-lg shadow-md"
/>
<p class="mb-8 px-6 text-left text-base text-black" style="white-space: pre-wrap">
	{@html $t('instAxialText')}
</p>
