import { describe, test, expect, beforeAll, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import { locale } from 'svelte-i18n';
import FooterBar from './FooterBar.svelte';

beforeAll(() => {
	// Qui forziamo la lingua a "en"
	locale.set('en');
});

describe('Footer Bar', () => {
	test('renders command bar with expected elements using test ids', () => {
		render(FooterBar);

		const startButton = screen.getByTestId('start-button');
		expect(startButton).toBeInTheDocument();

		const toggleExplanationsCheckbox = screen.getByTestId('toggle-explanations');
		expect(toggleExplanationsCheckbox).toBeInTheDocument();

		const instructionsButton = screen.getByTestId('instructions-button');
		expect(instructionsButton).toBeInTheDocument();
	});

	test("quando currentStep è 0 e non è l'ultimo step, il click chiama onStartGame", async () => {
		const onStartGame = vi.fn();
		const onNextStep = vi.fn();
		const onRestart = vi.fn();
		const onShowInstructions = vi.fn();
		const onToggleExplanations = vi.fn();

		// Renderizza il componente con isLastStep false e altri flag impostati
		render(FooterBar, {
			props: {
				onStartGame,
				onNextStep,
				onRestart,
				onShowInstructions,
				onToggleExplanations,
				isLastStep: false,
				isExplanation: false,
				enableExplanations: true
			}
		});

		// Trova il pulsante principale
		const startButton = await screen.findByTestId('start-button');

		// Al primo click, dato che currentStep iniziale è 0, dovrebbe chiamare onStartGame
		await fireEvent.click(startButton);

		await waitFor(() => {
			expect(onStartGame).toHaveBeenCalledTimes(1);
		});
	});

	test("quando currentStep è > 0 e non è l'ultimo step, il click chiama onNextStep", async () => {
		const onStartGame = vi.fn();
		const onNextStep = vi.fn();
		const onRestart = vi.fn();
		const onShowInstructions = vi.fn();
		const onToggleExplanations = vi.fn();

		// Renderizza il componente
		render(FooterBar, {
			props: {
				onStartGame,
				onNextStep,
				onRestart,
				onShowInstructions,
				onToggleExplanations,
				isLastStep: false,
				isExplanation: false,
				enableExplanations: true
			}
		});

		const startButton = await screen.findByTestId('start-button');

		// Il primo click chiama onStartGame (e incrementa currentStep a 1)
		await fireEvent.click(startButton);
		await waitFor(() => {
			expect(onStartGame).toHaveBeenCalledTimes(1);
		});

		// Il secondo click, con currentStep > 0, dovrebbe chiamare onNextStep
		await fireEvent.click(startButton);
		await waitFor(() => {
			expect(onNextStep).toHaveBeenCalledTimes(1);
		});
	});

	test("quando è l'ultimo step, il click chiama onRestart e resetta currentStep", async () => {
		const onStartGame = vi.fn();
		const onNextStep = vi.fn();
		const onRestart = vi.fn();
		const onShowInstructions = vi.fn();
		const onToggleExplanations = vi.fn();

		// Imposta isLastStep a true
		render(FooterBar, {
			props: {
				onStartGame,
				onNextStep,
				onRestart,
				onShowInstructions,
				onToggleExplanations,
				isLastStep: true,
				isExplanation: false,
				enableExplanations: true
			}
		});

		const startButton = await screen.findByTestId('start-button');
		await fireEvent.click(startButton);

		await waitFor(() => {
			expect(onRestart).toHaveBeenCalledTimes(1);
		});
	});

	test('il checkbox chiama onToggleExplanations con il valore corretto', async () => {
		const onStartGame = vi.fn();
		const onNextStep = vi.fn();
		const onRestart = vi.fn();
		const onShowInstructions = vi.fn();
		const onToggleExplanations = vi.fn();

		render(FooterBar, {
			props: {
				onStartGame,
				onNextStep,
				onRestart,
				onShowInstructions,
				onToggleExplanations,
				isLastStep: false,
				isExplanation: false,
				enableExplanations: false
			}
		});

		const checkbox = await screen.findByTestId('toggle-explanations');
		// Simula il cambio: settiamo il checkbox a true
		await fireEvent.change(checkbox, { target: { checked: true } });
		expect(onToggleExplanations).toHaveBeenCalledWith(true);
	});
});
