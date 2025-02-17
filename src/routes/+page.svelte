<script lang="ts">
  import { writable, derived, get } from 'svelte/store';
  import { language, cards } from '../stores/cards';
  import type { Card } from '../types';

  const selectedCards = writable<Card[]>([]);
  let currentLanguage: 'it' | 'en' = get(language) as 'it' | 'en';
  language.subscribe((value) => { currentLanguage = value as 'it' | 'en'; });

  let showCards = false;
  let showXY = false;
  let showZ = false;

  function startGame() {
      selectedCards.set([...cards.sort(() => 0.5 - Math.random()).slice(0, 4)] as Card[]);
      showCards = true;
      showXY = false;
      showZ = false;
  }

  function calculateXY() {
      showXY = true;
  }

  function calculateZ() {
      showZ = true;
  }

  const cardX = derived(selectedCards, ($selectedCards) => {
      if ($selectedCards.length >= 2) {
          return cards.find(c => c.id === (($selectedCards[0].id + $selectedCards[1].id) % 28 || 28)) || null;
      }
      return null;
  }, null);

  const cardY = derived(selectedCards, ($selectedCards) => {
      if ($selectedCards.length >= 4) {
          return cards.find(c => c.id === (($selectedCards[2].id + $selectedCards[3].id) % 28 || 28)) || null;
      }
      return null;
  }, null);

  const cardZ = derived([cardX, cardY], ([$cardX, $cardY]) => {
      if ($cardX && $cardY) {
          return cards.find(c => c.id === (($cardX.id + $cardY.id) % 28 || 28)) || null;
      }
      return null;
  }, null);
</script>

<div class="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 pt-10">
  {#if !showCards}
    <button on:click={startGame} class="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
      {currentLanguage === 'it' ? 'Inizia' : 'Start'}
    </button>
  {/if}

  {#if showCards}
    <div class="flex flex-col items-center gap-6">
      <div class="flex justify-center gap-6">
        {#each $selectedCards as card, index}
          <div class="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow bg-white w-72 h-96">
            <p class="font-bold text-lg">{index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'}</p>
            <img src={card.image} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md" />
            <p class="text-sm font-bold mt-2">#{card.id} - {card.name[currentLanguage]}</p>
            <p class="text-xs text-gray-600 mt-1">{card.description[currentLanguage]}</p>
            <p class="text-xs text-gray-400 mt-1">({card.meaning[currentLanguage]})</p>
          </div>
        {/each}
      </div>
      {#if !showXY}
        <button on:click={calculateXY} class="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          {currentLanguage === 'it' ? 'Calcola X e Y' : 'Calculate X and Y'}
        </button>
      {/if}
      <div class="grid grid-cols-5 gap-6 mt-4">
        <div></div>
        {#if showXY && $cardX}
          <div class="flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow bg-white w-72 h-96 col-span-1">
            <p class="font-bold text-lg">X</p>
            <img src={$cardX.image} alt={$cardX.name[currentLanguage]} class="w-full h-48 object-contain rounded-md" />
            <p class="text-sm font-bold mt-2">#{$cardX.id} - {$cardX.name[currentLanguage]}</p>
            <p class="text-xs text-gray-600 mt-1">{$cardX.description[currentLanguage]}</p>
            <p class="text-xs text-gray-400 mt-1">({$cardX.meaning[currentLanguage]})</p>
          </div>
        {/if}
        <div></div>
        {#if showXY && $cardY}
          <div class="flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow bg-white w-72 h-96 col-span-1">
            <p class="font-bold text-lg">Y</p>
            <img src={$cardY.image} alt={$cardY.name[currentLanguage]} class="w-full h-48 object-contain rounded-md" />
            <p class="text-sm font-bold mt-2">#{$cardY.id} - {$cardY.name[currentLanguage]}</p>
            <p class="text-xs text-gray-600 mt-1">{$cardY.description[currentLanguage]}</p>
            <p class="text-xs text-gray-400 mt-1">({$cardY.meaning[currentLanguage]})</p>
          </div>
        {/if}
        <div></div>
      </div>
      {#if showXY && !showZ}
        <button on:click={calculateZ} class="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          {currentLanguage === 'it' ? 'Calcola Z' : 'Calculate Z'}
        </button>
      {/if}
      {#if showZ && $cardZ}
      <div class="flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow bg-white w-72 h-96 col-span-1">
          <p class="font-bold text-lg">Z</p>
          <img src={$cardZ.image} alt={$cardZ.name[currentLanguage]} class="w-full h-48 object-contain rounded-md" />
          <p class="text-sm font-bold mt-2">#{$cardZ.id} - {$cardZ.name[currentLanguage]}</p>
          <p class="text-xs text-gray-600 mt-1 italic">{$cardZ.oracle[currentLanguage]}</p>
        </div>
      {/if}
    </div>
  {/if}
</div>
