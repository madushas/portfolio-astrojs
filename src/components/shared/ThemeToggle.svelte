<script lang="ts">
import { onMount } from "svelte";

let isDark = $state(false);
let mounted = $state(false);

onMount(() => {
	mounted = true;
	// Check initial theme
	isDark = document.documentElement.classList.contains("dark");
});

function toggleTheme() {
	isDark = !isDark;
	if (isDark) {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
}
</script>

{#if mounted}
<button
  onclick={toggleTheme}
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 text-foreground transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:text-primary hover:scale-110 focus:outline-none focus-visible:ring-3 focus-visible:ring-ring backdrop-blur-sm active:scale-95"
>
  {#if isDark}
    <!-- Sun Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 transition-all duration-500 rotate-0 scale-100"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41-1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  {:else}
    <!-- Moon Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 transition-all duration-500 rotate-0 scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  {/if}
</button>
{/if}
