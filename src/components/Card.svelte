<script lang="ts">
	import { derived } from 'svelte/store';
	import { t } from 'svelte-i18n';
	import type { Card } from '../types';

	type Props = {
		card: Card;
		label: string;
		onClick: (card: Card) => void;
	};

	let { card, label, onClick } = $props();

	function handleClick() {
		onClick(card);
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

	const name = derived(t, ($t) => $t(`cards.${card.id}.name`) || '');
	const truncatedMeaning = derived(t, ($t) =>
		truncatedText($t(`cards.${card.id}.meaning`) || '', 100)
	);
</script>

<button
	onclick={handleClick}
	onkeydown={handleKeyDown}
	class="flex h-96 w-72 cursor-pointer flex-col items-center overflow-hidden rounded-lg border border-gray-300 bg-white p-4 break-words whitespace-normal shadow"
	style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;"
>
	<p class="overflow-hidden text-lg font-bold text-ellipsis">{label}</p>

	<img src={card.image} alt={$name} class="h-48 w-full rounded-md object-contain" />

	<div class="mt-2 flex-grow overflow-hidden text-center">
		<p class="overflow-hidden text-sm font-bold break-words text-ellipsis">
			#{card.id} - {$name}
		</p>

		{#if label === 'Z'}
			<p class="mt-1 text-sm font-bold break-words text-red-600">
				{#await $t(`cards.${card.id}.oracle`) then translatedText}{translatedText.toUpperCase()}{/await}
			</p>
		{:else}
			<p class="mt-1 text-xs break-words text-gray-600">
				{#await $t(`cards.${card.id}.figurativeElement`) then translatedText}{translatedText.toUpperCase()}{/await}
			</p>
			<p class="mt-1 overflow-hidden text-xs break-words text-ellipsis text-gray-400">
				{$truncatedMeaning}
			</p>
		{/if}
	</div>
</button>
