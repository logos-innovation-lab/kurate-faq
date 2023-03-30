<script lang="ts">
	import ArticleLink from '$lib/components/article-link.svelte';
	import Caret from '$lib/components/icons/caret-right.svelte';
	import { createEventDispatcher } from 'svelte';
	let cls: string | undefined = undefined;
	export let href: string | undefined = undefined;
	export { cls as class };

	const dispatch = createEventDispatcher();
</script>

<div class={`article ${cls}`}>
	<h3 class="article-title" on:click={() => dispatch('click')}>
		<span class="caret">
			<Caret size={20} />
		</span>
		<slot name="title" />
	</h3>
	<div class="content">
		<div class="article-body">
			<slot name="body" />
		</div>
		<ArticleLink {href} />
	</div>
</div>

<style lang="css">
	.article-title {
		display: flex;
		justify-content: flex-start;
		gap: var(--spacing-6);
		align-items: center;
		padding-top: var(--spacing-12);
		padding-bottom: var(--spacing-12);
	}

	.article-body {
		padding-bottom: var(--spacing-12);
	}

	.article:last-child {
		padding-bottom: var(--spacing-36);
	}

	.content {
		padding-bottom: var(--spacing-36);
		display: flex;
	}

	.closed .content {
		display: none;
	}

	.caret {
		display: inline-flex;
	}

	.closed .caret {
		transform: rotate(0deg);
		transition: all 0.2s;
	}

	.open .content {
		display: block;
	}

	.open .caret {
		transform: rotate(90deg);
		transition: all 0.2s;
	}
</style>
