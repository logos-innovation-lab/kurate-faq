<script lang="ts">
	import Button from './button.svelte';
	import Undo from '$lib/components/icons/undo.svelte';

	let cls: string | undefined = undefined;
	export { cls as class };

	let y: number;

	export let onBack: (() => unknown) | undefined = undefined;
	export let title = '';
</script>

<svelte:window bind:scrollY={y} />

<header class={`root ${y > 0 ? 'scrolled' : ''} ${cls}`}>
	<div class="content">
		{#if typeof onBack === 'function'}
			<Button variant="noBorder" icon={Undo} on:click={onBack} />
		{/if}

		<h1 class={`title ${cls}`}>
			{title}
		</h1>
	</div>
</header>

<style>
	header.root {
		position: sticky;
		inset: 0 -10px auto;
		background-color: rgba(var(--color-body-bg-rgb), 0.93);
		backdrop-filter: blur(var(--blur));
		z-index: 100;
		/* padding-inline: var(--spacing-24); */
		padding-block: var(--spacing-24);
		transition: box-shadow 0.2s, padding 0.2s;

		@media (min-width: 688px) {
			padding-block: var(--spacing-48);
			/* padding-inline: var(--spacing-48); */
			transition: padding 0.2s;
		}
	}

	header.root.scrolled {
		padding-block: var(--spacing-12);
		transition: box-shadow 0.2s, padding 0.2s;
		box-shadow: 0 1px 5px 0 rgba(var(--color-body-text-rgb), 0.25);
	}

	.content {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-12);
	}
</style>
