<script>
	import Counter from "./Counter.svelte";
	import Input from "./Input.svelte";
</script>

<main>
	<Counter initialCounter={18} />
	<Counter />
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
