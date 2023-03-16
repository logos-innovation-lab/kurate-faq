<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Kurate FAQ</title>
	<meta name="description" content="Kurate FAQ" />
</svelte:head>

<section class="max-w-3xl mx-auto">
	<h1 class="font-bold py-8">All topics</h1>

	<div class="grid grid-cols-3 gap-8">
		{#each data.articles as article}
			<div>
				<h2 class="font-bold">{article.title}</h2>
				<p>
					{article.summary}
				</p>
				<a class="underline" href="/{article.slug}">Learn more</a>
			</div>
		{/each}
	</div>
</section>
