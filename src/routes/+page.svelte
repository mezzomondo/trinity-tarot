<script lang="ts">
  import { writable, derived, get } from 'svelte/store';
  import { language, cards } from '../stores/cards';
  import type { Card } from '../types';
  import CardComponent from '../components/Card.svelte';
  import PopUp from '../components/PopUp.svelte';
  import { t } from '../translations';

  const selectedCards = writable<Card[]>([]);
  let currentLanguage: 'it' | 'en' = get(language) as 'it' | 'en';
  let selectedCard: Card | null = null;
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

  function handleCardSelect(card: Card) {
    selectedCard = card;
  }

  function closePopUp() {
    selectedCard = null;
  }
</script>

<div class="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 pt-10" style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;">
  {#if !showCards}
    <button on:click={startGame} class="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
      {t('start', currentLanguage)}
    </button>
  {/if}

  {#if showCards}
    <div class="flex flex-col items-center gap-6">
      <div class="flex justify-center gap-6">
        {#each $selectedCards as card, index}
          <CardComponent {card} {currentLanguage} label={index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'} onSelect={handleCardSelect} />
        {/each}
      </div>
      {#if !showXY}
        <button on:click={calculateXY} class="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          {t('calculateXY', currentLanguage)}
        </button>
      {/if}
      <div class="grid grid-cols-5 gap-6 mt-4">
        <div></div>
        {#if showXY && $cardX}
          <CardComponent card={$cardX} {currentLanguage} label="X" onSelect={handleCardSelect} />
        {/if}
        <div></div>
        {#if showXY && $cardY}
          <CardComponent card={$cardY} {currentLanguage} label="Y" onSelect={handleCardSelect} />
        {/if}
        <div></div>
      </div>
      {#if showXY && !showZ}
        <button on:click={calculateZ} class="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          {t('calculateZ', currentLanguage)}
        </button>
      {/if}
      {#if showZ && $cardZ}
        <CardComponent card={$cardZ} {currentLanguage} label="Z" onSelect={handleCardSelect} />
      {/if}
    </div>
  {/if}

  {#if selectedCard}
    <PopUp card={selectedCard} {currentLanguage} onClose={closePopUp} />
  {/if}
</div>