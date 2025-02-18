<script lang="ts">
    import { t } from 'svelte-i18n';
  
    export let onClose: () => void;
  </script>
  
  <div class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
    <div class="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-4xl h-4/5 overflow-y-auto">
        <h1 class="text-2xl font-bold text-center mb-10" style="color: rgb(205, 22, 25);">
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
      <button on:click={onClose} class="mt-4 px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
        {#await $t('close')}{:then translatedText}{translatedText}{/await}
      </button>
    </div>
  </div>
  
  <style>
    .fixed {
      position: fixed;
    }
  </style>