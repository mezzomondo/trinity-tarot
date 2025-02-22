<script lang="ts">
    import { t } from 'svelte-i18n';

    export let stateName: string;

</script>

<p class="text-sm text-gray-600 mb-2">{#await $t(stateName)}{:then translatedText}{translatedText}{/await}</p>