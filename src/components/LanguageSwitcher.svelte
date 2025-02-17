<script lang="ts">
  import { locale, locales } from 'svelte-i18n';

  let currentLocale: string | undefined;
  locale.subscribe(value => {
    currentLocale = value ?? 'it'; // Default to 'it' if value is null or undefined
  });

  function changeLanguage(lang: string) {
    locale.set(lang);
  }
</script>

<div>
  {#each Object.keys($locales) as lang}
    <button on:click={() => changeLanguage(lang)} class="mr-2 px-2 py-1 text-sm font-medium text-black bg-white border border-black rounded hover:bg-gray-200">
      {lang.toUpperCase()}
    </button>
  {/each}
</div>