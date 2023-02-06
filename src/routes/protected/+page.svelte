<script>
	let bio ='ich bin der test'
  
	async function updateBio() {
	  const response = await fetch('/api/updateBio', {
		method: 'POST',
		body: JSON.stringify({ bio }),
		headers: {
		  'content-type': 'application/json'
		}
	  });
  
	  const data = await response.json();
	  console.log(data)
	}
  </script>

  
  <button on:click={updateBio}>send bio</button>