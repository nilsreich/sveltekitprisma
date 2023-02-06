<script lang="ts">
	import { page } from '$app/stores';

	const updateBio = async () => {
		console.log($page.data.session?.user.id);
		const res = await fetch('/protected/updateBio', {
			method: 'POST',
			body: JSON.stringify({ bio: 'I am a new bio', id: $page.data.session?.user.id })
		});
		const data = await res.json();
		console.log(data);
	};

	const updateBioID = async () => {
		const res = await fetch('/protected/updateBio', {
			method: 'POST',
			body: JSON.stringify({ bio: 'I am a new bio', id: 'cldspl7ey0000mg09yvpwsw7b' })
		});
		const data = await res.json();
		console.log(data);
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
		<button on:click={() => updateBioID()}>update Bio</button>

		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}
