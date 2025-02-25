<script lang="ts">
	import type { Card } from '../types';
	import { t } from 'svelte-i18n';
	import { derived } from 'svelte/store';

	type Props = {
		card: Card;
	};

	let { card } = $props();

	const name = derived(t, ($t) => $t(`cards.${card.id}.name`) || '');
	const figurativeElement = derived(t, ($t) => $t(`cards.${card.id}.figurativeElement`) || '');
	const ability = derived(t, ($t) => $t(`cards.${card.id}.ability`) || '');
	const meaning = derived(t, ($t) => $t(`cards.${card.id}.meaning`) || '');
	const numberAndQuantity = derived(t, ($t) => $t(`cards.${card.id}.numberAndQuantity`) || '');
	const contextualDescription = derived(
		t,
		($t) => $t(`cards.${card.id}.contextualDescription`) || ''
	);
	const oracle = derived(t, ($t) => $t(`cards.${card.id}.oracle`) || '');
</script>

<h2 class="mb-4 text-2xl font-bold">#{card.id} - {$name}</h2>
<img src={card.image} alt={$name} class="mb-4 h-48 w-full rounded-md object-contain" />
{#if card.alternateImage}
	<img src={card.alternateImage} alt={$name} class="mb-4 h-48 w-full rounded-md object-contain" />
{/if}
{#if $figurativeElement}
	<p class="mb-2 text-sm text-gray-600">
		<strong>{$t('figurativeElement')}:</strong>
		{$figurativeElement}
	</p>
{/if}
{#if $ability}
	<p class="mb-2 text-sm text-gray-600">
		<strong>{$t('ability')}:</strong>
		{$ability}
	</p>
{/if}
{#if $meaning}
	<p class="mb-2 text-sm text-gray-600">
		<strong>{$t('meaning')}:</strong>
		{$meaning}
	</p>
{/if}
{#if $numberAndQuantity}
	<p class="mb-2 text-sm text-gray-600">
		<strong>{$t('numberAndQuantity')}:</strong>
		{$numberAndQuantity}
	</p>
{/if}
{#if $contextualDescription}
	<p class="mb-2 text-sm text-gray-600">{$contextualDescription}</p>
{/if}
{#if $oracle}
	<p class="mb-2 text-lg" style="color: rgb(205, 22, 25);">
		<strong>{$t('oracle')}:</strong>
		{$oracle}
	</p>
{/if}
