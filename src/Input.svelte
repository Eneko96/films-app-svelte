<script>
  let response = [];
  let timer;
  let val = "";

  const debounce = (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      val = v;
      response = fetch(`https://www.omdbapi.com/?s=${v}&apikey=422350ff`)
        .then((response) => response.json())
        .then((data) => data.Search || []);
    }, 750);
  };
</script>

<input on:keyup={({ target: { value } }) => debounce(value)} />
{#if val !== ""}<h1>Looking for {val}:</h1>{/if}
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
  {/each}
{:catch}
  <strong>There has been an error</strong>
{/await}

<!-- new owner api key 46739e1a -->
