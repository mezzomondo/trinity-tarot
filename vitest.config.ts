import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom', // Specifica esplicitamente JSDOM
		globals: true // Opzionale: rende `describe`, `it`, `expect`, ecc. globali
	}
});
