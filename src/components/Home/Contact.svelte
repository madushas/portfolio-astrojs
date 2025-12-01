<script lang="ts">
import { WEB3FORM_ACCESS_KEY } from '../../lib/env';

let status = $state('');

async function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  status = 'loading';

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  formData.append('access_key', WEB3FORM_ACCESS_KEY);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      status = 'submitted';
      form.reset();
      setTimeout(() => (status = ''), 5000);
    } else {
      status = 'error';
    }
  } catch (err) {
    status = 'error';
  }
}
</script>

<div class="border-2 border-[hsl(var(--border))] bg-[hsl(var(--card))] p-8 md:p-12">
  <form onsubmit={handleSubmit} class="space-y-8">
    <div class="grid gap-8 sm:grid-cols-2">
        <div class="space-y-3">
            <label for="name" class="text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))]">Full Name</label>
            <input id="name" name="name" required placeholder="ENTER YOUR FULL NAME" class="flex h-14 w-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:border-[hsl(var(--primary))] transition-colors invalid:border-red-500/50" />
        </div>
        <div class="space-y-3">
            <label for="email" class="text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))]">Email Address</label>
            <input id="email" name="email" type="email" required placeholder="YOUR.EMAIL@EXAMPLE.COM" class="flex h-14 w-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:border-[hsl(var(--primary))] transition-colors invalid:border-red-500/50" />
        </div>
    </div>
    
    <div class="space-y-3">
        <label for="message" class="text-sm font-bold uppercase tracking-wider text-[hsl(var(--foreground))]">Message</label>
        <textarea id="message" name="message" required placeholder="TELL ME ABOUT YOUR PROJECT..." class="flex min-h-[160px] w-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--background))] px-4 py-3 text-sm placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:border-[hsl(var(--primary))] resize-none transition-colors invalid:border-red-500/50"></textarea>
    </div>
    
    <button type="submit" disabled={status === 'loading'} class="inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-widest w-full h-14 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-hover))] transition-colors disabled:pointer-events-none disabled:opacity-50">
        {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
    </button>
    
    {#if status === 'submitted'}
      <div class="p-4 bg-green-500/10 text-green-600 text-sm font-bold uppercase tracking-wider border border-green-500/20">
        Email sent successfully!
      </div>
    {:else if status === 'error'}
      <div class="p-4 bg-red-500/10 text-red-600 text-sm font-bold uppercase tracking-wider border border-red-500/20">
        Failed to send email. Please try again.
      </div>
    {/if}
  </form>
</div>
