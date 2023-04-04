<script lang="ts">
	let clazz: string | undefined = undefined;
	export { clazz as class };
</script>

<div class={`markdown ${clazz || ''}`}>
	<slot />
</div>

<style lang="postcss">
	.markdown {
		:global(strong) {
			font-weight: bold;
		}

		:global(ol),
		:global(ul) {
			list-style-position: inside;
			margin-left: calc(20px + var(--spacing-6));
		}

		:global(li):before {
			content: '';
			margin-left: calc(-1 * var(--spacing-8));
		}

		:global(p) {
			margin-bottom: var(--spacing-8);
		}
	}
</style>
