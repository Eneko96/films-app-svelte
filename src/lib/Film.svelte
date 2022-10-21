<script>
  export let title;
  export let poster;
</script>

<div style={`background-image: url(${poster});`} {title} />

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
