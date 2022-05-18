<script>
	export let initialCounter = 0;

	const handleClick = () => {
		++initialCounter;
	};

	$: isEvenOdd = initialCounter % 2 === 0 ? "even" : "odd"; // reactive sentence $:
	$: if (initialCounter > 9) {
		// use effect
		initialCounter = 9;
	}
</script>

<main>
	<button on:click={handleClick}>Increment</button>
	<span>{initialCounter}!</span>
	<span>{isEvenOdd}</span>
</main>
