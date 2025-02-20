<script lang="ts">
    import { t } from 'svelte-i18n';
    import { writable } from 'svelte/store';
  
    export let onStartGame: () => void;
    export let onNextStep: () => void;
    export let onShowInstructions: () => void;
  
    // State to determine the current step
    const currentStep = writable(0);
  
    function handleClick() {
      if ($currentStep === 0) {
        onStartGame();
      } else {
        onNextStep();
      }
      currentStep.update(n => n + 1);
      console.log(currentStep)
    }
  </script>
  
  <div class="fixed bottom-0 left-0 right-0 text-white p-4 flex justify-around items-center shadow-lg" style="background-color: #d9dadc;">
    <button on:click={handleClick} class="mt-4 px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
      {#if $currentStep === 0}
        {#await $t('start')}{:then translatedText}
          {translatedText}
        {/await}
      {:else}
        {#await $t('next')}{:then translatedText}
          {translatedText}
        {/await}
      {/if}
    </button>
    <button on:click={onShowInstructions} class="mt-4 text-black hover:underline">
      {#await $t('instructions')}{:then translatedText}
        {translatedText}
      {/await}
    </button>
  </div>
