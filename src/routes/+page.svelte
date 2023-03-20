<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Kurate FAQ</title>
	<meta name="description" content="Kurate FAQ" />
</svelte:head>

<section class="max-w-7xl mx-auto px-12 pb-12">
	<h1 class="font-semibold py-12">All topics</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
		{#each data.articles as article}
			<div>
				<h2 class="font-semibold text-lg">{article.title}</h2>
				<p class="text-lg my-1.5">{article.summary}</p>
				<a class="underline" href="/{article.slug}">Learn more</a>
			</div>
		{/each}
	</div>
</section>
