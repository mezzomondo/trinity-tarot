<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	let currentLocale = get(locale) as string;
	let isOpen = false;

	function switchLanguage(lang: string) {
		locale.set(lang);
		currentLocale = lang;
		isOpen = false;
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('#language-switcher')) {
			isOpen = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	});
</script>

<div id="language-switcher" class="relative inline-block text-left">
	<div>
		<button
			type="button"
			on:click={toggleDropdown}
			class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
		>
			{currentLocale.toUpperCase()}
			<svg
				class="-mr-1 ml-2 h-4 w-4"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
	{#if isOpen}
		<div
			class="ring-opacity-5 absolute right-0 z-10 mt-1 w-24 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black"
		>
			<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
				<button
					on:click={() => switchLanguage('it')}
					class="block w-full px-4 py-2 text-left text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				>
					ITALIANO
				</button>
				<button
					on:click={() => switchLanguage('en')}
					class="block w-full px-4 py-2 text-left text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				>
					ENGLISH
				</button>
			</div>
		</div>
	{/if}
</div>
