<script>
  import Star from "../assets/Star.svelte";
  let { id } = history.state;
  let response = {};

  const fetchMovie = async () => {
    let res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=46739e1a`);
    response = await res.json();
  };

  const starring = (rating) => {
    const transRating = Number(rating).toFixed(0);
    for (let i = 0; i < transRating; i++) {
      if (i === transRating - 1) {
        const decimal = (+rating % 1).toFixed(1) * 100;
        stars[i] = decimal.toString() + "%";
      } else stars[i] = "100%";
    }
    console.log(stars.length, stars);
    return stars;
  };

  $: {
    fetchMovie();
  }
</script>

{#await response then res}
  <main>
    <section>
      <img src={res.Poster} alt={`${res.Title} film`} />
    </section>
    <div class="movie-description">
      <h1>{res.Title}</h1>
      <h2>{res.Year}</h2>
      <h3>Director: {res.Director}</h3>
      <h3>Actors: {res.Actors}</h3>
      <h3>Plot: {res.Plot}</h3>
      <h3>
        {#if res.imdbRating}
          {#each starring(res.imdbRating) as star, i}
            <Star id={i} fill="white" offset={star} />
          {/each}
        {/if}
        ({res.imdbRating})
      </h3>
      <h4>Type: {res.Type}</h4>
    </div>
  </main>
{/await}

<style>
  :global(body) {
    overflow-y: hidden;
    color: white;
    padding: 0;
    scroll-behavior: smooth;
    background: linear-gradient(#8b8787, #2a2a2a);
  }

  main {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding: 4rem 5rem;
  }

  section {
    height: 50rem;
  }

  img {
    object-fit: contain;
    height: 100%;
  }

  .movie-description {
    align-self: flex-end;
  }
</style>
