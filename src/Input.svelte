<script>
  import { createEventDispatcher } from "svelte";
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
        .then((data) => dispatch("response", data));
    }, 750);
  };
</script>

<input
  placeholder={`Search for ${name}`}
  on:keyup={({ target: { value } }) => onDebounce(value)}
/>
