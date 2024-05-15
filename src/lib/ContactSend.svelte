<script lang="ts">

	// Imports

	import {onMount} from "svelte";



	// Variables

	let backend: string = ""; // Endre denne til Ubuntu-serverens backend IP + port

	let titleInput: HTMLInputElement;
	let contentInput: HTMLTextAreaElement;
	let button: HTMLButtonElement;



	// On Svelte mount

	onMount((): void => {
		button.addEventListener("click", async (): Promise<void> => {
			button.setAttribute("disabled", "");
			const response: globalThis.Response = await fetch(`${backend}/document`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					title: titleInput.value,
					content: contentInput.value
				})
			});
			const data: any = await response.json();
			if(!response.ok) titleInput.value = data.message;
			if(button.hasAttribute("disabled")) button.removeAttribute("button");
		});
	});

</script>

<section>

	<div class="container">
		<h1>
			Ta kontakt
		</h1>
		<input bind:this={titleInput} type="text" placeholder="Title">
		<textarea bind:this={contentInput} placeholder="Content"></textarea>
		<button bind:this={button}>
			Send
		</button>
	</div>

</section>

<style>

	section{
		width: calc(100% - 100px);
		height: fit-content;
		padding: 0 50px;
		margin: 50px 0;
	}

	section
	.container{
		width: 400px;
		height: fit-content;
		margin: 0 auto;
	}

	section
	.container
	input{
		width: calc(100% - 22px);
		height: 30px;
		padding: 0 10px;
		margin: 4px 0;
		border-radius: 4px;
		border: 1px solid rgba(255, 255, 255, .1);
		background: none;
		backdrop-filter: blur(20px);
		color: var(--text-color);
	}

	section
	.container
	input::placeholder{
		color: var(--text-color);
		font-style: italic;
	}

	section
	.container
	textarea{
		width: calc(100% - 22px);
		height: 100px;
		min-height: 50px;
		max-height: 300px;
		padding: 10px;
		margin: 4px 0;
		border-radius: 4px;
		border: 1px solid rgba(255, 255, 255, .1);
		background: none;
		resize: vertical;
		backdrop-filter: blur(20px);
		color: var(--text-color);
	}

	section
	.container
	textarea::placeholder{
		color: var(--text-color);
		font-style: italic;
	}

	section
	.container
	button{
		width: 100%;
		height: 30px;
		border-radius: 4px;
		background: var(--accent-color-2);
		font-size: 18px;
		font-weight: 300;
		border: 1px solid rgba(255, 255, 255, .1);
		cursor: pointer;
	}

	section
	.container
	button:disabled{
		cursor: not-allowed;
		filter: saturate(85%);
	}

</style>