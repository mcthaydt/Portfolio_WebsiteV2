<script lang="ts">
	import { onMount } from 'svelte';
	import type { BusinessCardInfo } from '../lib/types';
	import { calculateExperience } from '../lib/utils';
	export let info: BusinessCardInfo;
	let experience: string;
	onMount(() => {
		experience = calculateExperience(info.startDate);
	});
	const infoRows = [
		{
			left: info.title,
			right: info.socialHandle,
			rightHref: `https://twitter.com/${info.socialHandle.replace('@', '')}`
		},
		{
			left: info.role1,
			right: info.workInquiries,
			rightHref: '#footer'
		},
		{
			left: info.role2,
			right: `Building: ${info.projectName}`,
			rightHref: info.projectLink
		}
	];
</script>

<div class="text-white max-w-screen flex items-center justify-center p-4">
	<div class="w-full max-w-4xl">
		<div class="border-b-2 border-gray-200 py-2 pr-2 relative">
			{#each [info.firstName, info.lastName] as name, index}
				<h1
					class="text-7xl md:text-8xl lg:text-9xl font-bold leading-none {index === 1
						? 'mb-1'
						: 'mt-6'}"
				>
					{name}
				</h1>
			{/each}
			<div class="my-4">
				<!-- Added my-4 for spacing above and below -->
				<div class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm inline-block mr-2">
					{experience}
				</div>
				<div class="mt-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm inline-block mr-2">
					Future: M.S. in Information Technology
				</div>
			</div>
		</div>
		{#each infoRows as row, i}
			<div class="grid grid-cols-2">
				<div class="border-b-2 border-gray-200 py-2 pr-2">
					<p class="text-sm md:text-base text-gray-300">{row.left}</p>
				</div>
				<div class="border-b-2 border-gray-200 py-2 pl-2 text-right">
					{#if row.rightHref}
						<a
							href={row.rightHref}
							class="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
						>
							{row.right}
						</a>
					{:else}
						<p class="text-sm md:text-base text-gray-300">{row.right}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
