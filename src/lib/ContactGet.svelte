<script lang="ts">

	// Imports

	import {onMount} from "svelte";



	// Variables

	let backend: string = ""; // Endre denne til Ubuntu-serverens backend IP + port

	let passwordInput: HTMLInputElement;
	let button: HTMLButtonElement;
	let content: HTMLTextAreaElement;
	let wrapper: HTMLElement;



	// On Svelte mount

	onMount((): void => {
		button.addEventListener("click", async (): Promise<void> => {
			const response: globalThis.Response = await fetch(`${backend}/documents?key=${passwordInput.value}`);
			if(response.ok){
				const data: any = await response.json();
				let result: string = "";
				data.forEach((i: {title: string, content: string, created: string}) => {
					const {title, content, created} = i;
					result += `\nTitle: ${title}\nContent: ${content}\nCreated: ${created}\n`;
				});
				content.value = result;
				wrapper.remove();
			}
			else passwordInput.value = (await response.json()).message;
		});
	});

</script>

<section>

	<div class="container">
		<div bind:this={wrapper} class="wrapper">
			<h1>
				Logg inn
			</h1>
			<input bind:this={passwordInput} type="password" placeholder="Password">
			<button bind:this={button}>
				Request
			</button>
		</div>
		<textarea readonly></textarea>
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
		position: relative;
	}

	section
	.container
	.wrapper{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		backdrop-filter: blur(20px);
	}

	section
	.container
	.wrapper
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
	.wrapper
	input::placeholder{
		color: var(--text-color);
		font-style: italic;
	}

	section
	.container
	.wrapper
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

</style>