<script>
  import Film from "./lib/Film.svelte";
  import FilmExtended from "./lib/FilmExtended.svelte";
  import Title from "./lib/Title.svelte";
  let timeout;
  let films = [];
  let search = "";

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

  const onBack = () => {
    films = [];
    search = "";
  };
</script>

<main>
  {#if films.length}
    <div class="back" on:click={onBack} on:keydown={onBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-backspace"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"
        />
        <path
          d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"
        />
      </svg>
    </div>
  {/if}
  <h1>What would you like to watch?</h1>
  <div class="input-container">
    <input
      bind:value={search}
      type="text"
      placeholder="Search"
      on:input={onChange}
    />
  </div>
  {#if films.length > 0}
    <div>
      {#each films as film, i}
        <FilmExtended
          num={i}
          title={film.Title}
          year={film.Year}
          poster={film.Poster}
        />
      {/each}
    </div>
  {:else}
    <Title title="Every day Films" />
    <div class="films-container">
      {#await data({ name: "harry potter" }) then results}
        {#each results as film, delay}
          <Film {delay} title={film.Title} poster={film.Poster} />
        {/each}
      {/await}
    </div>
    <Title title="ESDLA Films" />
    <div class="films-container">
      {#await data({ name: "Lord of the rings" }) then results}
        {#each results as film, delay}
          <Film {delay} title={film.Title} poster={film.Poster} />
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

  .back {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  .back > svg:hover {
    fill: black;
    transition: fill 0.2s ease-in-out;
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
    font-weight: 500;
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
