<script lang="ts">
	import Article from '$lib/components/article.svelte';
	import TopicBlock from '$lib/components/topic-block.svelte';
	import Container from '$lib/components/container.svelte';
	import Search from '$lib/components/search.svelte';
	import Divider from '$lib/components/divider.svelte';
	import Header from '$lib/components/header.svelte';

	import type { Articles } from './+page.server';
	export let data: { articles: Articles };
</script>

<svelte:head>
	<title>Kurate FAQ</title>
	<meta name="description" content="Kurate FAQ" />
</svelte:head>

<Container>
	<Header title="FAQ" />
	<Search />
</Container>
<Divider />

<div class="accordion">
	{#each data.articles as category}
		<TopicBlock open>
			<svelte:fragment slot="title">
				{category.data.title}
			</svelte:fragment>

			{#each category?.children || [] as article, i}
				<Article href="/{article.data.slug}" class={i === 0 ? 'open' : 'closed'}>
					<svelte:fragment slot="title">
						{article.data.title}
					</svelte:fragment>
					<svelte:fragment slot="body">
						{article.content}
					</svelte:fragment>
				</Article>
			{/each}
		</TopicBlock>
	{/each}
</div>
