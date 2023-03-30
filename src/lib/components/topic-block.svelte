<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Divider from '$lib/components/divider.svelte';
	import AddAlt from '$lib/components/icons/add-alt.svelte';
	import SubtractAlt from '$lib/components/icons/subtract-alt.svelte';

	export let open: boolean | undefined = undefined;
</script>

<div class="topic-block">
	<Container>
		<h2 class="topic-title">
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
	}

	.articles {
		display: none;
	}

	.articles.open {
		display: block;
	}
</style>
