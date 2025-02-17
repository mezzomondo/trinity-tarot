<script lang="ts">
    import type { Card } from '../types';
    import { t } from '../translations';
    export let card: Card;
    export let currentLanguage: 'it' | 'en';
    export let onClose: () => void;
  </script>
  
  <div class="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center">
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
        <p class="text-sm text-gray-600 mb-2"><strong>{t('figurativeElement', currentLanguage)}:</strong> {card.figurativeElement[currentLanguage]}</p>
      {/if}
      {#if card.ability[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{t('ability', currentLanguage)}:</strong> {card.ability[currentLanguage]}</p>
      {/if}
      {#if card.meaning[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{t('meaning', currentLanguage)}:</strong> {card.meaning[currentLanguage]}</p>
      {/if}
      {#if card.numberAndQuantity[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2"><strong>{t('numberAndQuantity', currentLanguage)}:</strong> {card.numberAndQuantity[currentLanguage]}</p>
      {/if}
      {#if card.contextualDescription[currentLanguage]}
        <p class="text-sm text-gray-600 mb-2">{card.contextualDescription[currentLanguage]}</p>
      {/if}
      {#if card.oracle[currentLanguage]}
        <p class="text-sm text-gray-600"><strong>{t('oracle', currentLanguage)}:</strong> {card.oracle[currentLanguage]}</p>
      {/if}
    </div>
  </div>