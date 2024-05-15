<script lang="ts">

	// Imports

	import {onMount} from "svelte";



	// Variables

	let functionalityCheckbox: HTMLInputElement;
	let statisticsCheckbox: HTMLInputElement;
	let advertisementCheckbox: HTMLInputElement;

	let acceptButton: HTMLButtonElement;
	let declineButton: HTMLButtonElement;



	// On Svelte mount

	onMount((): void => {

		function removeCookieWrapper(): void{
			const cookieWrapper: HTMLElement | null = document.querySelector("#cookie-wrapper");
			cookieWrapper?.remove();
		}

		acceptButton.addEventListener("click", (): void => {
			sessionStorage.setItem(
				"cookies",
				JSON.stringify({
					functionality: functionalityCheckbox.checked,
					statistics: statisticsCheckbox.checked,
					advertisement: advertisementCheckbox.checked,
				})
			);
			removeCookieWrapper();
		});

		declineButton.addEventListener("click", removeCookieWrapper);

	});
	

</script>

<div class="container">

	<h1>
		Informasjonskapsler
	</h1>

	<p>
		Siden bruker Informasjonskapsler og liknende teknologi for å gi deg og andre en bedre brukeropplevelse.<br>
		Ved å trykke 'aksepter', godkjenner du at vi samler godkjent data, som du kan lese om i <a href="/">brukervilkårene våre</a>.
	</p>

	<div class="row locked">
		<h2>
			Nødvendige
		</h2>
		<input type="checkbox" disabled checked>
	</div>

	<div class="row">
		<h2>
			Funksjonalitet
		</h2>
		<input bind:this={functionalityCheckbox} type="checkbox" checked>
	</div>

	<div class="row">
		<h2>
			Statistikk
		</h2>
		<input bind:this={statisticsCheckbox} type="checkbox" checked>
	</div>

	<div class="row">
		<h2>
			Markedsføring
		</h2>
		<input bind:this={advertisementCheckbox} type="checkbox" checked>
	</div>

	<div class="buttons">
		<button class="positive" bind:this={acceptButton}>
			Ok
		</button>
		<button bind:this={declineButton}>
			Avvis alle
		</button>
	</div>

</div>

<style>

	.container{
		width: 300px;
		height: fit-content;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, .1);
		background: #111;
		display: flex;
		justify-content: start;
		align-items: start;
		flex-flow: column nowrap;
		gap: 20px;
	}

	.container
	h1{
		width: 100%;
		height: fit-content;
		font-weight: 400;
	}

	.container
	p{
		width: 100%;
		height: fit-content;
		color: #999;
	}

	.container
	p
	a{
		color: var(--accent-color-2);
		font-style: italic;
	}

	.container
	.row{
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: row nowrap;
		gap: 10px;
	}

	.container
	.row
	h2{
		width: 0;
		height: fit-content;
		font-size: 100%;
		flex-grow: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-weight: 400;
	}

	.container
	.row.locked
	h2{
		color: #ccc;
		font-style: italic;
	}

	.container
	.row
	input{
		width: auto;
		height: 100%;
		cursor: pointer;
	}

	.container
	.row
	input:disabled{
		cursor: not-allowed;
	}

	.container
	.buttons{
		width: 100%;
		height: fit-content;
		display: flex;
		justify-content: start;
		align-items: start;
		flex-flow: row wrap;
		gap: 5px;
	}

	.container
	.buttons
	button{
		width: 0;
		height: fit-content;
		flex-grow: 1;
		flex-basis: content;
		padding: 6px;
		border-radius: 5px;
		cursor: pointer;
		background: #999;
		transition: var(--transition);
	}

	.container
	.buttons
	button:hover{
		filter: brightness(85%);
	}

	.container
	.buttons
	button.positive{
		background: var(--accent-color-2);
	}

</style>