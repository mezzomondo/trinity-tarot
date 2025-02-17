<script lang="ts">
    import type { Card } from '../types';
  
    export let card: Card;
    export let label: string;
    export let currentLanguage: 'it' | 'en';
    export let onSelect: (card: Card) => void;
  
    function handleClick() {
      onSelect(card);
    }
  
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        handleClick();
      }
    }
  
    function truncatedText(text: string, maxLength: number): string {
      if (text.length <= maxLength) {
        return text;
      }
      const truncated = text.slice(0, maxLength);
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      return (lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) : truncated) + '...';
    }
  </script>
  
  <button on:click={handleClick} on:keydown={handleKeyDown} class="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow bg-white w-72 h-96 cursor-pointer" style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;">
    <p class="font-bold text-lg">{label}</p>
    <img src={card.image} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md" />
    <p class="text-sm font-bold mt-2">#{card.id} - {card.name[currentLanguage]}</p>
    {#if label === 'Z'}
      <p class="text-sm mt-1" style="color: rgb(205, 22, 25); font-size: 1rem;"><strong>{card.oracle[currentLanguage]}</strong></p>
    {:else}
      <p class="text-xs text-gray-600 mt-1">{card.figurativeElement[currentLanguage]}</p>
      <p class="text-xs text-gray-400 mt-1">{truncatedText(card.meaning[currentLanguage], 100)}</p>
    {/if}
  </button>