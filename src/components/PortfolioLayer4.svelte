<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import type { ExtrasBlock } from '../lib/types';
	import { extrasBlock } from '../lib/data';

	const blocks: ExtrasBlock[] = extrasBlock;
</script>

<div class="w-full max-w-6xl mx-auto p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{#each blocks as block}
			<div class="h-64 relative group overflow-hidden rounded-xl shadow-lg">
				<div
					class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
					style="background-image: url({block.image})"
				></div>
				<div
					class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-75"
				></div>
				<div class="absolute inset-0 p-4 text-white flex flex-col justify-between">
					<div>
						<h2 class="text-2xl font-bold mb-2">{block.title}</h2>
						<p class="text-sm">{block.description}</p>
					</div>
					<a
						href={block.link}
						class="self-end p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300"
						aria-label="Go to {block.title}"
					>
						<ArrowUpRight class="w-6 h-6" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
