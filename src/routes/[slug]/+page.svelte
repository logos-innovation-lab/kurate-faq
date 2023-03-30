<script>
	/** @type {import('./$types').PageData} */
	import Container from '$lib/components/container.svelte';
	import Divider from '$lib/components/divider.svelte';
	import Undo from '$lib/components/icons/undo.svelte';
	import ArrowRight from '$lib/components/icons/arrow-right.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} - Kurate FAQ</title>
	<meta name="description" content="{data.title} - Kurate FAQ" />
</svelte:head>

<Container>
	<div class="pagetitle">
		<a href="/">
			<Undo size={16} />
			FAQ Homepage
		</a>
	</div>
</Container>

<Container>
	<div class="article">
		{@html data.content}
	</div>
</Container>
<div class="divider">
	<Divider />
</div>
<Container>
	<div class="next">
		<div class="label">Next</div>
		<div class="link">
			<a href="/">
				Link To Next Article
				<ArrowRight size={12} />
			</a>
		</div>
	</div>
</Container>

<style>
	:global(.article h1),
	:global(.article h2),
	:global(.article h3) {
		margin-bottom: var(--spacing-24);
		font-weight: var(--font-weight-sb);
	}

	:global(ul) {
		margin-left: var(--spacing-48);
		margin-bottom: var(--spacing-12);
	}

	.divider {
		padding-block: var(--spacing-24);
	}
	.next .label {
		font-size: var(--font-size-sm);
	}

	.next .link a {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-6);
		text-decoration: none;
		font-size: var(--font-size-lg);
		margin-bottom: var(--spacing-48);
	}

	.pagetitle {
		position: sticky;
		width: calc(100% + 20px);
		inset: 0 -10px auto;
		background-color: rgba(var(--color-body-bg-rgb), 0.93);
		backdrop-filter: blur(var(--blur));
		z-index: 100;
		/* padding-inline: var(--spacing-24); */
		padding-top: var(--spacing-24);
		padding-bottom: var(--spacing-48);
		transition: box-shadow 0.2s, padding 0.2s;

		@media (min-width: 688px) {
			padding-block: var(--spacing-48);
			/* padding-inline: var(--spacing-48); */
			transition: padding 0.2s;
		}
	}

	.pagetitle a {
		display: flex;
		gap: var(--spacing-6);
		font-size: var(--font-size-sm);
		align-items: center;
		text-decoration: none;
	}
</style>
