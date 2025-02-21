<script lang="ts">
    import type { Card } from '../types';
    import { locale, t } from 'svelte-i18n';
    import { get } from 'svelte/store';

    export let stateName: string;
    let currentLanguage: 'it' | 'en' = get(locale) as 'it' | 'en';
</script>

<p class="text-sm text-gray-600 mb-2">{$t(stateName)}</p>