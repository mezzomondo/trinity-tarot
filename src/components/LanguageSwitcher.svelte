<script lang="ts">
  import { locale } from 'svelte-i18n';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';

  let currentLocale = get(locale) as string;
  let isOpen = false;

  function switchLanguage(lang: string) {
    locale.set(lang);
    currentLocale = lang;
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
    <button type="button" on:click={toggleDropdown} class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {currentLocale.toUpperCase()}
      <svg class="-mr-1 ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {#if isOpen}
    <div class="origin-top-right absolute right-0 mt-1 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <button on:click={() => switchLanguage('it')} class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left">
          ITALIANO
        </button>
        <button on:click={() => switchLanguage('en')} class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left">
          ENGLISH
        </button>
      </div>
    </div>
  {/if}
</div>