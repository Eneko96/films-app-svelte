<script>
  export let page;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const handlePage = (e) => {
    console.log(e);
  };
</script>

<div>
  <p on:click={handlePage} value="-1">{"<"}</p>
  <small>{page}</small>
  <p on:click={handlePage} value={1}>{">"}</p>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
  }
  p {
    margin: 0 1em;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  p:hover {
    transform: scale(1.1);
  }
</style>
