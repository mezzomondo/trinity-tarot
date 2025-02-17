<script lang="ts">
    import { t } from '../../translations';
    import { language } from '../../stores/cards';
    import { get } from 'svelte/store';
    import LanguageSwitcher from '../../components/LanguageSwitcher.svelte';

    let currentLanguage: 'it' | 'en' = get(language) as 'it' | 'en';
    language.subscribe((value) => { currentLanguage = value as 'it' | 'en'; });
</script>

<div class="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4 pt-10" style="font-family: 'Open Sans', Helvetica, Arial, sans-serif;">
    <div class="absolute top-4 right-4">
        <LanguageSwitcher />
    </div> 
    <div class="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-4xl">
        <h1 class="text-2xl font-bold text-center mb-10" style="color: rgb(205, 22, 25);">
            {t('gameInstructions', currentLanguage).toUpperCase()}
        </h1>
        <h1 class="text-2xl font-bold text-left mb-2 text-black">
            {t('instGameTitle', currentLanguage).toUpperCase()}
        </h1>
        <p class="text-base text-black text-left mb-8 px-6">
            {t('oracleGameText', currentLanguage)}
        </p>
        <h1 class="text-2xl font-bold text-left mb-2 text-black">
            {t('instLayingTitle', currentLanguage).toUpperCase()}
        </h1>
        <p class="text-base text-black text-left mb-8 px-6">
            {t('instLayingText', currentLanguage)}
        </p>
        <h1 class="text-2xl font-bold text-left mb-8 text-black">
            {t('instAxialTitle', currentLanguage).toUpperCase()}
        </h1>
        <img src="/src/assets/reading-the-axial-cross-oracle.jpg" alt="Axial Cross Oracle" class="w-full max-w-2xl rounded-lg shadow-md mb-8">
        <p class="text-base text-black text-left mb-8 px-6" style="white-space: pre-wrap">
            {t('instAxialText', currentLanguage)}
        </p>
        <div class="flex flex-row gap-4">
            <a href="/" class="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
              Home
            </a>
        </div>
    </div>
</div>
