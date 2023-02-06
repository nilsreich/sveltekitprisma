<script lang="ts">
	import { page } from '$app/stores';
let url
	const updateBio = async () => {
		const userID = 'cldspl7ey0000mg09yvpwsw7b'

		const response = await fetch(`/api/updateBio`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
						body: JSON.stringify({ bio:'my profile', id:userID })

		});
		const data = await response.json();
		console.log(data)
	};
</script>



	<button on:click={() => updateBio()}>update Bio</button>