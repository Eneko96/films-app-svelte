<script>
	import Input from "./Input.svelte";
	import FilmListing from "./components/FilmListing.svelte";
	import Paginator from "./components/Paginator.svelte";
	import { omdPaginationCalculator } from "./utils/dummys";
	let page = 1;
	let pages = null;
	let input = "";
	let response = [];

	const handleResponse = ({ detail }) => {
		response = detail.data.Search;
		input = detail.v;
		pages = omdPaginationCalculator(detail.data.totalResults);
	};

	const setPage = async (e) => {
		if (e === "increment") ++page;
		else --page;

		await fetch(
			`https://www.omdbapi.com/?s=${input}&apikey=46739e1a&page=${page}`
		)
			.then((response) => response.json())
			.then((data) => (response = data.Search));
	};

	$: if (pages) {
		console.log(pages);
	}
</script>

<main>
	<!-- <Header /> -->
	<Input name="Films" on:response={handleResponse} />
	<FilmListing listing={response} />
	{#if pages}<Paginator {page} {pages} {setPage} />{/if}
</main>

<style>
	:global(body) {
		background: linear-gradient(#8b8787, #2a2a2a);
		height: 100vh;
		overflow-y: hidden;
		color: white;
	}
	main {
		padding: 1rem;
		height: 100%;
		overflow-y: scroll;
		background-color: transparent;
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
