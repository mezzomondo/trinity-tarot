<script lang="ts">
    import type { Card } from '../types';
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
      <p class="text-sm text-gray-600 mb-2"><strong>Figurative Element:</strong> {card.figurativeElement[currentLanguage]}</p>
      <p class="text-sm text-gray-600 mb-2"><strong>Ability:</strong> {card.ability[currentLanguage]}</p>
      <p class="text-sm text-gray-600 mb-2"><strong>Meaning:</strong> {card.meaning[currentLanguage]}</p>
      <p class="text-sm text-gray-600 mb-2"><strong>Number and Quantity:</strong> {card.numberAndQuantity[currentLanguage]}</p>
      <p class="text-sm text-gray-600 mb-2"><strong>Contextual Description:</strong> {card.contextualDescription[currentLanguage]}</p>
      <p class="text-sm text-gray-600"><strong>Oracle:</strong> {card.oracle[currentLanguage]}</p>
    </div>
  </div>