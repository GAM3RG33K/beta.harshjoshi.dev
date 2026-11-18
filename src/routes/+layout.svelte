<script lang="ts">
	import './layout.css';
	import Nav from '#lib/components/Nav.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import favicon from '#lib/assets/favicon.svg';

	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Harshvardhan Joshi — AI Platform Engineer</title>
</svelte:head>

<div class="dot-grid min-h-screen bg-[#0B0E14] text-[#E8E6E3] antialiased">
	<Nav />
	{@render children()}
	<Footer />
</div>
