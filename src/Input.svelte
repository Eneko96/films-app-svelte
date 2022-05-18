<script>
  let value = "";
  let response = [];

  const handleInput = (e) => (value = e.target.value);

  $: if (value.length > 2) {
    response = fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
      .then((response) => response.json())
      .then((data) => data.Search || []);
  }
</script>

<input {value} on:input={handleInput} />
{#await response}
  <strong>Loading...</strong>
{:then movies}
  {#each movies as { Title, Poster, Year }, index}
    <article>
      <small>#{index}</small>
      <img alt={Title} src={Poster} />
      <h3>{Title}</h3>
      <span>{Year}</span>
    </article>
  {:else}
    <strong>{response.length} results found</strong>
    <strong>No results found</strong>
  {/each}
{:catch}
  <strong>There has been an error</strong>
{/await}
