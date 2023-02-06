<script lang="ts">
	const updateBio = async () => {
		const response = await fetch(`/api/updateBio`, {
			method: 'POST'
		});
		const data = await response.json();
		console.log(data);
	};
</script>

<button on:click={() => updateBio()}>update Bio</button>
