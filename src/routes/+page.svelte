<script lang="ts">
  import { writable, derived, get } from 'svelte/store';
  import { locale, t } from 'svelte-i18n';
  import { cards } from '../stores/cards';
  import type { Card } from '../types';
  import CardComponent from '../components/Card.svelte';
  import PopUp from '../components/PopUp.svelte';
  import LanguageSwitcher from '../components/LanguageSwitcher.svelte';

  const selectedCards = writable<Card[]>([]);
  let selectedCard: Card | null = null;
  let currentLanguage: 'it' | 'en' = get(locale) as 'it' | 'en';
  locale.subscribe((value) => { currentLanguage = value as 'it' | 'en'; });

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

<div class="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 pt-10 font-sans">
  <div class="absolute top-4 right-4">
    <LanguageSwitcher />
  </div> 
  {#if !showCards}
    <div class="relative bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-4xl">
      <h1 class="text-2xl font-bold text-black mb-2 text-center">{$t('oracleGameTitle').toUpperCase()}</h1>
      <h1 class="text-2xl font-bold text-black mb-2 text-center">{$t('oracleGameSubTitle').toUpperCase()}</h1>
      <p class="text-base text-black text-center mb-4 px-6">{$t('oracleGameText')}</p>
      <div class="relative w-full">
        <img src="/images/trinity-tarot-opener.jpg" alt="Trinity Tarot Opener" class="w-full h-64 object-cover rounded-lg" />
      </div>
      <button on:click={startGame} class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6">
        {$t('start')}
      </button>
      <a href="/instructions" class="text-black hover:underline mt-4">
        {$t('instructions')}
      </a>
      <div class="flex flex-col items-center mt-6">
        <img src="/images/logo-ugo-dossi-weiß-transparent-footer.png" alt="Ugo Dossi Logo" class="mb-2" />
        <p class="text-sm text-gray-600">© 2021 UGO DOSSI</p>
        <p class="text-sm text-gray-600">UGODOSSI@UGODOSSI.COM</p>
        <a href="https://ugodossi.com/trinity-tarot/" class="text-sm text-black hover:underline">ugodossi.com/trinity-tarot</a>
      </div>
    </div>
  {/if}

  {#if showCards}
    <div class="flex flex-col items-center gap-6 w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each $selectedCards as card, index}
          <CardComponent {card} {currentLanguage} label={index === 0 ? 'A' : index === 1 ? 'B' : index === 2 ? 'C' : 'D'} onSelect={handleCardSelect} />
        {/each}
      </div>
      {#if !showXY}
        <button on:click={calculateXY} class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
          {$t('calculateXY')}
        </button>
      {/if}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4">
        <div class="hidden lg:block"></div>
        {#if showXY && $cardX}
          <div class="flex justify-center">
            <CardComponent card={$cardX} {currentLanguage} label="X" onSelect={handleCardSelect} />
          </div>
        {/if}
        <div class="hidden lg:block"></div>
        {#if showXY && $cardY}
          <div class="flex justify-center">
            <CardComponent card={$cardY} {currentLanguage} label="Y" onSelect={handleCardSelect} />
          </div>
        {/if}
        <div class="hidden lg:block"></div>
      </div>
      {#if showXY && !showZ}
        <button on:click={calculateZ} class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 mt-4">
          {$t('calculateZ')}
        </button>
      {/if}
      {#if showZ && $cardZ}
        <CardComponent card={$cardZ} {currentLanguage} label="Z" onSelect={handleCardSelect} />
        <button on:click={startGame} class="mt-4 px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
          {$t('restart')}
        </button>
      {/if}
      <div class="flex flex-row gap-4">
        <a href="/instructions" class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
          {$t('instructions')}
        </a>
      </div>
    </div>
  {/if}

  {#if selectedCard}
    <PopUp card={selectedCard} {currentLanguage} onClose={closePopUp} />
  {/if}
</div>