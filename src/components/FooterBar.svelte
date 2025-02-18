<script lang="ts">
    export let onStartGame: () => void;
    export let onCalculateXY: () => void;
    export let onCalculateZ: () => void;
    export let onRestart: () => void;
    export let currentLanguage: 'it' | 'en';
    import { t } from 'svelte-i18n';
  </script>
  
  <div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-around items-center shadow-lg">
    <button on:click={onStartGame} class="px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
      {#await $t('start')}
        <span>Loading...</span>
      {:then translatedText}
        {translatedText}
      {/await}
    </button>
    <button on:click={onCalculateXY} class="px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
      {#await $t('calculateXY')}
        <span>Loading...</span>
      {:then translatedText}
        {translatedText}
      {/await}
    </button>
    <button on:click={onCalculateZ} class="px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
      {#await $t('calculateZ')}
        <span>Loading...</span>
      {:then translatedText}
        {translatedText}
      {/await}
    </button>
    <button on:click={onRestart} class="px-6 py-2 bg-blue-500 rounded hover:bg-blue-700">
      {#await $t('restart')}
        <span>Loading...</span>
      {:then translatedText}
        {translatedText}
      {/await}
    </button>
  </div>
  
  <style>
    .fixed {
      position: fixed;
      width: 100%;
    }
  </style>