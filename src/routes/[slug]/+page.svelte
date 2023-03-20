<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.title} - Kurate FAQ</title>
	<meta name="description" content="{data.title} - Kurate FAQ" />
</svelte:head>

<div class="max-w-7xl mx-auto px-12">
	<div class="py-12">
		<a href="/"><h1 class="inline underline">All topics</h1></a>
		→
		<h2 class="font-semibold inline">{data.title}</h2>
	</div>

	{@html data.content}
</div>
