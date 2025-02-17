<script lang="ts">
    import type { Card } from '../types';
    import { locale, t } from 'svelte-i18n';
    import { get } from 'svelte/store';
    export let card: Card;
    export let onClose: () => void;

    let currentLanguage: 'it' | 'en' = get(locale) as 'it' | 'en';
    locale.subscribe((value) => { currentLanguage = value as 'it' | 'en'; });
  </script>
  
  <div class="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center" style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
      <button on:click={onClose} class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
        &times;
      </button>
      <h2 class="text-2xl font-bold mb-4">{card.name[currentLanguage]}</h2>
      <img src={card.image} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md mb-4" />
      {#if card.alternateImage}
        <img src={card.alternateImage} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md mb-4" />
      {/if}
      {#if card.figurativeElement[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{$t('figurativeElement')}:</strong> {card.figurativeElement[currentLanguage]}</p>
      {/if}
      {#if card.ability[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{$t('ability')}:</strong> {card.ability[currentLanguage]}</p>
      {/if}
      {#if card.meaning[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{$t('meaning')}:</strong> {card.meaning[currentLanguage]}</p>
      {/if}
      {#if card.numberAndQuantity[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{$t('numberAndQuantity')}:</strong> {card.numberAndQuantity[currentLanguage]}</p>
      {/if}
      {#if card.contextualDescription[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2">{card.contextualDescription[currentLanguage]}</p>
      {/if}
      {#if card.oracle[currentLanguage]}
      <p class="text-lg mb-2" style="color: rgb(205, 22, 25);"><strong>{$t('oracle')}:</strong> {card.oracle[currentLanguage]}</p>
      {/if}
    </div>
  </div>