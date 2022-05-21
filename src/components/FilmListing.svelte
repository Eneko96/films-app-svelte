<script>
  import { UNAVAILABLE_IMAGE } from "../utils/contants";

  export let listing;

  const handleErrorImage = (e) => {
    e.target.src = UNAVAILABLE_IMAGE;
  };
</script>

<main>
  {#if listing.length > 0}
    {#each listing as { Title, Poster, Year }, index}
      <article>
        <small>#{index}</small>
        <div class="separator" />
        <img alt={Title} src={Poster} on:error={handleErrorImage} />
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
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    column-gap: 1rem;
  }

  .separator {
    height: 1rem;
  }

  img {
    width: 100%;
    height: 65%;
    object-fit: contain;
    transition: transform 200ms ease-in-out;
  }

  img:hover {
    transform: scale(1.06);
  }
  small {
    padding-bottom: 1rem;
  }
</style>
