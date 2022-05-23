<script>
  import { UNAVAILABLE_IMAGE } from "../utils/contants";
  import { navigate } from "svelte-routing";
  import { fade, fly } from "svelte/transition";

  export let listing;

  const handleErrorImage = (e) => {
    e.target.src = UNAVAILABLE_IMAGE;
  };

  const handleClick = (id) => {
    console.log(id);
    navigate(`/Film/${id}`, { state: { id } });
  };
</script>

<main>
  {#if listing.length > 0}
    {#each listing as { Title, Poster, Year, imdbID }, index}
      <article in:fly={{ y: 50, duration: 1000 }} out:fade>
        <small>#{index}</small>
        <div class="separator" />
        <img
          alt={Title}
          src={Poster}
          on:error={handleErrorImage}
          on:click={() => handleClick(imdbID)}
        />
        <h3>{Title}</h3>
        <span>{Year}</span>
      </article>
    {/each}
  {:else}
    <div in:fade>
      <h1 style="padding-top: 10rem;">No results found...</h1>
      <h1>😔</h1>
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1rem;
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
