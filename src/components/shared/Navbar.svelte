<script lang="ts">
import { onDestroy, onMount } from 'svelte';
import ThemeToggle from './ThemeToggle.svelte';

let active = $state('home');
let menuOpen = $state(false);

const navItems = [
	{ label: 'Home', section: 'home', homepageOnly: true },
	{ label: 'Services', section: 'services' },
	{ label: 'About', section: 'about' },
	{ label: 'Projects', section: 'projects' },
	{ label: 'Blog', route: '/blog' },
	{ label: 'Contact', section: 'contact', cta: true },
];

function handleSectionNav(e: MouseEvent, id: string) {
	if (!isOnHome()) return;
	e.preventDefault();
	const el = document.getElementById(id);
	if (el) {
		const y = el.getBoundingClientRect().top + window.scrollY - 80;
		window.scrollTo({ top: y, behavior: 'smooth' });
		menuOpen = false;
	}
}

let _observer: IntersectionObserver | undefined;
function getPathname() {
	// Prefer runtime window location (works for SPA nav). For SSR fallback to '/'.
	if (typeof window !== 'undefined' && window.location?.pathname) return window.location.pathname;
	return '/';
}

function isOnHome() {
	return getPathname() === '/';
}

function setupObserver() {
	const opts = {
		rootMargin: '-20% 0px -60% 0px',
		threshold: [0, 0.1, 0.5, 1],
	};

	_observer = new IntersectionObserver((entries) => {
		const sorted = entries
			.filter((e) => e.isIntersecting)
			.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

		if (sorted.length > 0) {
			const id = sorted[0].target.getAttribute('id');
			if (id) active = id;
		}

		const contactSection = document.getElementById('contact');
		if (contactSection) {
			const rect = contactSection.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const atBottom =
				rect.top < windowHeight && window.scrollY + windowHeight >= document.body.scrollHeight - 50;
			if (atBottom) active = 'contact';
		}
	}, opts);

	navItems.forEach((i) => {
		if (i.section) {
			const el = document.getElementById(i.section);
			if (el) _observer?.observe(el);
		}
	});
}

function teardownObserver() {
	_observer?.disconnect();
	_observer = undefined;
}

onMount(() => {
	if (isOnHome()) setupObserver();

	function update() {
		if (isOnHome()) {
			if (!_observer) setupObserver();
		} else {
			teardownObserver();
		}
	}

	window.addEventListener('popstate', update);

	const origPush = history.pushState;
	const origReplace = history.replaceState;
	history.pushState = (...args: unknown[]) => {
		origPush.apply(history, args as any);
		update();
	};
	history.replaceState = (...args: unknown[]) => {
		origReplace.apply(history, args as any);
		update();
	};

	return () => {
		teardownObserver();
		window.removeEventListener('popstate', update);
		history.pushState = origPush;
		history.replaceState = origReplace;
	};
});

onDestroy(() => teardownObserver());

function getHref(item: any) {
	if (isOnHome() && item.section) return `#${item.section}`;
	if (item.route) return item.route;
	if (item.section) return `/#${item.section}`;
	return '/';
}

function isItemActive(item: any) {
	if (isOnHome() && item.section) return active === item.section;
	return false;
}
</script>

<header
  class="fixed top-0 left-0 right-0 z-sticky border-b-2 border-border bg-background/95 backdrop-blur-sm transition-all duration-300"
>
  <div
    class="container-custom h-16 md:h-18 lg:h-20 flex items-center justify-between"
  >
    <!-- Brand -->
    <a
      href="/"
      class="text-xl md:text-2xl font-black tracking-tighter text-foreground hover:text-primary transition-colors uppercase"
      aria-label="Madusha - Home"
    >
      Madusha<span class="text-primary">.</span>
    </a>

    <!-- Desktop Nav -->
    <nav class="hidden lg:flex items-center gap-8" aria-label="Main navigation">
      <ul class="flex items-center gap-6 lg:gap-8">
        {#each navItems as item}
          {#if !item.homepageOnly || isOnHome()}
            {@const href = getHref(item)}
            {@const isActive = isItemActive(item)}
            <li>
              <a
                {href}
                onclick={(e) =>
                  item.section && isOnHome()
                    ? handleSectionNav(e, item.section)
                    : null}
                class={`relative text-xs font-bold uppercase tracking-widest transition-colors duration-200
                      ${
                        item.cta
                          ? "px-6 py-3 bg-primary text-primary-foreground hover:bg-foreground hover:text-background border-2 border-transparent hover:border-foreground"
                          : isActive
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                aria-current={isActive && !item.cta ? "page" : undefined}
              >
                {item.label}
                {#if isActive && !item.cta}
                  <span
                    class="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                    aria-hidden="true"
                  ></span>
                {/if}
              </a>
            </li>
          {/if}
        {/each}
      </ul>
      <div class="pl-8 border-l-2 border-border h-8 flex items-center">
        <ThemeToggle />
      </div>
    </nav>

    <!-- Mobile Navigation - Redesigned -->
    <div class="flex items-center gap-3 lg:hidden">
      <ThemeToggle />
      <button
        class="flex items-center justify-center w-10 h-10 border-2 border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        onclick={() => (menuOpen = !menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {#if menuOpen}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        {:else}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        {/if}
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu - Clean Slide-in Design with Animation -->
{#if menuOpen}
  <div
    id="mobile-menu"
    class="lg:hidden fixed top-16 md:top-18 bottom-0 left-0 right-0 z-dropdown bg-background/98 backdrop-blur-md border-t-2 border-border animate-slide-down"
    role="navigation"
    aria-label="Mobile navigation"
  >
    <nav class="container-custom h-full flex flex-col py-6">
      <ul class="flex flex-col gap-2">
        {#each navItems as item}
          {#if !item.homepageOnly || isOnHome()}
            {@const href = getHref(item)}
            {@const isActive = isItemActive(item)}
            <li>
              <a
                {href}
                onclick={(e) => {
                  if (item.section && isOnHome()) handleSectionNav(e, item.section);
                  else menuOpen = false;
                }}
                class={`block px-4 py-3 text-base font-bold uppercase tracking-wide border-l-4 transition-all
                         ${
                           item.cta
                             ? "border-primary text-primary bg-primary/5"
                             : isActive
                               ? "border-primary text-primary bg-primary/5"
                               : "border-transparent text-muted-foreground hover:border-border hover:text-foreground hover:bg-muted/30"
                         }
                       `}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          {/if}
        {/each}
      </ul>

      <div class="mt-auto pt-6 border-t-2 border-border">
        <p
          class="text-xs font-mono text-muted-foreground uppercase tracking-wider text-center"
        >
          Navigate to any section
        </p>
      </div>
    </nav>
  </div>
{/if}
