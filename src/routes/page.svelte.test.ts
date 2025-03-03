import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/svelte';
import { locale } from 'svelte-i18n';
import Page from './+page.svelte';
import { beforeAll, describe, expect, test, vi } from 'vitest';

beforeAll(() => {
	// Force the language to "en"
	locale.set('en');
	window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe('/+page.svelte', () => {
	test('renders initial container with correct structure', () => {
		const { container } = render(Page);

		// Select the main container, which has specific classes (you can modify to use data-testid if preferred)
		const mainContainer = container.querySelector('div.flex.min-h-screen.w-screen');
		expect(mainContainer).toBeInTheDocument();

		// Check the language switcher using its id
		const languageSwitcher = container.querySelector('#language-switcher');
		expect(languageSwitcher).toBeInTheDocument();

		// Verify that the image with alt "Trinity Tarot Opener" is present
		const openerImage = screen.getByAltText('Trinity Tarot Opener');
		expect(openerImage).toBeInTheDocument();

		// Verify the footer: for example, check the presence of a specific link
		const footerLink = screen.getByRole('link', { name: /ugodossi\.com\/trinity-tarot/i });
		expect(footerLink).toBeInTheDocument();

		const footer = screen.getByTestId('footer-bar');
		expect(footer).toBeInTheDocument();
	});

	test('opens and closes the correct modal based on explanations setting', async () => {
		render(Page);

		// Check the state of the explanations checkbox
		const explanationCheckbox = screen.getByTestId('toggle-explanations') as HTMLInputElement;
		const isExplanationsEnabled = explanationCheckbox.checked;

		if (isExplanationsEnabled) {
			// Verify that the start-button is initially present
			const startButton = screen.getByTestId('start-button');
			expect(startButton).toBeInTheDocument();

			// Simulate clicking the start-button
			fireEvent.click(startButton);

			// Wait for the explanation modal to appear
			await waitFor(() => {
				expect(screen.getByTestId('card-modal')).toBeInTheDocument();
			});

			const closeModal = screen.getByTestId('close-modal');
			fireEvent.click(closeModal);

			await waitFor(() => {
				expect(screen.queryByTestId('card-modal')).not.toBeInTheDocument();
			});
		}
	});
});
