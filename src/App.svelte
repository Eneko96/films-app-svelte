<script>
	import Input from "./Input.svelte";
	import Header from "./modules/Header.svelte";
	import FilmListing from "./components/FilmListing.svelte";
	let response = [];
</script>

<main>
	<Header />
	<Input name="Films" on:response={({ detail }) => (response = detail)} />
	<FilmListing listing={response} />
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
