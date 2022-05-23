<script>
  import Left from "../assets/left.svelte";
  import Right from "../assets/right.svelte";
  export let page;
  export let pages;
  export let setPage;

  const handlePage = (e) => {
    setPage(e);
  };

  const goTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<div>
  <small>Page {page} of {pages}</small>
  <div on:click={() => handlePage("decrement")}><Left width="1rem" /></div>
  <div on:click={() => handlePage("increment")}><Right width="1rem" /></div>
  <span on:click={goTop}>Return to top</span>
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
  span {
    width: 150px;
    position: relative;
    left: calc(50vw - 150px);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  span:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
</style>
