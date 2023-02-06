<script lang="ts">
	import { page } from '$app/stores';

	const updateBio = async () => {
		const res = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ bio: 'I am a new bio', id: $page.data.session?.user.id })
		});
		const data = await res.json();
		console.log(data);
	};
</script>

<h1>SvelteKit Auth Example</h1>
<button on:click={() => updateBio()}>update Bio</button>

<p>
	This is an example site to demonstrate how to use <a href="https://kit.svelte.dev/">SvelteKit</a>
	with <a href="https://sveltekit.authjs.dev">SvelteKit Auth</a> for authentication.
</p>
