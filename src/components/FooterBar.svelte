<script lang="ts">
	import { t } from 'svelte-i18n';
	import { writable } from 'svelte/store';
	import { tick } from 'svelte';

	type Props = {
		onStartGame: () => void;
		onNextStep: () => void;
		onRestart: () => void;
		onShowInstructions: () => void;
		onToggleExplanations: (enabled: boolean) => void;
		isLastStep: boolean;
		isExplanation: boolean;
		enableExplanations: boolean;
	};

	let {
		onStartGame,
		onNextStep,
		onRestart,
		onShowInstructions,
		onToggleExplanations,
		isLastStep = false,
		isExplanation,
		enableExplanations
	} = $props();

	// State to determine the current step
	const currentStep = writable(0);
	let eventQueue: (() => void)[] = [];
	let isProcessing = false;

	async function processQueue() {
		if (isProcessing) return;
		isProcessing = true;

		while (eventQueue.length > 0) {
			const action = eventQueue.shift(); // ✅ Prende il primo evento in coda
			if (action) {
				action();
				await tick(); // ✅ Attende il rendering per ogni evento
			}
		}

		isProcessing = false;
	}

	function handleClick() {
		eventQueue.push(() => {
			if (isLastStep) {
				onRestart();
				currentStep.set(0);
			} else if ($currentStep === 0) {
				onStartGame();
				currentStep.update((n) => n + 1);
			} else {
				onNextStep();
				currentStep.update((n) => n + 1);
			}
		});

		processQueue(); // ✅ Processa la coda
	}

	function handleToggleExplanations(event: Event) {
		const target = event.target as HTMLInputElement;
		onToggleExplanations(target.checked); // ✅ Chiama la funzione passata come prop
	}
</script>

<div
	class="fixed right-0 bottom-0 left-0 flex items-center justify-between bg-gray-300 p-4 text-white shadow-lg"
>
	<!-- Bottone principale -->
	<button
		onclick={handleClick}
		class="transform rounded-lg border border-black bg-white px-6 py-2 text-black shadow-md transition-transform hover:scale-105 hover:bg-gray-200"
		disabled={isExplanation}
	>
		{#if isLastStep}
			{#await $t('restart') then translatedText}{translatedText}{/await}
		{:else if $currentStep === 0}
			{#await $t('start') then translatedText}{translatedText}{/await}
		{:else}
			{#await $t('next') then translatedText}{translatedText}{/await}
		{/if}
	</button>

	<!-- Checkbox con etichetta accessibile -->
	<div class="flex items-center space-x-2">
		<input
			type="checkbox"
			id="toggle-explanations"
			checked={enableExplanations}
			onchange={handleToggleExplanations}
			class="h-5 w-5 cursor-pointer"
		/>
		<label for="toggle-explanations" class="cursor-pointer text-sm text-black">
			{#await $t('showExplanations') then translatedText}{translatedText}{/await}
		</label>
	</div>

	<!-- Link alle istruzioni -->
	<button onclick={onShowInstructions} class="text-sm text-black hover:underline">
		{#await $t('instructions') then translatedText}{translatedText}{/await}
	</button>
</div>
