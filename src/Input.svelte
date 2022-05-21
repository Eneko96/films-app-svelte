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

<section>
  <i><Search height="2rem" width="2rem" /></i>
  <input
    placeholder={`Search for ${name}`}
    on:keyup={({ target: { value } }) => onDebounce(value)}
  />
</section>

<style>
  i {
    margin-bottom: 0.4rem;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>
