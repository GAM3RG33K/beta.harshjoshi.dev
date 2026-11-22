<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const resume = $derived(data.resume);

	const apps = $derived(resume.apps);
	const projects = $derived(resume.projects);
	const stats = [
		{ n: '9+', l: 'years shipping\nfull-stack products', href: '#experience' },
		{ n: '350k+', l: 'downloads across\nshipped apps', href: '#work' },
		{ n: '87.5%', l: 'mobile build time cut\nvia CI/CD at Signzy', href: '#experience' },
		{ n: '5', l: 'person pod led\nfintech KYC platform', href: '#experience' }
	];
	const isFeatured = (name: string) => name === 'Custom AI Harness + Harness Generator';
</script>

<main>
	<!-- ── HERO ─────────────────────────────────────── -->
	<section class="mx-auto grid max-w-[1180px] gap-14 px-8 pt-16 pb-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pt-20">
		<div>
			<div class="mb-5 flex items-center gap-2.5 font-mono text-[12px] text-[#00E59B]">
				<span class="pulse-dot"></span> AVAILABLE · BENGALURU · REMOTE FRIENDLY
			</div>
			<h1 class="text-[clamp(3rem,11vw,6.4rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
				HARSHVARDHAN<br /><span class="outline-line">JOSHI</span>
			</h1>
			<p class="mt-6 max-w-[48ch] text-[16px] leading-relaxed text-[#8A93A6]">
				<strong class="text-[#E8E6E3]">AI Platform Engineer | AI Infrastructure &amp; Tooling.</strong><br />
				I build the layer that lets agents ship reliably — custom harnesses, MCP servers, eval
				harnesses, and local-LLM apps. 9 years shipping full-stack products;
				<strong class="text-[#E8E6E3]"> apps at 350k+ downloads</strong>.
			</p>
			<div class="mt-8 flex flex-wrap gap-3.5">
				<a class="btn-primary" href="#work">View selected work ↓</a>
				<a class="btn-ghost" href="mailto:contact@harshjoshi.dev">Get in touch</a>
			</div>
		</div>

		<div class="term" aria-hidden="true">
			<div class="term-bar">
				<span class="dot bg-[#FF5F57]"></span>
				<span class="dot bg-[#FEBC2E]"></span>
				<span class="dot bg-[#28C840]"></span>
				<span class="ml-auto font-mono text-[11px] text-[#8A93A6]">agent-terminal — zsh</span>
			</div>
			<div class="term-body font-mono text-[12px] leading-[1.9] text-[#B9BFC9]">
				<div><span class="text-[#00E59B]">$</span> npx harness-status</div>
				<div class="text-[#8A93A6]">loading project context… <span class="text-[#6EC6FF]">.ai/rules/</span></div>
				<div class="text-[#8A93A6]">plan scoring: completeness ≥8 · sdlc fit ≥8 · risk ≥8</div>
				<div class="text-[#8A93A6]">verification gate: <span class="text-[#00E59B]">PASS</span> (6/6 evals)</div>
				<div><span class="text-[#00E59B]">✓</span> agent-ready <span class="text-[#8A93A6]">— tatva · memed · solo · pixel-press</span></div>
				<div class="text-[#8A93A6]">&nbsp;</div>
				<div><span class="text-[#00E59B]">$</span> npx mcp list</div>
				<div class="text-[#8A93A6]">figma <span class="text-[#00E59B]">connected</span> · design-to-code</div>
				<div class="text-[#8A93A6]">clickhouse <span class="text-[#00E59B]">connected</span> · analytics</div>
				<div class="text-[#8A93A6]">github <span class="text-[#00E59B]">connected</span> · repos</div>
				<div class="text-[#8A93A6]">mcp-harshjoshi-work <span class="text-[#00E59B]">connected</span> · 5 tools · 6/6 evals</div>
				<div class="text-[#8A93A6]">&nbsp;</div>
				<div><span class="text-[#00E59B]">$</span> <span class="cursor">▍</span></div>
			</div>
		</div>
	</section>

	<!-- ── STATS ─────────────────────────────────────── -->
	<div class="border-y border-white/5 bg-[#10161F]/45">
		<div class="mx-auto grid max-w-[1180px] grid-cols-2 md:grid-cols-4">
			{#each stats as s}
				<a href={s.href} aria-label="{s.n} — {s.l.replace(/\n/g, ' ')}" class="border-l border-white/5 px-6 py-6 no-underline transition-colors first:border-l-0 hover:bg-white/[0.02]">
					<div class="font-mono text-[30px] font-bold tracking-tight text-[#00E59B]">{s.n}</div>
					<div class="mt-1 whitespace-pre-line text-[12px] leading-snug text-[#8A93A6]">{s.l}</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- ── WORK ─────────────────────────────────────── -->
	<section id="work" class="mx-auto max-w-[1180px] px-8 pt-16">
		<div class="mb-10 flex flex-wrap items-end justify-between gap-6">
			<div>
				<p class="section-label">01 / My Projects</p>
				<h2 class="mt-2 text-4xl font-bold tracking-tight">Shipped by me</h2>
			</div>
			<p class="max-w-[34ch] text-right text-[13px] leading-snug text-[#8A93A6]">Consumer apps built first-commit to store — with real download counts, not vanity metrics.</p>
		</div>
		<div class="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
			{#each apps as app (app.slug)}
				<a href="/apps/{app.slug}" class="card card-hover flex flex-col gap-2.5 p-5 no-underline text-inherit">
					<div class="flex items-center justify-between gap-2">
						<span class="text-[15px] font-bold leading-tight">{app.name}</span>
						{#if app.downloads}
							<span class="rounded-md bg-[#00E59B]/10 px-2 py-0.5 font-mono text-[11px] text-[#00E59B]">{app.downloads}</span>
						{/if}
					</div>
					<p class="flex-1 text-[12px] leading-snug text-[#8A93A6]">{app.tagline}</p>
					<div class="border-t border-white/5 pt-2.5 font-mono text-[10px] text-[#8A93A6]">
						{app.technologies.map((t: { name: string }) => t.name).slice(0, 3).join(' · ')}
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- ── PROJECTS ───────────────────────────────────── -->
	<section id="projects" class="mx-auto max-w-[1180px] px-8 pt-16">
		<div class="mb-10 flex flex-wrap items-end justify-between gap-6">
			<div>
				<p class="section-label">02 / Key Projects</p>
				<h2 class="mt-2 text-4xl font-bold tracking-tight">Agent infrastructure, built</h2>
			</div>
			<p class="max-w-[34ch] text-right text-[13px] leading-snug text-[#8A93A6]">Everything here is real code you can click — not slideware.</p>
		</div>
		<div class="grid gap-4 md:grid-cols-2">
			{#each projects as p, i (p.slug)}
				<a
					href="/projects/{p.slug}"
					class="card card-hover relative p-6 no-underline text-inherit {i === 0 ? 'md:col-span-2' : ''}"
				>
					<span class="tag">{i === 0 ? 'THE DIFFERENTIATOR' : (p.status ?? 'ACTIVE').toUpperCase()}</span>
					<h3 class="mt-3 text-[17px] font-bold">{p.name}</h3>
					<p class="mt-2 text-[13px] leading-relaxed text-[#8A93A6]">{p.tagline ?? p.description}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- ── EXPERIENCE ─────────────────────────────────── -->
	<section id="experience" class="mx-auto max-w-[1180px] px-8 pt-16">
		<p class="section-label">03 / Experience</p>
		<h2 class="mb-10 mt-2 text-4xl font-bold tracking-tight">Numbers, not nouns</h2>
		<ol class="ml-2 border-l border-white/10">
			{#each resume.experience as exp}
				<li class="relative pb-7 pl-8 last:pb-0">
					<span class="absolute top-1.5 -left-[5px] h-2 w-2 rounded-full border-2 border-[#00E59B] bg-[#0B0E14]"></span>
					<div class="flex flex-wrap items-baseline justify-between gap-4">
						<div class="text-[15px] font-bold">
							{exp.position} — {#if exp.url}<a href={exp.url} target="_blank" rel="noopener" class="text-[#00E59B] underline decoration-[#00E59B]/30 underline-offset-2 hover:decoration-[#00E59B]">{exp.company}</a>{:else}<span class="text-[#00E59B]">{exp.company}</span>{/if}
						</div>
						<div class="font-mono text-[11px] text-[#8A93A6]">{exp.date} · {exp.location}</div>
					</div>
					<p class="mt-1.5 max-w-3xl text-[13px] leading-relaxed text-[#8A93A6]">{@html exp.summary}</p>
				</li>
			{/each}
		</ol>
	</section>

	<!-- ── STACK ─────────────────────────────────────── -->
	<section id="stack" class="mx-auto max-w-[1180px] px-8 pt-16 pb-20">
		<p class="section-label">04 / Stack</p>
		<h2 class="mb-8 mt-2 text-4xl font-bold tracking-tight">Tools I reach for</h2>
		<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
			{#each [
				{ h: 'AI & Agents', p: 'MCP · LangChain · Ollama · OpenRouter · llama.cpp · RAG · prompt engineering' },
				{ h: 'Languages', p: 'TypeScript · Python · Go · Rust' },
				{ h: 'Web & Backend', p: 'React · Next.js · Node.js · Express · PostgreSQL · MongoDB' },
				{ h: 'Platform', p: 'Docker · GitHub Actions · CI/CD · AWS S3 · Firebase · Supabase' },
				{ h: 'Mobile', p: 'Flutter · React Native · Android · iOS' }
			] as group}
				<div class="card p-4">
					<h3 class="font-mono text-[10px] uppercase tracking-[0.14em] text-[#00E59B]">{group.h}</h3>
					<p class="mt-2 text-[12px] leading-relaxed text-[#B9BFC9]">{group.p}</p>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	.pulse-dot {
		width: 8px;
		height: 8px;
		border-radius: 9999px;
		background: #00E59B;
		animation: pulse 1.6s infinite;
	}
	@keyframes pulse {
		0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 229, 155, 0.5); }
		50% { opacity: 0.5; box-shadow: 0 0 0 5px rgba(0, 229, 155, 0); }
	}
	.outline-line {
		color: transparent;
		-webkit-text-stroke: 1.4px #E8E6E3;
	}
	.term {
		background: #141C29;
		border: 1px solid #1E2735;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
	}
	.term-bar {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 11px 14px;
		background: #0D121B;
		border-bottom: 1px solid #1E2735;
	}
	.dot { width: 10px; height: 10px; border-radius: 9999px; }
	.term-body { padding: 20px; }
	.cursor { animation: blink 1.1s steps(1) infinite; }
	@keyframes blink { 50% { opacity: 0; } }
	.tag {
		display: inline-block;
		margin-bottom: 4px;
		background: #10161F;
		border: 1px solid rgba(240, 179, 94, 0.35);
		color: #F0B35E;
		border-radius: 6px;
		padding: 2px 8px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
	}
</style>
