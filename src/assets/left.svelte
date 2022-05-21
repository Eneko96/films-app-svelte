<script>
  export let height = "1rem";
  export let width = "1rem";
</script>

<svg
  {height}
  {width}
  xmlns="http://www.w3.org/2000/svg"
  class="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg>

<style>
  svg {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
  svg:hover {
    transform: scale(1.3);
  }
</style>
