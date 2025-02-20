<script lang="ts">
    import type { Card } from '../types';
    import { locale, t } from 'svelte-i18n';
    import { get } from 'svelte/store';
  
    export let card: Card;
    let currentLanguage: 'it' | 'en' = get(locale) as 'it' | 'en';
</script>

<h2 class="text-2xl font-bold mb-4">#{card.id} - {card.name[currentLanguage]}</h2>
<img src={card.image} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md mb-4" />
{#if card.alternateImage}
<img src={card.alternateImage} alt={card.name[currentLanguage]} class="w-full h-48 object-contain rounded-md mb-4" />
{/if}
{#if card.figurativeElement[currentLanguage]}
<p class="text-sm text-gray-600 mb-2"><strong>{$t('figurativeElement')}:</strong> {card.figurativeElement[currentLanguage]}</p>
{/if}
{#if card.ability[currentLanguage]}
<p class="text-sm text-gray-600 mb-2"><strong>{$t('ability')}:</strong> {card.ability[currentLanguage]}</p>
{/if}
{#if card.meaning[currentLanguage]}
<p class="text-sm text-gray-600 mb-2"><strong>{$t('meaning')}:</strong> {card.meaning[currentLanguage]}</p>
{/if}
{#if card.numberAndQuantity[currentLanguage]}
<p class="text-sm text-gray-600 mb-2"><strong>{$t('numberAndQuantity')}:</strong> {card.numberAndQuantity[currentLanguage]}</p>
{/if}
{#if card.contextualDescription[currentLanguage]}
<p class="text-sm text-gray-600 mb-2">{card.contextualDescription[currentLanguage]}</p>
{/if}
{#if card.oracle[currentLanguage]}
<p class="text-lg mb-2" style="color: rgb(205, 22, 25);"><strong>{$t('oracle')}:</strong> {card.oracle[currentLanguage]}</p>
{/if}