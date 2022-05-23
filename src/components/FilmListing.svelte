<script>
  import { UNAVAILABLE_IMAGE } from "../utils/contants";
  import { fade, fly, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Film from "../modules/Film.svelte";
  let open = false;
  let id = "";
  export let listing;

  const handleErrorImage = (e) => {
    e.target.src = UNAVAILABLE_IMAGE;
  };

  const handleClick = (_id) => {
    console.log(id);
    id = _id;
    open = !open;

    //navigate(`/Film/${id}`, { state: { id } });
  };
</script>

<main>
  {#if listing.length > 0}
    {#each listing as { Title, Poster, Year, imdbID }, index}
      <article in:fly={{ y: 30, duration: 1000 }} out:fade>
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
    <dialog {open}>
      <Film {id} />
      <button on:click={() => (open = !open)}>close</button>
    </dialog>
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
    height: 100%;
    object-fit: contain;
    transition: transform 200ms ease-in-out;
  }

  img:hover {
    transform: scale(1.06);
  }
  small {
    padding-bottom: 1rem;
  }

  dialog {
    transition: opacity 0.5s ease-in;
    background-color: var(--secondary);
    border: 1px solid var(--primary);
    backdrop-filter: blur(5px);
    border-radius: 7px;
    max-width: 62rem;
    border-radius: 7px;
    box-shadow: 1;
  }
  dialog:not([open]) {
    pointer-events: none;
    opacity: 0;
  }
  dialog::backdrop {
    transition: backdrop-filter 0.5s ease;
    backdrop-filter: blur(25px);
  }
  dialog[open] {
    animation: ease-in forwards;
  }
</style>
