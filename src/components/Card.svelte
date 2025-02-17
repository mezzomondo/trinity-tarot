<script lang="ts">
    import type { Card } from '../types';
    export let card: Card;
    export let label: string;
    export let currentLanguage: 'it' | 'en';
  </script>
  
  <div class="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow bg-white w-72 h-96">
    <p class="font-bold text-lg">{label}</p>
    <img src={card.image} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md" />
    <p class="text-sm font-bold mt-2">#{card.id} - {card.name[currentLanguage]}</p>
    <p class="text-xs text-gray-600 mt-1">{card.description[currentLanguage]}</p>
    <p class="text-xs text-gray-400 mt-1">({card.meaning[currentLanguage]})</p>
  </div>