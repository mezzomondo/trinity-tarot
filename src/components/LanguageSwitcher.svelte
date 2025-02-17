<script lang="ts">
    import { language } from '../stores/cards';
    import { get } from 'svelte/store';
    import { onMount } from 'svelte';
  
    let currentLanguage: 'it' | 'en' = get(language) as 'it' | 'en';
    let isOpen = false;
  
    function switchLanguage(lang: 'it' | 'en') {
      language.set(lang);
      currentLanguage = lang;
      isOpen = false;
    }
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest('#language-switcher')) {
        isOpen = false;
      }
    }
  
    onMount(() => {
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    });
  </script>
  
  <div id="language-switcher" class="relative inline-block text-left">
    <div>
      <button on:click={toggleDropdown} class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded={isOpen}>
        {currentLanguage === 'it' ? 'Italiano' : 'English'}
        <svg class="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707 1.707L5.414 10l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6A1 1 0 0110 3z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    {#if isOpen}
      <div class="origin-top-right absolute right-0 mt-1 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a tabindex="0" on:click={() => switchLanguage('it')} on:keydown={(e) => e.key === 'Enter' && switchLanguage('it')} class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" role="menuitem" href="#">
            Italiano
          </a>
          <a tabindex="0" on:click={() => switchLanguage('en')} on:keydown={(e) => e.key === 'Enter' && switchLanguage('en')} class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" role="menuitem" href="#">
            English
          </a>
        </div>
      </div>
    {/if}
  </div>