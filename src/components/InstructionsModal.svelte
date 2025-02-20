<script lang="ts">
    import { t } from 'svelte-i18n';
  </script>

  <h1 class="text-2xl font-bold text-center mb-10 text-red-600">
    {#await $t('gameInstructions')}{:then translatedText}{translatedText.toUpperCase()}{/await}
  </h1>
  <h1 class="text-2xl font-bold text-left mb-2 text-black">
    {#await $t('oracleGameTitle')}{:then translatedText}{translatedText.toUpperCase()}{/await}
  </h1>
  <p class="text-base text-black text-left mb-8 px-6">
    {#await $t('oracleGameText')}{:then translatedText}{translatedText}{/await}
  </p>
  <h1 class="text-2xl font-bold text-left mb-2 text-black">
    {#await $t('instLayingTitle')}{:then translatedText}{translatedText.toUpperCase()}{/await}
  </h1>
  <p class="text-base text-black text-left mb-8 px-6">
    {#await $t('instLayingText')}{:then translatedText}{translatedText}{/await}
  </p>
  <h1 class="text-2xl font-bold text-left mb-8 text-black">
    {#await $t('instAxialTitle')}{:then translatedText}{translatedText.toUpperCase()}{/await}
  </h1>
  <img src="/images/reading-the-axial-cross-oracle.jpg" alt="Axial Cross Oracle" class="w-full max-w-2xl rounded-lg shadow-md mb-6">
  <p class="text-base text-black text-left mb-8 px-6" style="white-space: pre-wrap">
    {@html $t('instAxialText')}
  </p>