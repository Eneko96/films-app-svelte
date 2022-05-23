<script>
  import { createEventDispatcher } from "svelte";
  import Search from "./assets/Search.svelte";
  const dispatch = createEventDispatcher();
  export let name;
  let response = [];
  let timer;
  let val = "";

  const onDebounce = (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      val = v;
      response = fetch(`https://www.omdbapi.com/?s=${v}&apikey=46739e1a`)
        .then((response) => response.json())
        .then((data) => dispatch("response", { data, v }));
    }, 750);
  };
</script>

<section class="input-icons">
  <i class="icon"><Search height="2rem" width="2rem" /></i>
  <input
    class="input-field"
    placeholder={`Search for ${name}`}
    on:keyup={({ target: { value } }) => onDebounce(value)}
  />
</section>

<style>
  .input-icons i {
    position: relative;
    color: white;
    top: 0.6rem;
    right: -3rem;
  }

  .icon {
    padding: 4px;
    color: #8b8787;
    min-width: 50px;
    text-align: center;
  }

  .input-field {
    width: 20rem;
    padding: 10px;
    text-align: left;
    padding-left: 3rem;
    color: white;
    border: transparent;
  }
  input:focus {
    border-color: none;
    outline: 2px solid #474747;
  }
  input {
    margin: 0.2rem;
    transition: outline 0.1s ease-out;
    caret-color: white;
    background-color: transparent;
  }
  /* input text focus left */
</style>
