<script>
	import './styles.css';
	import '@fontsource/source-sans-pro';
</script>

<div>
	<div class="max-w-7xl mx-auto px-12">
		<h1 class="font-semibold my-12 text-xl">Kurate FAQ</h1>

		<div class="my-[4.5rem] flex flex-row gap-1.5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="inline w-5"
				fill="currentColor"
				viewBox="0 0 27 27"
			>
				<path
					d="m29 27.586-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9z"
				/>
			</svg>
			<input class="text-lg outline-0 leading-3" type="text" placeholder="Search..." />
		</div>
	</div>

	<main class="border-t">
		<slot />
	</main>
</div>
