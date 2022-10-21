<script>
  import Film from "./lib/Film.svelte";
  import FilmExtended from "./lib/FilmExtended.svelte";
  import Title from "./lib/Title.svelte";
  let timeout;
  let films = [];

  const data = async ({ name }) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${name}&apikey=46739e1a&page=${1}`
    );
    const resdata = await res.json();
    return resdata.Search;
  };

  const onChange = (e) => {
    console.log("in");
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      console.log("out");
      films = await data({ name: e.target.value });
    }, 1000);
  };

  $: console.log(films);
</script>

<main>
  <h1>What would you like to watch?</h1>
  <div class="input-container">
    <input type="text" placeholder="Search" on:input={onChange} />
  </div>
  {#if films.length > 0}
    {#each films as film}
      <FilmExtended title={film.Title} year={film.Year} poster={film.Poster} />
    {/each}
  {:else}
    <Title title="Every day Films" />
    <div class="films-container">
      {#await data({ name: "harry potter" }) then results}
        {#each results as film}
          <Film title={film.Title} poster={film.Poster} />
        {/each}
      {/await}
    </div>
    <Title title="ESDLA Films" />
    <div class="films-container">
      {#await data({ name: "Lord of the rings" }) then results}
        {#each results as film}
          <Film title={film.Title} poster={film.Poster} />
        {/each}
      {/await}
    </div>
  {/if}
</main>

<style>
  main {
    background: rgb(9, 250, 202);
    background: linear-gradient(
      138deg,
      rgba(9, 250, 202, 0.8) 0%,
      rgba(23, 23, 25, 1) 38%,
      rgba(23, 23, 25, 1) 60%,
      rgba(255, 53, 184, 0.8) 100%
    );
    width: 400px;
    max-width: 100%;
    display: block;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: relative;
    transition: background 1s;
  }
  h1 {
    margin: 55px 65px 0 65px;
    text-align: center;
    font-size: 2.9em;
  }

  .input-container {
    margin-top: 23px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  input[type="text"] {
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.12);
    width: 100%;
    height: 36px;
    margin: 0 23px;
    padding-left: 29px;
    color: var(--text);
    border: none;
  }

  input[type="text"]:focus {
    outline: none;
  }

  input[type="text"]::placeholder,
  input[type="text"]::-webkit-input-placeholder,
  input[type="text"]::-moz-placeholder {
    color: rgba(255, 255, 255, 0.605);
  }

  .films-container {
    overflow: auto;
    margin-top: 19px;
    margin-left: 23px;
    display: flex;
    gap: 20px;
    padding: 0 10px;
  }

  @media screen and (max-width: 600px) {
    main {
      height: 100vh;
      width: 100vw;
    }
  }

  @media screen and (max-width: 1200px) {
    main {
      aspect-ratio: 8 / 16;
      overflow-x: hidden;
    }
  }

  @media screen and (min-width: 1200px) {
    main {
      aspect-ratio: 8 / 16;
      overflow-x: hidden;
    }
  }
</style>
