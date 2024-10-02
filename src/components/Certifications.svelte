<script>
	import { onMount, afterUpdate } from 'svelte';

	export let certs = ['In Progress: CompTIA Network+', 'In Progress: CompTIA Security+'];
	export let speed = 30; // pixels per second

	let containerWidth;
	let contentWidth;
	let scrollPosition = 0;

	function animate() {
		scrollPosition += speed / 60; // Assuming 60 FPS
		if (scrollPosition >= contentWidth) {
			scrollPosition = 0;
		}
		requestAnimationFrame(animate);
	}

	onMount(() => {
		requestAnimationFrame(animate);
	});
</script>

<div class="relative overflow-hidden w-full py-4" bind:clientWidth={containerWidth}>
	<div
		class="flex items-center space-x-4 whitespace-nowrap"
		style="transform: translateX(-{scrollPosition}px); width: {contentWidth}px;"
		bind:clientWidth={contentWidth}
	>
		{#each certs as item}
			<div
				class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-lg flex items-center transition-colors duration-300"
			>
				{item}
			</div>
		{/each}
		{#each certs as item}
			<div
				class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-lg flex items-center transition-colors duration-300"
			>
				{item}
			</div>
		{/each}
	</div>
</div>
