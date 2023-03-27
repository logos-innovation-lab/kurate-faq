<script>
	/** @type {import('./$types').PageData} */
	import Container from '$lib/components/container.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} - Kurate FAQ</title>
	<meta name="description" content="{data.title} - Kurate FAQ" />
</svelte:head>

<Container>
	<div class="py-12">
		<a href="/"><h1 class="inline underline">All topics</h1></a>
		→
		<h2 class="font-semibold inline">{data.title}</h2>
	</div>

	{@html data.content}
</Container>
