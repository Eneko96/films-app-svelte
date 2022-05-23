<script>
  import { Router, Route } from "svelte-routing";
  import App from "./App.svelte";
  import Film from "./modules/Film.svelte";
  export let url = "";
</script>

<Router {url}>
  <Route path="/"><App /></Route>
  <Route path="Film/:id" component={Film} />
</Router>

<style>
  :global(body) {
    overflow-y: hidden;
    color: white;
    padding: 0;
    scroll-behavior: smooth;
  }
</style>
