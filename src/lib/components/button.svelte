<script lang="ts">
	import type { ComponentConstructor, IconProps } from '$lib/types';

	let cls: string | undefined = undefined;
	export { cls as class };
	export let icon: ComponentConstructor<IconProps> | undefined = undefined;
	export let label: string | undefined = undefined;
	export let disabled: boolean | undefined = undefined;
</script>

<button type="button" {disabled} class={`root ${!label ? 'icon-only' : ''} ${cls}`} on:click>
	{#if icon !== undefined}
		<div class="wrapper">
			<svelte:component this={icon} />
		</div>
	{/if}
	{#if label !== undefined}
		{label}
	{/if}
</button>

<style lang="postcss">
	.root {
		padding-left: var(--spacing-12);
		padding-right: var(--spacing-12);
		height: 44px;
		border-width: 1px;
		border-style: solid;
		box-sizing: border-box;
		border-radius: 50px;
		cursor: pointer;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-family: var(--font-body);
		font-weight: 600;
		font-size: var(--font-size-normal);
		transition: border-color 0.2s, background-color 0.2s, color 0.2s;
		white-space: nowrap;
		color: var(--color-body-bg);
		border-color: var(--grey-400);
		background-color: var(--color-body-text);
		width: fit-content;

		& :global(svg) {
			fill: var(--color-body-bg);
		}

		&:disabled {
			background-color: var(--grey-200);
			border-color: var(--grey-200);
			color: var(--color-body-bg);
			cursor: not-allowed;
		}

		&:active:not(:disabled),
		&:hover:not(:disabled) {
			background-color: var(--color-black);
			transition: background-color 0.2s;
		}
	}
	.wrapper {
		width: 20px;
		height: 20px;
		margin-right: var(--spacing-6);
	}
</style>
