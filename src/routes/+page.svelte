<script lang="ts">
	import Article from '$lib/components/article.svelte';
	import TopicBlock from '$lib/components/topic-block.svelte';
	import Container from '$lib/components/container.svelte';
	import Search from '$lib/components/search.svelte';
	import Divider from '$lib/components/divider.svelte';
	import Header from '$lib/components/header.svelte';

	import type { Articles } from './+page.server';
	export let data: { articles: Articles };

	let categoriesOpen = new Set([0]);
	let articlesOpen = new Set(['0-0']);

	const toggleSet = <Type>(set: Set<Type>, element: Type) => {
		if (set.has(element)) {
			set.delete(element);
		} else {
			set.add(element);
		}
		return set;
	};
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
	{#each data.articles as category, categoryId}
		<TopicBlock
			open={categoriesOpen.has(categoryId)}
			on:click={() => (categoriesOpen = toggleSet(categoriesOpen, categoryId))}
		>
			<svelte:fragment slot="title">
				{category.data.title}
			</svelte:fragment>

			{#each category?.children || [] as article, articleId}
				<Article
					href="/{article.data.slug}"
					class={articlesOpen.has(`${categoryId}-${articleId}`) ? 'open' : 'closed'}
					on:click={() => (articlesOpen = toggleSet(articlesOpen, `${categoryId}-${articleId}`))}
				>
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
