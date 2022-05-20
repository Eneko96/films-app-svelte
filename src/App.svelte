<script>
	import Input from "./Input.svelte";
	import Header from "./modules/Header.svelte";
	import FilmListing from "./components/FilmListing.svelte";
	import Paginator from "./components/Paginator.svelte";
	import { omdPaginationCalculator } from "./utils/dummys";
	let page = 1;
	let pages = null;
	let response = [];

	const handleResponse = ({ detail }) => {
		console.log(detail);
		// response = detail.Search;
		// pages = omdPaginationCalculator(detail.totalResults);
	};
</script>

<main>
	<!-- <Header /> -->
	<Input name="Films" on:response={handleResponse} />
	<FilmListing listing={response} />
	<Paginator {page} />
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
