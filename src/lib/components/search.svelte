<script lang="ts">
	import Search from '$lib/components/icons/search.svelte';
	import Cancel from '$lib/components/icons/close.svelte';

	let isFocused = false;

	export let filterQuery = '';
	export let placeholder: string | undefined = 'Search...';
</script>

<div class="search-field">
	<div class="search-icon">
		<Search />
	</div>
	<input
		bind:value={filterQuery}
		{placeholder}
		on:focus={() => {
			isFocused = true;
		}}
		on:blur={() => {
			isFocused = false;
		}}
	/>
	{#if isFocused}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="cancel-wrapper" on:click|stopPropagation|preventDefault={() => (filterQuery = '')}>
			<Cancel />
		</div>
	{/if}
</div>

<style lang="postcss">
	.search-field {
		display: flex;
		align-items: center;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: var(--spacing-6);
		margin-inline: -24px;
		margin-bottom: var(--spacing-24);
		padding-inline: var(--spacing-24);
		width: calc(100% + 48px);
		position: relative;
		transition: padding 0.2s, width 0.2s;

		@media (min-width: 688px) {
			margin-bottom: var(--spacing-48);
		}
	}

	.search-icon {
		flex-shrink: 0;
	}

	input {
		border: none;
		font-family: var(--font-serif);
		background-color: transparent;
		width: 100%;
		outline: none;
		padding-block: var(--spacing-24);
		position: relative;
		transition: padding 0.2s;
	}

	input:disabled {
		cursor: not-allowed;
		opacity: 0.15;
	}

	input::placeholder {
		font-family: var(--font-serif);
		color: var(--grey-300);
	}

	input:focus,
	input:active {
		padding-block: var(--spacing-24);
		transition: padding 0.2s;
	}

	.search-field:focus-within {
		background-color: var(--grey-150);
	}

	input:focus-within::after {
		position: absolute;
		content: url(icons/close.svelte);
		inset: 24px 24px auto auto;
	}

	.cancel-wrapper {
		cursor: pointer;
	}
</style>
