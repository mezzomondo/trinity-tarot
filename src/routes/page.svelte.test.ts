import { describe, test, expect, beforeAll } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import { locale } from 'svelte-i18n';
import Page from './+page.svelte';

beforeAll(() => {
	// Qui forziamo la lingua a "en"
	locale.set('en');
});

describe('/+page.svelte', () => {
	test('renders initial container with correct structure', () => {
		const { container } = render(Page);

		// Seleziona il container principale, che ha classi specifiche (puoi modificare se preferisci usare data-testid)
		const mainContainer = container.querySelector('div.flex.min-h-screen.w-screen');
		expect(mainContainer).toBeInTheDocument();

		// Controlla il language switcher tramite il suo id
		const languageSwitcher = container.querySelector('#language-switcher');
		expect(languageSwitcher).toBeInTheDocument();

		// Verifica che l'immagine con alt "Trinity Tarot Opener" sia presente
		const openerImage = screen.getByAltText('Trinity Tarot Opener');
		expect(openerImage).toBeInTheDocument();

		// Verifica il footer: ad esempio, controlla la presenza di un link specifico
		const footerLink = screen.getByRole('link', { name: /ugodossi\.com\/trinity-tarot/i });
		expect(footerLink).toBeInTheDocument();

		const footer = screen.getByTestId('footer-bar');
		expect(footer).toBeInTheDocument();
	});
});
