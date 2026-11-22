<script lang="ts">
	const links = [
		{ href: '/#work', label: 'Work' },
		{ href: '/#projects', label: 'Projects' },
		{ href: '/#experience', label: 'Experience' },
		{ href: '/#stack', label: 'Stack' }
	];
</script>

<nav
	class="sticky top-0 z-50 border-b border-white/5 bg-[#0B0E14]/80 backdrop-blur-md"
	aria-label="Primary"
>
	<div class="mx-auto flex h-[62px] max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-8">
		<a
			href="/"
			class="shrink-0 font-mono text-[12px] font-bold tracking-[0.06em] min-[400px]:text-[15px] text-[#E8E6E3] no-underline"
		>
			HARSHVARDHAN<span class="text-[#00E59B]">_JOSHI</span>
		</a>
		<ul class="hidden items-center gap-7 md:flex">
			{#each links as link (link.label)}
				<li><a href={link.href} class="text-[13px] font-medium text-[#8A93A6] no-underline transition-colors hover:text-[#00E59B]">{link.label}</a></li>
			{/each}
		</ul>
		<a
			href="mailto:contact@harshjoshi.dev"
			class="hidden shrink-0 rounded-lg border border-[#00E59B] px-4 py-2 font-mono text-[12px] min-[480px]:inline-flex text-[#00E59B] no-underline transition-all hover:bg-[#00E59B] hover:text-[#06231A]"
		>
			contact@harshjoshi.dev
		</a>
	</div>
</nav>
