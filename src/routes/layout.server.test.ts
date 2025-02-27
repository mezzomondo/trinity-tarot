import { describe, test, expect, beforeEach } from 'vitest';
import { load } from './+layout.server';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { ServerLoadEvent } from '@sveltejs/kit';
import type { RouteParams, LayoutRouteId } from './$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createMinimalEvent(urlString: string): ServerLoadEvent<RouteParams, any, LayoutRouteId> {
	const url = new URL(urlString);
	return {
		url,
		params: {},
		route: { id: '/' as LayoutRouteId },
		fetch: globalThis.fetch,
		request: new Request(urlString),
		setHeaders: () => {},
		cookies: {
			get: () => '',
			getAll: () => [],
			set: () => {},
			delete: () => {},
			serialize: () => ''
		},
		locals: {},
		platform: {},
		parent: async () => ({}),
		depends: () => {},
		untrack: <T>(callback: () => T): T => callback(),
		getClientAddress: () => '127.0.0.1',
		isDataRequest: false,
		isSubRequest: false
	};
}

describe('Layout server load', () => {
	beforeEach(() => {
		locale.set('');
	});

	test('imposta il locale a "it" se la query string è ?lang=it', async () => {
		const event = createMinimalEvent('http://localhost:9876/?lang=it');
		await load(event);
		expect(get(locale)).toBe('it');
	});

	test('fa fallback a "en" se la query string contiene una lingua non supportata', async () => {
		const event = createMinimalEvent('http://localhost:9876/?lang=fr');
		await load(event);
		expect(get(locale)).toBe('en');
	});

	test('fa fallback a "en" se non viene fornito alcun parametro lang', async () => {
		const event = createMinimalEvent('http://localhost:9876/');
		await load(event);
		expect(get(locale)).toBe('en');
	});
});
