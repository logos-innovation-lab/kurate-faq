<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Divider from '$lib/components/divider.svelte';
	import AddAlt from '$lib/components/icons/add-alt.svelte';
	import SubtractAlt from '$lib/components/icons/subtract-alt.svelte';
	import { createEventDispatcher } from 'svelte';

	export let open: boolean | undefined = undefined;

	const dispatch = createEventDispatcher();
	const onClick = () => dispatch('click');
</script>

<div class="topic-block">
	<Container>
		<h2 class="topic-title" on:click={onClick} on:keyup={onClick}>
			<slot name="title" />
			{#if open}
				<SubtractAlt size={20} />
			{:else}
				<AddAlt size={20} />
			{/if}
		</h2>
		<div class={`articles ${open ? 'open' : ''}`}>
			<slot />
		</div>
	</Container>
</div>
<Divider />

<style>
	.topic-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: var(--spacing-24);
		cursor: pointer;
		user-select: none;
	}

	.articles {
		display: none;
	}

	.articles.open {
		display: block;
	}
</style>
