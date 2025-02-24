<script lang="ts">
	import { tick } from 'svelte';
	import { writable, get } from 'svelte/store';
	import { locale, t } from 'svelte-i18n';
	import type { Card } from '../types';
	import { cards } from '../stores/cards';
	import { transition, type State, configureOptions } from '../stores/state';
	import Modal from '../components/Modal.svelte';
	import CardModal from '../components/CardModal.svelte';
	import InstructionsModal from '../components/InstructionsModal.svelte';
	import ExplanationModal from '../components/ExplanationModal.svelte';
	import CardComponent from '../components/Card.svelte';
	import LanguageSwitcher from '../components/LanguageSwitcher.svelte';
	import FooterBar from '../components/FooterBar.svelte';

	let showInstructions = writable(false);
	const cardSequence = ['a', 'b', 'x', 'c', 'd', 'y', 'z'];
	let currentLanguage: 'it' | 'en' = $locale as 'it' | 'en';
	const cardOrder = cardSequence.map((key) => ({ key, label: key.toUpperCase() }));
	let isCardModalOpen = writable(false);
	let isInstructionsModalOpen = writable(false);
	let isExplanationModalOpen = writable(false);

	// Stato reattivo con rune
	let state = $state<State>({
		current: 'Initial',
		config: {
			enableExplanations: true
		},
		data: {
			a: null as Card | null,
			b: null as Card | null,
			x: null as Card | null,
			c: null as Card | null,
			d: null as Card | null,
			y: null as Card | null,
			z: null as Card | null
		},
		ui: {
			selectedCard: null,
			lastCardElement: null as HTMLElement | null // Aggiungiamo lastCardElement nello stato
		}
	});

	async function scrollToLastCard() {
		await tick();
		if (state.ui.lastCardElement) {
			state.ui.lastCardElement.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center'
			});
		} else {
			console.warn('⚠️ lastCardElement is null');
		}
	}

	function openCardModal(card: Card) {
		state.ui.selectedCard = card;
		isCardModalOpen.set(true);
	}

	function closeCardModal() {
		state.ui.selectedCard = null;
		isCardModalOpen.set(false);
	}

	function openInstructionsModal() {
		isInstructionsModalOpen.set(true);
	}

	function closeInstructionsModal() {
		isInstructionsModalOpen.set(false);
	}

	function openExplanationModal() {
		if (state.config.enableExplanations) {
			isExplanationModalOpen.set(true);
		}
	}

	async function closeExplanationModal() {
		isExplanationModalOpen.set(false);

		if (state.current === 'ExplanationZ') {
			state.current = 'CardZ';
			if (getVisibleCardsCount() > 0) {
				await scrollToLastCard();
			}
		} else {
			await tick();
			transition(state, 'NEXT');
			if (getVisibleCardsCount() > 0) {
				await scrollToLastCard();
			}
		}
	}

	function toggleExplanations(enabled: boolean) {
		state.config.enableExplanations = enabled;
	}

	function populateStateWithRandomNumbers() {
		const getUniqueRandomIndexes = (count: number, max: number): number[] => {
			const numbers = new Set<number>();
			while (numbers.size < count) {
				numbers.add(Math.floor(Math.random() * max) + 1);
			}
			return Array.from(numbers);
		};

		const randomIndexes = getUniqueRandomIndexes(4, 28);
		const selectedCards = randomIndexes.map((index) => $cards[index]);
		const x = $cards[(randomIndexes[0] + randomIndexes[1]) % 28 || 28];
		const y = $cards[(randomIndexes[2] + randomIndexes[3]) % 28 || 28];
		const z = $cards[(x.id + y.id) % 28 || 28];

		state.data = {
			a: selectedCards[0],
			b: selectedCards[1],
			c: selectedCards[2],
			d: selectedCards[3],
			x,
			y,
			z
		};
	}
	async function startGame() {
		populateStateWithRandomNumbers();
		transition(state, 'START');
		// Non chiamare scrollToLastCard se siamo in uno stato Explanation
		if (!state.current.startsWith('Explanation') && getVisibleCardsCount() > 0) {
			await scrollToLastCard();
		}
	}

	async function nextStep() {
		if (state.current.startsWith('Explanation')) {
			openExplanationModal();
		} else {
			transition(state, 'NEXT');
			if (getVisibleCardsCount() > 0) {
				await scrollToLastCard();
			}
		}
	}

	function restartGame() {
		transition(state, 'RESET');
		state.ui.lastCardElement = null; // Resetta il riferimento
	}

	const layout = [['a', 'b', 'x'], ['c', 'd', 'y'], ['z']];

	function getVisibleCardsCount() {
		const current: string = state.current.replace('Card', '').toLowerCase();
		const flatLayout = layout.flat();
		if (state.current === 'CardZ') return flatLayout.length;
		const index = flatLayout.indexOf(current);
		return index === -1 ? 0 : index + 1;
	}

	function getVisibleCardsPerRow() {
		const visibleCount = getVisibleCardsCount();
		const flatLayout = layout.flat();
		const rows = layout.map((row) => row.filter((item) => flatLayout.indexOf(item) < visibleCount));
		return rows;
	}

	// Effetto reattivo per lo scroll
	$effect(() => {
		// 1. Monitoraggio dello stato per lo scroll
		if (
			state.current !== 'Initial' &&
			!state.current.startsWith('Explanation') &&
			state.ui.lastCardElement &&
			getVisibleCardsCount() > 0
		) {
			scrollToLastCard();
		} else {
			console.log(
				'⏸️ Effetto non attivato - Stato:',
				state.current,
				'lastCardElement:',
				state.ui.lastCardElement,
				'Carte visibili:',
				getVisibleCardsCount()
			);
		}

		// 2. Apertura del modal di spiegazione (se presente nel codice)
		if (state.current.startsWith('Explanation')) {
			isExplanationModalOpen.set(true);
		}

		currentLanguage = $locale as 'it' | 'en';
	});

	function isLastCard(
		index: number,
		rowIndex: number,
		rowLength: number,
		totalRows: number
	): boolean {
		const visibleCount = getVisibleCardsCount();
		const flatLayout = layout.flat();
		const lastVisibleIndex = visibleCount - 1;
		if (lastVisibleIndex < 0) return false;

		// Calcola l'indice flat dell'elemento corrente
		let currentFlatIndex = 0;
		for (let i = 0; i < rowIndex; i++) {
			currentFlatIndex += layout[i].length;
		}
		currentFlatIndex += index;

		const isLast = currentFlatIndex === lastVisibleIndex;
		return isLast;
	}
</script>

<div
	class="flex min-h-screen w-screen flex-col items-center justify-start overflow-hidden bg-gray-200 p-4 pt-10 pb-24"
	style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;"
>
	<div class="absolute top-4 right-4">
		<LanguageSwitcher />
	</div>

	{#if state.current === 'Initial'}
		<div
			class="relative flex w-full max-w-4xl flex-col items-center rounded-lg bg-gray-200 p-6 shadow-md"
		>
			<h1 class="mb-2 text-center text-2xl font-bold text-black">
				{#await $t('oracleGameTitle') then translatedText}{translatedText.toUpperCase()}{/await}
			</h1>
			<h1 class="mb-2 text-center text-2xl font-bold text-black">
				{#await $t('oracleGameSubTitle') then translatedText}{translatedText.toUpperCase()}{/await}
			</h1>
			<p class="mb-4 px-6 text-left text-base text-black">
				{#await $t('oracleGameText') then translatedText}{translatedText}{/await}
			</p>
			<div class="relative w-full">
				<img
					src="/images/trinity-tarot-opener.jpg"
					alt="Trinity Tarot Opener"
					class="h-64 w-full rounded-lg object-cover"
				/>
			</div>
			<div class="mt-6 flex flex-col items-center">
				<img
					src="/images/logo-ugo-dossi-weiß-transparent-footer.png"
					alt="Ugo Dossi Logo"
					class="mb-2"
				/>
				<p class="text-sm text-gray-600">© 2021 UGO DOSSI</p>
				<p class="text-sm text-gray-600">UGODOSSI@UGODOSSI.COM</p>
				<a href="https://ugodossi.com/trinity-tarot/" class="text-sm text-black hover:underline"
					>ugodossi.com/trinity-tarot</a
				>
			</div>
		</div>
	{:else}
		<div
			class="flex w-full max-w-full flex-col items-center gap-4 overflow-x-auto whitespace-nowrap"
		>
			{#each getVisibleCardsPerRow() as row, rowIndex (rowIndex)}
				<div class="flex min-w-0 justify-center gap-4 overflow-x-auto sm:grid sm:grid-cols-3">
					{#each row as key, index (key)}
						{#if state.data[key as keyof typeof state.data]}
							<div class="shrink-0">
								{#if isLastCard(index, rowIndex, row.length, getVisibleCardsPerRow().length)}
									<div bind:this={state.ui.lastCardElement}>
										<CardComponent
											card={state.data[key as keyof typeof state.data]!}
											label={key.toUpperCase()}
											{currentLanguage}
											onClick={(card: Card) => openCardModal(card)}
										/>
									</div>
								{:else}
									<CardComponent
										card={state.data[key as keyof typeof state.data]!}
										label={key.toUpperCase()}
										{currentLanguage}
										onClick={(card: Card) => openCardModal(card)}
									/>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</div>

<Modal isOpen={$isCardModalOpen} onClose={closeCardModal} size="medium">
	{#if state.ui.selectedCard}
		<CardModal card={state.ui.selectedCard} />
	{/if}
</Modal>

<Modal isOpen={$isInstructionsModalOpen} onClose={closeInstructionsModal} size="large">
	<InstructionsModal />
</Modal>

<Modal isOpen={$isExplanationModalOpen} onClose={closeExplanationModal} size="small">
	{#if state.current.startsWith('Explanation')}
		<ExplanationModal stateName={state.current} />
	{/if}
</Modal>

<FooterBar
	onStartGame={startGame}
	onNextStep={nextStep}
	onRestart={restartGame}
	onShowInstructions={openInstructionsModal}
	onToggleExplanations={toggleExplanations}
	isLastStep={state.current === 'CardZ'}
	isExplanation={state.current.startsWith('Explanation')}
	enableExplanations={state.config.enableExplanations}
/>
