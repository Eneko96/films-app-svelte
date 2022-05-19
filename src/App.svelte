<script>
	import Input from "./Input.svelte";
</script>

<main>
	<Input />
</main>

<style>
	:global(body) {
		background-color: black;
		color: white;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
