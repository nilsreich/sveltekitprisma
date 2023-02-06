<script lang="ts">
	import { page } from '$app/stores';

	const updateBio = async () => {
		const feed= 'https://www.tagesschau.de/export/video-podcast/webm/tagesschau_https/'
		const response = await fetch(`/api/updateBio`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ feed })
		});
		const data = await response.json();
		url = await data.match(/<enclosure url="(.*)" length/)[1];
		console.log(url)
	};
</script>

{#if $page.data.session}
	<h1>Protected page</h1>
	<p>This is a protected content. You can access this content because you are signed in.</p>
	<p>Session expiry: {$page.data.session?.expires}</p>

	<button on:click={() => updateBio()}>update Bio</button>
{:else}
	<h1>Access Denied</h1>
	<p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}
