<script lang="ts">
  import { writable, get } from 'svelte/store';
  import { transition, type State, configureOptions } from '../stores/state';
  import { cards } from '../stores/cards';
  import type { Card } from '../types';
  import CardComponent from '../components/Card.svelte';
  import PopUp from '../components/PopUp.svelte';
  import { locale, t } from 'svelte-i18n';
  import LanguageSwitcher from '../components/LanguageSwitcher.svelte';
  import FooterBar from '../components/FooterBar.svelte';
  import InstructionsPopUp from '../components/InstructionsPopUp.svelte';

  let state: State = $state({
    current: 'Initial',
    config: {
        enableExplanations: false
    },
    data: {
        a: null as Card | null,
        b: null as Card | null,
        x: null as Card | null,
        c: null as Card | null,
        d: null as Card | null,
        y: null as Card | null,
        z: null as Card | null
    },
    ui: {
      selectedCard: null
    }
  });
  let showInstructions = writable(false);
  let currentLanguage: 'it' | 'en' = get(locale) as 'it' | 'en';
  const cardSequence = ['a', 'b', 'x', 'c', 'd', 'y', 'z']; // Sequenza delle carte
  const cardOrder = cardSequence.map(key => ({ key, label: key.toUpperCase() }));
  

  function populateStateWithRandomNumbers() {
    const getUniqueRandomIndexes = (count: number, max: number): number[] => {
      const numbers = new Set<number>();
      while (numbers.size < count) {
          numbers.add(Math.floor(Math.random() * max) + 1);
      }
      return Array.from(numbers);
    };

    const randomIndexes = getUniqueRandomIndexes(4, 28);
    const selectedCards = randomIndexes.map(index => cards[index]);
    const x = cards[(randomIndexes[0] + randomIndexes[1]) % 28 || 28];
    const y = cards[(randomIndexes[2] + randomIndexes[3]) % 28 || 28];
    const z = cards[(x.id + y.id) % 28 || 28];

    // ✅ Assegna l'intero oggetto per attivare la reattività
    state = {
      ...state,
      data: {
          a: selectedCards[0],
          b: selectedCards[1],
          c: selectedCards[2],
          d: selectedCards[3],
          x,
          y,
          z
      }
    };
  }

  function startGame() {
    populateStateWithRandomNumbers();
    transition(state, 'START')
  }

  function nextStep() {
    transition(state, 'NEXT');
  }

  function restartGame() {
    transition(state, 'RESTART');
  }

  function openInstructions() {
    showInstructions.set(true);
  }

  function handleCardSelect(card: Card) {
    state.ui.selectedCard = card;
  }

  const layout = [
        ['a', 'b', 'x'],
        ['c', 'd', 'y'],
        ['z']
  ];

  function getVisibleCardsCount() {
      const current: string = state.current.replace('Card', '').toLowerCase();
      const flatLayout = layout.flat();
      const index = flatLayout.indexOf(current);
      return index === -1 ? 0 : index + 1;
  }

  function getVisibleCardsPerRow() {
      const visibleCount = getVisibleCardsCount();
      const flatLayout = layout.flat();
      
      return layout.map(row => 
          row.filter(item => flatLayout.indexOf(item) < visibleCount)
      );
  }

  function openPopUp(card: Card) {
    state.ui.selectedCard = card;
  }

  function closePopUp() {
    state.ui.selectedCard = null;
  }

</script>

<div class="flex flex-col items-center justify-start min-h-screen bg-gray-200 w-screen overflow-hidden p-4 pt-10 pb-24" style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;">
  <div class="absolute top-4 right-4">
    <LanguageSwitcher />
  </div>

  {#if state.current == 'Initial'}
    <div class="relative bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-4xl">
      <h1 class="text-2xl font-bold text-black mb-2 text-center">{#await $t('oracleGameTitle')}{:then translatedText}{translatedText.toUpperCase()}{/await}</h1>
      <h1 class="text-2xl font-bold text-black mb-2 text-center">{#await $t('oracleGameSubTitle')}{:then translatedText}{translatedText.toUpperCase()}{/await}</h1>
      <p class="text-base text-black text-left mb-4 px-6">{#await $t('oracleGameText')}{:then translatedText}{translatedText}{/await}</p>
      <div class="relative w-full">
        <img src="/images/trinity-tarot-opener.jpg" alt="Trinity Tarot Opener" class="w-full h-64 object-cover rounded-lg" />
      </div>
      <div class="flex flex-col items-center mt-6">
        <img src="/images/logo-ugo-dossi-weiß-transparent-footer.png" alt="Ugo Dossi Logo" class="mb-2" />
        <p class="text-sm text-gray-600">© 2021 UGO DOSSI</p>
        <p class="text-sm text-gray-600">UGODOSSI@UGODOSSI.COM</p>
        <a href="https://ugodossi.com/trinity-tarot/" class="text-sm text-black hover:underline">ugodossi.com/trinity-tarot</a>
      </div>
    </div>
  {/if}

  {#if state.current !== 'Initial'}
    <div class="flex flex-col items-center gap-4 w-full overflow-x-auto whitespace-nowrap max-w-full">
      {#each getVisibleCardsPerRow() as row, rowIndex}
        <div class="grid grid-cols-3 gap-4 justify-center min-w-0 overflow-x-auto">
          {#each row as key, index}
            {#if state.data[key as keyof typeof state.data]}
              <div class="shrink-0"> <!-- Previene la compressione delle carte -->
                <CardComponent 
                  card={state.data[key as keyof typeof state.data]!} 
                  {currentLanguage} 
                  label={key.toUpperCase()} 
                  onSelect={handleCardSelect}
                  on:click={() => openPopUp(state.data[key as keyof typeof state.data]!)}
                />
              </div>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</div>

{#if state.ui.selectedCard}
  <PopUp card={state.ui.selectedCard} {currentLanguage} onClose={closePopUp} />
{/if}

<FooterBar 
  onStartGame={startGame} 
  onNextStep={nextStep}
  onShowInstructions={openInstructions}
/>
