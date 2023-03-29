<script>
	import './styles.css';
	import '@fontsource/source-sans-pro';
	import Container from '$lib/components/container.svelte';
	import Divider from '$lib/components/divider.svelte';
	import Header from '$lib/components/header.svelte';
	import Search from '$lib/components/search.svelte';
</script>

<Container>
	<Header title="FAQ" />
	<Search />
</Container>
<Divider />

<main>
	<slot />
</main>
