<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const app = $derived(data.app);
</script>

<svelte:head>
	<title>{app.name} — Harshvardhan Joshi</title>
	<meta name="description" content={app.tagline ?? app.description} />
</svelte:head>

<article class="mx-auto max-w-[900px] px-8 pt-14 pb-20">
	<a href="/#work" class="mono text-[12px] uppercase tracking-[0.14em] text-[#8A93A6] no-underline hover:text-[#00E59B]">← Work</a>

	<div class="mt-6 flex flex-wrap items-end justify-between gap-6">
		<div>
			<p class="section-label">{app.status ?? 'App'}</p>
			<h1 class="mt-2 text-5xl font-extrabold tracking-[-0.03em]">{app.name}</h1>
			<p class="mt-3 max-w-[60ch] text-[17px] leading-snug text-[#8A93A6]">{app.tagline}</p>
		</div>
		{#if app.downloads}
			<div class="rounded-xl border border-[#00E59B]/25 bg-[#00E59B]/10 px-5 py-3 text-right">
				<div class="font-mono text-2xl font-bold text-[#00E59B]">{app.downloads}</div>
				<div class="text-[11px] uppercase tracking-wider text-[#8A93A6]">downloads</div>
			</div>
		{/if}
	</div>

	{#if app.platforms?.length}
		<div class="mt-5 flex flex-wrap gap-2.5">
			{#each app.platforms as p}
				<a href={p.url} class="rounded-md border border-white/10 px-3 py-1.5 font-mono text-[11px] text-[#B9BFC9] no-underline hover:border-[#00E59B]/40 hover:text-[#00E59B]">{p.name} →</a>
			{/each}
		</div>
	{/if}

	<p class="mt-8 text-[15px] leading-relaxed text-[#E8E6E3]">{app.description}</p>

	<div class="mt-10 grid gap-8 border-t border-white/5 pt-8 md:grid-cols-[1fr_280px]">
		<div class="space-y-4">
			<p class="font-mono text-[11px] uppercase tracking-[0.14em] text-[#00E59B]">The journey</p>
			{#each app.journey ?? [] as para}
				<p class="text-[14px] leading-[1.75] text-[#B9BFC9]">{para}</p>
			{/each}

			{#if app.highlights?.length}
				<ul class="mt-4 space-y-2">
					{#each app.highlights as h}
						<li class="flex gap-3 text-[13px] leading-relaxed text-[#B9BFC9]"><span class="text-[#00E59B]">→</span><span>{h}</span></li>
					{/each}
				</ul>
			{/if}
		</div>

		<aside>
			<p class="font-mono text-[11px] uppercase tracking-[0.14em] text-[#00E59B]">Stack</p>
			<ul class="mt-3 space-y-1.5 text-[13px] text-[#B9BFC9]">
				{#each app.technologies as t}
					<li class="border-b border-white/5 pb-1.5">{t.name}{#if t.level}<span class="text-[#8A93A6]"> · {t.level}</span>{/if}</li>
				{/each}
			</ul>
			{#if app.link}
				<a href={app.link} class="btn-ghost mt-6 inline-flex w-full items-center justify-center text-[13px]">Source ↗</a>
			{/if}
		</aside>
	</div>
</article>
