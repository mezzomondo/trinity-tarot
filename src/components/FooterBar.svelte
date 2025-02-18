<script lang="ts">
    import { t } from 'svelte-i18n';
    import { writable } from 'svelte/store';
  
    export let onStartGame: () => void;
    export let onNextStep: () => void;
    export let onCalculateXY: () => void;
    export let onCalculateZ: () => void;
    export let onRestart: () => void;
    export let currentLanguage: 'it' | 'en';
  
    // State to determine the current step
    const currentStep = writable(0);
  
    function handleClick() {
      if ($currentStep === 0) {
        onStartGame();
      } else {
        onNextStep();
      }
      currentStep.update(n => n + 1);
    }
  </script>
  
  <div class="fixed bottom-0 left-0 right-0 text-white p-4 flex justify-around items-center shadow-lg" style="background-color: #d9dadc;">
    <button on:click={handleClick} class="mt-4 px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
      {#if $currentStep === 0}
        {#await $t('start')}
          <span>Loading...</span>
        {:then translatedText}
          {translatedText}
        {/await}
      {:else}
        {#await $t('next')}
          <span>Loading...</span>
        {:then translatedText}
          {translatedText}
        {/await}
      {/if}
    </button>
    <button on:click={onRestart} class="mt-4 px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
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