<script lang="ts">
	import { ArrowUpRight, Github, Globe } from 'lucide-svelte';
	import type { Project } from '../lib/types';
	import { portfolioLayer3Data } from '../lib/data';

	const projects: Project[] = portfolioLayer3Data;
</script>

<div class="w-full max-w-6xl mx-auto p-4 flex flex-col">
	<div class="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
		<!-- Left column for lg screens, full width for sm and md -->
		<div class="grid grid-cols-1 gap-4">
			{#each projects.slice(0, 2) as project}
				<div class="relative overflow-hidden rounded-xl shadow-lg">
					<div class="absolute inset-0 z-0">
						<video
							src={project.video}
							class="w-full h-full object-cover"
							autoplay
							muted
							loop
							playsinline
						></video>
					</div>
					<div
						class="relative z-10 bg-black bg-opacity-50 p-4 flex flex-col justify-between text-white min-h-[300px] lg:h-full"
					>
						<div>
							<h2 class="text-xl lg:text-2xl font-bold mb-2">{project.title}</h2>
							<p class="mb-4 text-sm lg:text-base">{project.description}</p>
							{#if project.tags}
								<div class="flex flex-wrap gap-2 mb-4">
									{#each project.tags as tag}
										<span
											class="bg-white bg-opacity-20 text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-opacity-30"
										>
											{tag}
										</span>
									{/each}
								</div>
							{/if}
						</div>
						<div class="flex flex-wrap justify-end gap-2 mt-4">
							{#if project.sourceCode}
								<a
									href={project.sourceCode}
									class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-full flex items-center text-sm"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github class="w-4 h-4 mr-1" />
									Source
								</a>
							{/if}
							{#if project.liveProject}
								<a
									href={project.liveProject}
									class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-full flex items-center text-sm"
									target="_blank"
									rel="noopener noreferrer"
								>
									{#if project.title === 'IT Blog'}
										<ArrowUpRight class="w-4 h-4" />
									{:else}
										<Globe class="w-4 h-4 mr-1" />
										Live
									{/if}
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- Right column for lg screens, part of the grid for sm and md -->
		<div class="relative overflow-hidden rounded-xl shadow-lg">
			<div class="absolute inset-0 z-0">
				<video
					src={projects[2].video}
					class="w-full h-full object-cover"
					autoplay
					muted
					loop
					playsinline
				></video>
			</div>
			<div
				class="relative z-10 bg-black bg-opacity-50 p-4 flex flex-col justify-between text-white min-h-[300px] lg:h-full"
			>
				<div>
					<h2 class="text-xl lg:text-2xl font-bold mb-2">{projects[2].title}</h2>
					<p class="mb-4 text-sm lg:text-base">{projects[2].description}</p>
					{#if projects[2].tags}
						<div class="flex flex-wrap gap-2 mb-4">
							{#each projects[2].tags as tag}
								<span
									class="bg-white bg-opacity-20 text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-opacity-30"
								>
									{tag}
								</span>
							{/each}
						</div>
					{/if}
				</div>
				<div class="flex flex-wrap justify-end gap-2 mt-4">
					<a
						href={projects[2].sourceCode}
						class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-full flex items-center text-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github class="w-4 h-4 mr-1" />
						Source
					</a>
					<a
						href={projects[2].liveProject}
						class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-full flex items-center text-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Globe class="w-4 h-4 mr-1" />
						Live
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
