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
	<div class="header">
		<Input name="Films" on:response={handleResponse} />
	</div>
	<FilmListing listing={response} />
	{#if pages}<Paginator {page} {pages} {setPage} />{/if}
</main>

<style>
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem 0;
		z-index: 1;
		position: sticky;
		top: 0;
	}
	main {
		height: 100vh;
		height: 100%;
		overflow-y: scroll;
		text-align: center;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
