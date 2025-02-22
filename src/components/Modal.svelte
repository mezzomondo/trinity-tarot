<script lang="ts">
    import { t } from 'svelte-i18n';

    type Props = {
        isOpen: boolean,
        onClose: () => void,
        title: string,
        size: 'small' | 'medium' | 'large',
    }

    let { isOpen, onClose, title = '', size = 'medium' } = $props();

  </script>
  
  {#if isOpen}
    <div class="fixed inset-0 bg-gray-200 bg-opacity-80 z-50 flex items-center justify-center overflow-hidden pointer-events-auto backdrop-blur-sm">
      <div class={`relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto ${size === 'small' ? 'max-w-md' : size === 'large' ? 'max-w-4xl' : 'max-w-2xl'}`}>
        <button onclick={onClose} class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">
          &times;
        </button>
        {#if title}
          <h2 class="text-2xl font-bold mb-4">{title}</h2>
        {/if}
        <slot/>
        <div class="flex justify-end mt-4">
          <button onclick={onClose} class="px-6 py-2 text-black bg-white border border-black rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
            {#await $t('close')}{:then translatedText}{translatedText}{/await}
          </button>
        </div>
      </div>
    </div>
  {/if}