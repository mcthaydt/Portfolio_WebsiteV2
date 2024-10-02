<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import BusinessCard from '../components/BusinessCard.svelte';
	import PortfolioLayerOne from '../components/PortfolioLayer1.svelte';
	import Certifications from '../components/Certifications.svelte';
	import PortfolioLayerTwo from '../components/PortfolioLayer2.svelte';
	import PortfolioLayerThree from '../components/PortfolioLayer3.svelte';
	import PortfolioLayerFour from '../components/PortfolioLayer4.svelte';
	import Footer from '../components/Footer.svelte';
	import { businessCardInfo, certs, footerInfo } from '../lib/data';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	let isInViewBusinessCard = false;
	let isInViewLayerOne = false;
	let isInViewCertifications = false;
	let isInViewLayerTwo = false;
	let isInViewLayerThree = false;
	let isInViewLayerFour = false;
	let isInViewFooter = false;
</script>

<div class="min-h-screen flex flex-col">
	{#if mounted}
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewBusinessCard = detail.inView)}
			class:in-view={isInViewBusinessCard}
			class="animate-fade-in"
		>
			<BusinessCard info={businessCardInfo} />
		</div>
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewLayerOne = detail.inView)}
			class:in-view={isInViewLayerOne}
			class="animate-fade-in"
		>
			<PortfolioLayerOne />
		</div>
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewCertifications = detail.inView)}
			class:in-view={isInViewCertifications}
			class="animate-fade-in"
		>
			<Certifications {certs} speed={30} />
		</div>
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewLayerTwo = detail.inView)}
			class:in-view={isInViewLayerTwo}
			class="animate-fade-in"
		>
			<!-- <PortfolioLayerTwo /> -->
		</div>
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewLayerThree = detail.inView)}
			class:in-view={isInViewLayerThree}
			class="animate-fade-in"
		>
			<PortfolioLayerThree />
		</div>
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewLayerFour = detail.inView)}
			class:in-view={isInViewLayerFour}
			class="animate-fade-in"
		>
			<PortfolioLayerFour />
		</div>
		<div class="flex-grow"></div>
		<div
			use:inview={options}
			on:inview_change={({ detail }) => (isInViewFooter = detail.inView)}
			class:in-view={isInViewFooter}
			class="animate-fade-in"
		>
			<Footer info={footerInfo} />
		</div>
	{/if}
</div>

<style>
	.animate-fade-in {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
	}
	.animate-fade-in.in-view {
		opacity: 1;
		transform: translateY(0);
	}
</style>
