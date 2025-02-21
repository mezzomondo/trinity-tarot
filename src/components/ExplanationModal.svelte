<script lang="ts">
    import type { Card } from '../types';
    import { locale, t } from 'svelte-i18n';
    import { get } from 'svelte/store';

    export let stateName: string;
    let currentLanguage: 'it' | 'en' = get(locale) as 'it' | 'en';
</script>

<h2 class="text-2xl font-bold mb-4">#{stateName}</h2>