<script lang="ts">
	import type { FooterInfo } from '../lib/types';
	import { Linkedin, Github, Twitter, Mail } from 'lucide-svelte';

	export let info: FooterInfo;

	const iconMap = {
		LinkedIn: Linkedin,
		GitHub: Github,
		Twitter: Twitter,
		Email: Mail
	};

	function getIcon(label: string) {
		return iconMap[label as keyof typeof iconMap] || null;
	}
</script>

<footer id="footer" class="text-white w-full flex justify-center p-4">
	<div class="w-full max-w-4xl space-y-8">
		<div>
			<h2
				class="text-white text-2xl md:text-3xl lg:text-4xl text-left font-light mt-6 max-w-4xl mx-auto leading-loose"
			>
				{info.mainText}
			</h2>
		</div>
		<div class="flex justify-between items-center">
			<div class="w-2/3">
				<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
					{info.endingMessage}
				</h2>
			</div>
			<div class="flex space-x-4">
				{#each info.links as link}
					{@const Icon = getIcon(link.label)}
					{#if Icon}
						<a
							href={link.href}
							class="text-gray-300 hover:text-white transition-colors"
							aria-label={link.label}
						>
							<svelte:component this={Icon} class="w-6 h-6 md:w-9 md:h-9 lg:w-12 lg:h-12" />
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</footer>
