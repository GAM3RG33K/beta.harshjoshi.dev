<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.name} — Harshvardhan Joshi</title>
	<meta name="description" content={project.tagline ?? project.description} />
</svelte:head>

<article class="mx-auto max-w-[900px] px-8 pt-14 pb-20">
	<a href="/#projects" class="mono text-[12px] uppercase tracking-[0.14em] text-[#8A93A6] no-underline hover:text-[#00E59B]">← Key Projects</a>

	<p class="section-label mt-6">Key Project · {project.status ?? 'Active'}</p>
	<h1 class="mt-2 text-5xl font-extrabold tracking-[-0.03em]">{project.name}</h1>
	<p class="mt-3 max-w-[62ch] text-[17px] leading-snug text-[#8A93A6]">{project.tagline}</p>

	<p class="mt-8 text-[15px] leading-relaxed text-[#E8E6E3]">{project.description}</p>

	<div class="mt-10 grid gap-8 border-t border-white/5 pt-8 md:grid-cols-[1fr_280px]">
		<div class="space-y-4">
			<p class="font-mono text-[11px] uppercase tracking-[0.14em] text-[#00E59B]">Why it matters</p>
			{#each project.journey ?? [] as para}
				<p class="text-[14px] leading-[1.75] text-[#B9BFC9]">{para}</p>
			{/each}

			{#if project.highlights?.length}
				<ul class="mt-4 space-y-2">
					{#each project.highlights as h}
						<li class="flex gap-3 text-[13px] leading-relaxed text-[#B9BFC9]"><span class="text-[#00E59B]">→</span><span>{h}</span></li>
					{/each}
				</ul>
			{/if}
		</div>

		<aside>
			<p class="font-mono text-[11px] uppercase tracking-[0.14em] text-[#00E59B]">Stack</p>
			<ul class="mt-3 space-y-1.5 text-[13px] text-[#B9BFC9]">
				{#each project.technologies as t}
					<li class="border-b border-white/5 pb-1.5">{t.name}{#if t.level}<span class="text-[#8A93A6]"> · {t.level}</span>{/if}</li>
				{/each}
			</ul>
			{#if project.link}
				<a href={project.link} class="btn-ghost mt-6 inline-flex w-full items-center justify-center text-[13px]">Repository ↗</a>
			{/if}
		</aside>
	</div>
</article>
