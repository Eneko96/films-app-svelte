<script>
  export let listing;
</script>

<main>
  {#if listing.length > 0}
    {#each listing as { Title, Poster, Year }, index}
      <article>
        <small>#{index}</small>
        <img alt={Title} src={Poster} />
        <h3>{Title}</h3>
        <span>{Year}</span>
      </article>
    {/each}
  {:else}
    <h1>No results found</h1>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
