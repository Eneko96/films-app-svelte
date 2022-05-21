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
    position: absolute;
  }

  .input-icons {
    width: 100%;
    margin-bottom: 10px;
  }

  .icon {
    padding: 4px;
    color: #8b8787;
    min-width: 50px;
    text-align: center;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  input:focus {
    border-color: none;
    outline: 2px solid #474747;
  }
  input {
    transition: outline 0.1s ease-out;
  }
</style>
