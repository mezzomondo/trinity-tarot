import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { sveltePreprocess } from 'svelte-preprocess';

export default defineConfig({
	plugins: [svelte(), sveltekit(), tailwindcss()],
	server: {
		// other server configurations...
		allowedHosts: [
			'krill-moving-lemur.ngrok-free.app', // Add your ngrok host here
			'trinity-tarot.vercel.app'
			// you can add other hosts if needed
		]
	},
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelte({ preprocess: sveltePreprocess() }), svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts'],
					testTransformMode: {
						web: ['**/*.svelte'] // ✅ Ora è nel posto giusto dentro "test"
					}
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					testTransformMode: {
						web: ['**/*.svelte'] // ✅ Ora è nel posto giusto dentro "test"
					}
				}
			}
		]
	}
});
