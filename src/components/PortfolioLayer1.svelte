<script lang="ts">
	import Modal from './../components/Modal.svelte';
	import { ArrowUpRight, ExternalLink } from 'lucide-svelte';
	import type { PortfolioLayer1Data } from '../lib/types';
	import { portfolioLayer1Data } from '../lib/data';

	const data: PortfolioLayer1Data = portfolioLayer1Data;
	let isModalOpen = false;

	function openModal() {
		isModalOpen = true;
	}
</script>

<div class="w-full max-w-6xl mx-auto p-4 bg-gray-900">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<!-- Left column (on larger screens) -->
		<div class="grid grid-rows-[auto_1fr] gap-4 h-[calc(100vh-2rem)]">
			<!-- Headline block -->
			<div class="rounded-lg shadow-lg flex items-center">
				<h2 class="text-3xl md:text-4xl font-light text-white leading-tight p-2">
					{data.headline}
				</h2>
			</div>
			<!-- Image block -->
			<div class="rounded-lg shadow-lg overflow-hidden">
				<img src={data.imageUrl} alt={data.imageAlt} class="w-full h-full object-cover" />
			</div>
		</div>
		<!-- Right column (on larger screens) -->
		<div class="grid h-[calc(100vh-2rem)]">
			<!-- Purple block -->
			<div class="bg-purple-500 rounded-lg shadow-lg overflow-hidden relative">
				<div class="absolute inset-0 rounded-lg overflow-hidden">
					<video
						class="absolute inset-0 w-full h-full object-cover"
						autoplay
						muted
						loop
						playsinline
					>
						<source src={data.videoUrl} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div class="absolute inset-0 bg-black bg-opacity-50"></div>
					<div class="relative z-10 h-full flex flex-col">
						<div class="p-6 text-white">
							<h2 class="text-3xl text-white font-bold mb-2">{data.homelabTitle}</h2>
							<p class="text-xl mb-4">{data.homelabDescription}</p>
							<div class="flex flex-wrap gap-2">
								{#each data.tags as tag}
									<span
										class="bg-white bg-opacity-20 text-white text-sm font-semibold px-3 py-1 rounded-full hover:bg-opacity-30"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>
						<div class="flex-grow"></div>
						<div class="p-6 flex justify-end">
							<button
								on:click={openModal}
								class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-full flex items-center"
							>
								More Details
								<ArrowUpRight class="w-4 h-4 ml-1" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Modal bind:isOpen={isModalOpen} title="Homelab Diaries">
	<div class="space-y-4">
		<p>
			I started my homelab journey in October 2024 with the goal of creating a comprehensive,
			virtualized environment that simulates enterprise-level infrastructure.
		</p>
		<h3 class="text-lg font-semibold">Entries:</h3>
		<ul class="space-y-2 max-h-16 overflow-auto">
			{#each data.homelabLinks as link}
				<li>
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center text-blue-500 hover:underline"
					>
						<ExternalLink class="w-4 h-4 mr-2" />
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</Modal>
