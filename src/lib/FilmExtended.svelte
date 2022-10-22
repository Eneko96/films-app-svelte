<script>
  import { fade } from "svelte/transition";

  export let title;
  export let year;
  export let poster;
  export let num;
  //   export let imdbID;
</script>

<div transition:fade={{ delay: num * 100 }} class="film-extended">
  <img src={poster} alt="poster" />
  <div class="text-content">
    <p>{title}</p>
    <p>Year: {year}</p>
  </div>
</div>

<style>
  .film-extended {
    border-radius: 16px;
    display: flex;
    align-items: center;
    height: 130px;
    margin: 0 20px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }
  .film-extended:first-child {
    margin-top: 20px;
  }

  .film-extended:last-child {
    margin-bottom: 20px;
  }

  img {
    border-radius: 16px 0 0 16px;
    height: 100%;
    object-fit: cover;
    width: 88px;
  }

  .text-content {
    width: 100%;
    margin: 0 15px;
  }
</style>
