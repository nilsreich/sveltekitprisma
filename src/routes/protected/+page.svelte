<script lang="ts">
	import { page } from '$app/stores';

  console.log($page.data.user?.userId)
	const getAllUser = async () => {
		const res = await fetch('/api');
		const data = await res.json();
		console.log(data);
	};

	const updateBio = async () => {
		const res = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				bio: 'This is my new bio',
				id: $page.data.user?.userId
			})
		});
		const data = await res.json();
		console.log(data);
	};
</script>

{#if $page.data.session}
	<h1>Protected page</h1>
	<p>
		This is a protected content. You can access this content because you are signed in. {$page.data
			.user?.userId}
	</p>
	<p>Session expiry: {$page.data.session?.expires}</p>

	<button on:click={() => getAllUser()}>Test DatabaseFetch</button>
	<button on:click={() => updateBio()}>update Bio</button>
{:else}
	<h1>Access Denied</h1>
	<p>
		<a href="/auth/signin"> You must be signed in to view this page </a>
	</p>
{/if}
