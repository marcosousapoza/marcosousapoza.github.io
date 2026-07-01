<svelte:head>
	<title>Home</title>
	<meta name="description" content="A static SvelteKit site ready for GitHub Pages." />
</svelte:head>

<section class="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
	<div
		class="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(176,104,47,0.16),_transparent_55%)]"
		aria-hidden="true"
	></div>
	<div
		class="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="mx-auto flex min-h-screen w-full max-w-4xl items-center px-6 py-20 sm:px-10">
		<div class="max-w-2xl">
			<p
				class="mb-4 inline-flex rounded-full border border-border bg-card px-4 py-1 text-sm text-muted-foreground shadow-sm"
			>
				GitHub Pages ready
			</p>
			<h1 class="max-w-xl text-5xl font-semibold tracking-tight sm:text-7xl">Hello, world.</h1>
			<p class="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
				This is a static SvelteKit starter using the shadcn-svelte <span class="text-foreground"
					>claude</span
				>
				theme. It is set up for GitHub Pages now, and we can customize the content later.
			</p>

			<div class="mt-10 flex flex-wrap gap-3 text-sm">
				<span class="rounded-full border border-border bg-card px-4 py-2 shadow-sm"
					>Static build</span
				>
				<span class="rounded-full border border-border bg-card px-4 py-2 shadow-sm"
					>Tailwind v4</span
				>
				<span class="rounded-full border border-border bg-card px-4 py-2 shadow-sm">Svelte 5</span>
			</div>
		</div>
	</div>
</section>
