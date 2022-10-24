<script>
  import { fade } from "svelte/transition";
  export let title;
  export let poster;
  export let delay;
</script>

<div
  in:fade={{ delay: delay * 100 }}
  style={`background-image: url(${poster});`}
  {title}
/>

<style>
  div {
    background-size: cover;
    border-radius: 16px;
    height: 160px;
    width: 147px;
    background-color: red;
    transform: skew(-5deg);
    flex: 1 0 147px;
  }
</style>
