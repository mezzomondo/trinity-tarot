<script lang="ts">
  import { writable, derived, get } from 'svelte/store';
  import { language, cards } from '../stores/cards';
  import type { Card } from '../types';
  import CardComponent from '../components/Card.svelte';
  import PopUp from '../components/PopUp.svelte';
  import { t } from '../translations';
  import LanguageSwitcher from '../components/LanguageSwitcher.svelte';

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
  <div class="absolute top-4 right-4">
    <LanguageSwitcher />
  </div> 
  {#if !showCards}
    <div class="relative bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-4xl">
      <h1 class="text-2xl font-bold text-black mb-2">{t('oracleGameTitle', currentLanguage).toUpperCase()}</h1>
      <h1 class="text-2xl font-bold text-black mb-2">{t('oracleGameSubTitle', currentLanguage).toUpperCase()}</h1>
      <p class="text-base text-black text-center mb-4 px-6">{t('oracleGameText', currentLanguage)}</p>
      <div class="relative w-full">
        <img src="/src/assets/trinity-tarot-opener.jpg" alt="Trinity Tarot Opener" class="w-full h-64 object-cover rounded-lg" />
      </div>
      <button on:click={startGame} class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6">
        {t('start', currentLanguage)}
      </button>
      <a href="/instructions" class="text-black hover:underline mt-4">
        {t('instructions', currentLanguage)}
      </a>
      <div class="flex flex-col items-center mt-6">
        <img src="/src/assets/logo-ugo-dossi-weiß-transparent-footer.png" alt="Ugo Dossi Logo" class="mb-2" />
        <p class="text-sm text-gray-600">© 2021 UGO DOSSI</p>
        <p class="text-sm text-gray-600">UGODOSSI@UGODOSSI.COM</p>
        <a href="https://ugodossi.com/trinity-tarot/" class="text-sm text-black hover:underline">ugodossi.com/trinity-tarot</a>
      </div>
    </div>
  {/if}

  {#if showCards}
    <div class="flex flex-col items-center gap-6">
      <div class="flex justify-center gap-6">
        {#each $selectedCards as card, index}
          <CardComponent {card} {currentLanguage} label={index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'} onSelect={handleCardSelect} />
        {/each}
      </div>
      {#if !showXY}
        <button on:click={calculateXY} class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6">
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
        <button on:click={calculateZ} class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6">
          {t('calculateZ', currentLanguage)}
        </button>
      {/if}
      {#if showZ && $cardZ}
        <CardComponent card={$cardZ} {currentLanguage} label="Z" onSelect={handleCardSelect} />
          <button on:click={startGame} class="mt-4 px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
            {t('restart', currentLanguage)}
          </button>
      {/if}
    </div>
  {/if}

  {#if selectedCard}
    <PopUp card={selectedCard} {currentLanguage} onClose={closePopUp} />
  {/if}
</div>