<script lang="ts">
	import { slide } from 'svelte/transition';
	import ArticleLink from '$lib/components/article-link.svelte';
	import Caret from '$lib/components/icons/caret-right.svelte';
	import { createEventDispatcher } from 'svelte';

	export let href: string | undefined = undefined;
	export let open: boolean | undefined = undefined;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');
</script>

<div class={`article ${open && 'open'}`}>
	<h3 class="article-title" on:click={onClick} on:keyup={onClick}>
		<span class="caret">
			<Caret size={20} />
		</span>
		<slot name="title" />
	</h3>
	{#if open}
		<div transition:slide|local class="content">
			<div class="article-body">
				<slot name="body" />
			</div>
			<ArticleLink {href} />
		</div>
	{/if}
</div>

<style lang="css">
	.article-title {
		display: flex;
		justify-content: flex-start;
		gap: var(--spacing-6);
		align-items: center;
		padding-top: var(--spacing-12);
		padding-bottom: var(--spacing-12);
		cursor: pointer;
		user-select: none;
	}

	.article-body {
		padding-bottom: var(--spacing-12);
	}

	.article:last-child {
		padding-bottom: var(--spacing-36);
	}

	.content {
		padding-bottom: var(--spacing-36);
	}

	.caret {
		display: inline-flex;
		transform: rotate(0deg);
		transition: all 0.2s;
	}

	.open .caret {
		transform: rotate(90deg);
		transition: all 0.2s;
	}
</style>
