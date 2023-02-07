<script lang="ts">
  
	let title = ''

  
	const handleSubmit = async (e: SubmitEvent) => {
	  e.preventDefault()
	  await (
		await fetch('/api/post', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			title,

		  }),
		})
	  ).json()
  
	}
  </script>
  
  <div class="page">
	<form on:submit={handleSubmit}>
	  <h1>Create Draft</h1>
	  <input placeholder="Title" type="text" bind:value={title} />

	  <input
		type="submit"
		value="Create"
	  />
	</form>
  </div>