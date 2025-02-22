<script lang="ts">
    import { type Snippet } from 'svelte';
    import { t } from 'svelte-i18n';

    type Props = {
        isOpen: boolean,
        onClose: () => void,
        title: string,
        size: 'small' | 'medium' | 'large',
        children: Snippet,
    }

    let { isOpen, onClose, title = '', size = 'medium', children } = $props();
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-200 bg-opacity-80 z-50 flex items-center justify-center overflow-hidden pointer-events-auto backdrop-blur-sm">
    {#if size === 'small'}
      <!-- Stile speciale per SMALL -->
      <div class="relative max-w-md w-full rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <!-- Parte superiore nera con logo -->
        <div class="bg-black h-32 flex items-center justify-center relative">
          <img src="/images/logo-ugo-dossi-weiß-transparent-footer.png" alt="Logo" class="h-16 w-auto">
          <button onclick={onClose} class="absolute top-4 right-4 text-white text-2xl hover:text-gray-400">
            &times;
          </button>
        </div>
        <div class="p-6 bg-white text-black text-center">
          {@render children()}
          <div class="flex justify-end mt-4">
            <button onclick={onClose} class="px-6 py-2 border  border-black rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
              {#await $t('close')}{:then translatedText}{translatedText}{/await}
            </button>
          </div>
        </div>
      </div>
    {:else}
      <!-- Versioni MEDIUM e LARGE standard -->
      <div class={`relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto 
          ${size === 'large' ? 'max-w-4xl' : 'max-w-2xl'}`}>
        <button onclick={onClose} class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
          &times;
        </button>
        {#if title}
          <h2 class="text-2xl font-bold mb-4">{title}</h2>
        {/if}
        {@render children()}
        <div class="flex justify-end mt-4">
          <button onclick={onClose} class="px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
            {#await $t('close')}{:then translatedText}{translatedText}{/await}
          </button>
        </div>
      </div>
    {/if}
  </div>
{/if}
