<script lang="ts">
	import { type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';

	type Props = {
		isOpen: boolean;
		onClose: () => void;
		size: 'small' | 'medium' | 'large';
		dataTestid: string;
		children: Snippet;
	};

	let { isOpen, onClose, size = 'medium', dataTestid = '', children } = $props();
</script>

{#if isOpen}
	<div
		class="bg-opacity-80 pointer-events-auto fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-200 backdrop-blur-sm"
	>
		{#if size === 'small'}
			<!-- Stile speciale per SMALL -->
			<div
				class="relative w-full max-w-md overflow-hidden rounded-lg border border-gray-300 shadow-lg"
				data-testid={dataTestid}
			>
				<!-- Parte superiore nera con logo -->
				<div class="relative flex h-32 items-center justify-center bg-black">
					<img
						src="/images/logo-ugo-dossi-weiß-transparent-footer.png"
						alt="Logo"
						class="h-16 w-auto"
					/>
					<button
						onclick={onClose}
						class="absolute top-4 right-4 text-2xl text-white hover:text-gray-400"
					>
						&times;
					</button>
				</div>
				<div class="bg-white p-6 text-center text-black">
					{@render children()}
					<div class="mt-4 flex justify-end">
						<button
							onclick={onClose}
							class="transform rounded-lg border border-black px-6 py-2 transition-transform hover:scale-105 hover:bg-gray-200"
							data-testid="close-modal"
						>
							{#await $t('close') then translatedText}{translatedText}{/await}
						</button>
					</div>
				</div>
			</div>
		{:else}
			<!-- Versioni MEDIUM e LARGE standard -->
			<div
				class={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-lg 
          ${size === 'large' ? 'max-w-4xl' : 'max-w-2xl'}`}
				data-testid={dataTestid}
			>
				<button
					onclick={onClose}
					class="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
				>
					&times;
				</button>
				{@render children()}
				<div class="mt-4 flex justify-end">
					<button
						onclick={onClose}
						class="transform rounded-lg border border-black bg-white px-6 py-2 text-black shadow-md transition-transform hover:scale-105 hover:bg-gray-200"
						data-testid="close-modal"
					>
						{#await $t('close') then translatedText}{translatedText}{/await}
					</button>
				</div>
			</div>
		{/if}
	</div>
{/if}
