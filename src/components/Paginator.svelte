<script>
  import Left from "../assets/left.svelte";
  import Right from "../assets/right.svelte";
  export let page;
  export let pages;
  export let setPage;

  const handlePage = (e) => {
    setPage(e);
  };
</script>

<div>
  <small>Page {page} of {pages}</small>
  <div on:click={() => handlePage("decrement")}><Left width="1rem" /></div>
  <div on:click={() => handlePage("increment")}><Right width="1rem" /></div>
</div>

<style>
  div {
    user-select: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 4rem;
    justify-content: center;
  }
</style>
