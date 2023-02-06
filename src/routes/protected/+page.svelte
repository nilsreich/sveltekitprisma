<script>
	let bio = 'ich bin der test';

	async function updateBio() {
		await fetch('/api/updateBio', {
			method: 'POST',
			body: JSON.stringify({ bio }),
			headers: {
				'content-type': 'application/json'
			}
		});
	}
</script>

<button on:click={updateBio}>send bio</button>
