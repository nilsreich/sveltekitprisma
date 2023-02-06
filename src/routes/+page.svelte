<script lang='ts'>
  const getAllUser = async () => {
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data)
}

const updateBio = async () => {
    const res = await fetch('/api/test',{method: 'POST'})
    const data = await res.json()
    console.log(data)
}




</script>

<h1>SvelteKit Auth Example</h1>
<button on:click={() => getAllUser()}>Test DatabaseFetch</button>
<button on:click={() => updateBio()}>update Bio</button>
<p>
  This is an example site to demonstrate how to use <a
    href="https://kit.svelte.dev/">SvelteKit</a
  >
  with <a href="https://sveltekit.authjs.dev">SvelteKit Auth</a> for authentication.
</p>