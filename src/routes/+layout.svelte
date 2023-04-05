<script lang="ts">
	import './styles.css';
	import '@fontsource/source-sans-pro';
	import LogoGithub from '$lib/components/icons/logo-github.svelte';
	import Button from '$lib/components/button.svelte';
	import Container from '$lib/components/container.svelte';
</script>

<main>
	<slot />
</main>

<footer>
	<Container>
		<div class="footer-content">
			<div>
				<p class="bold">Kurate — by Logos Innovation Lab</p>
				<p>
					Logos Innovation Lab prototypes open source technology that promotes peaceful coordination
					using the <u>Logos</u> stack, so humans can voluntarily find each other, communicate, and transact
					value.
				</p>
			</div>
			<Button
				icon={LogoGithub}
				label="Github"
				on:click={() => window.open('https://github.com/logos-innovation-lab/Kurate')}
			/>
			<p class="copyright">2023 • Logos Innovation Lab</p>
		</div>
	</Container>
</footer>

<style lang="postcss">
	.footer-content {
		display: flex;
		gap: var(--spacing-24);
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
</style>
