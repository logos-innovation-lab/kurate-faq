<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Divider from '$lib/components/divider.svelte';
	import AddAlt from '$lib/components/icons/add-alt.svelte';
	import SubtractAlt from '$lib/components/icons/subtract-alt.svelte';
	import { createEventDispatcher } from 'svelte';

	export let open: boolean | undefined = undefined;

	const dispatch = createEventDispatcher();
</script>

<div class="topic-block">
	<Container>
		<h2 class="topic-title">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a on:click={() => dispatch('click')}>
				<slot name="title" />
				{#if open}
					<SubtractAlt size={20} />
				{:else}
					<AddAlt size={20} />
				{/if}
			</a>
		</h2>
		<div class={`articles ${open ? 'open' : ''}`}>
			<slot />
		</div>
	</Container>
</div>
<Divider />

<style>
	.topic-title {
		cursor: pointer;
	}

	.topic-title a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: var(--spacing-24);
		text-decoration: none;
	}

	.articles {
		display: none;
	}

	.articles.open {
		display: block;
	}
</style>
