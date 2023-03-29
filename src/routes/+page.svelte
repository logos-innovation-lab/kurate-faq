<script lang="ts">
	/** @type {import('./$types').PageData} */
	import Article from '$lib/components/article.svelte';
	import TopicBlock from '$lib/components/topic-block.svelte';
	export let data;
</script>

<svelte:head>
	<title>Kurate FAQ</title>
	<meta name="description" content="Kurate FAQ" />
</svelte:head>

<div class="accordion">
	<TopicBlock open>
		{#each data.articles as article, i}
			<Article href="/{article.slug}" class={i === 0 ? 'open' : 'closed'}>
				<svelte:fragment slot="title">
					{article.title}
				</svelte:fragment>
				<svelte:fragment slot="body">
					{article.summary}
				</svelte:fragment>
			</Article>
		{/each}
	</TopicBlock>
	<TopicBlock>
		{#each data.articles as article, i}
			<Article href="/{article.slug}" class={i === 3 ? 'open' : 'closed'}>
				<svelte:fragment slot="title">
					{article.title}
				</svelte:fragment>
				<svelte:fragment slot="body">
					{article.summary}
				</svelte:fragment>
			</Article>
		{/each}
	</TopicBlock>
	<TopicBlock>
		{#each data.articles as article, i}
			<Article href="/{article.slug}" class={i === 2 ? 'open' : 'closed'}>
				<svelte:fragment slot="title">
					{article.title}
				</svelte:fragment>
				<svelte:fragment slot="body">
					{article.summary}
				</svelte:fragment>
			</Article>
		{/each}
	</TopicBlock>
</div>

<style>
</style>
