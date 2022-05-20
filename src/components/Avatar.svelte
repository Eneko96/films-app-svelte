<script>
  const variants = [
    "badge-dot_primary",
    "badge-dot_error",
    "badge-dot_success",
  ];
  let type = variants[0];

  const handleVariant = () => {
    const calculation = () => {
      const calc = Math.floor(Math.random() * variants.length);
      const found = variants.findIndex((variant) => variant === type);
      if (calc === variants[found]) return calculation();
      else return calc;
    };
    type = variants[calculation()];
  };
</script>

<div on:click={handleVariant}>
  <span class={`badge-dot ${type}`}>8</span>
  <img
    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=400&amp;h=400&amp;q=80"
    alt="avatar icon"
    class="avatar"
  />
</div>

<style>
  :root {
    --unit: 8px;
  }

  .avatar {
    height: calc(var(--unit) * 7);
    width: calc(var(--unit) * 7);
    border-radius: 100%;
    outline: none;
    transition: outline 100ms ease-in-out;
  }

  .avatar:hover {
    outline: 2px solid blanchedalmond;
  }

  .avatar:active {
    outline: none;
  }

  .badge-dot {
    z-index: 1;
    position: relative;
    left: calc(var(--unit) * 8);
    bottom: calc(var(--unit) * 6);
    background-color: #33cdff;
    text-align: center;
    border-radius: 100%;
    color: white;
    padding: 0.2rem var(--unit);
    font-size: 15px;
  }

  .badge-dot_primary {
    background-color: #33cdff;
  }

  .badge-dot_error {
    background-color: #e87a71;
  }

  .badge-dot_success {
    background-color: #73d85a;
  }

  .badge-dot_large {
    font-size: 20px;
  }

  .badge-dot_small {
    font-size: 10px;
  }
</style>
