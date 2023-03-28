<script lang="ts">
	import Launch from '$lib/components/icons/launch.svelte';

	export let href: string | undefined = undefined;
	export let target: string | undefined = '_self';
</script>

<a class="launch" {href} {target}>
	<Launch size={12} />
	Article Link
</a>

<style lang="css">
	.launch {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: var(--spacing-6);
		text-decoration: none;
		line-height: 1;
		font-size: var(--font-size-sm);
	}
</style>
