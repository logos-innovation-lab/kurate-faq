<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="max-w-3xl mx-auto">
	<div class="py-8">
		<a href="/"><h1 class="inline underline">All topics</h1></a>
		→
		<h2 class="font-bold inline">{data.title}</h2>
	</div>

	{@html data.content}
</div>
