<script lang="ts">
	import { onMount } from 'svelte';
	export let isOpen = false;
	export let title = 'Modal Title';
	let modalElement: HTMLDivElement;

	function closeModal(): void {
		isOpen = false;
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && isOpen) {
			closeModal();
		}
	}

	function disableScroll(): void {
		document.body.style.overflow = 'hidden';
	}

	function enableScroll(): void {
		document.body.style.overflow = '';
	}

	onMount(() => {
		return () => {
			document.removeEventListener('keydown', handleKeydown);
			enableScroll();
		};
	});

	$: if (isOpen) {
		document.addEventListener('keydown', handleKeydown);
		setTimeout(() => modalElement?.focus(), 0);
		disableScroll();
	} else {
		document.removeEventListener('keydown', handleKeydown);
		enableScroll();
	}
</script>

{#if isOpen}
	<div class="fixed inset-0 z-40 overflow-hidden">
		<div class="absolute inset-0 bg-black bg-opacity-50" on:click={closeModal}></div>
		<div class="absolute inset-0 overflow-y-auto">
			<div class="flex min-h-full items-center justify-center p-4">
				<div
					bind:this={modalElement}
					class="w-full max-w-md bg-white rounded-lg p-6 relative"
					style="max-height: calc(100vh - 2rem); overflow-y: auto;"
					role="dialog"
					aria-labelledby="modal-title"
					aria-modal="true"
					tabindex="-1"
				>
					<h2 id="modal-title" class="text-2xl font-bold mb-4">{title}</h2>
					<div class="mb-6">
						<slot></slot>
					</div>
					<div class="flex justify-end">
						<button
							on:click={closeModal}
							class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
