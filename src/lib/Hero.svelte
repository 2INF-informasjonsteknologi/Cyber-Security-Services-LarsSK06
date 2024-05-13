<script lang="ts">

	import Button from "./Hero/Button.svelte";

</script>

<article>

	<div class="container">
		<h1>
			Cyber Security Services
		</h1>
		<p>
			Cyber Security Services er et amerikansk cyber-sikkerhetsselskap
			som leverer tjenester og administrerer cyber-risikoer på vegne
			av våre verdifulle partnere.
		</p>
		<Button/>
	</div>

</article>

<style>

	article{
		width: 100%;
		height: calc(100vh - var(--header-height));
		display: flex;
		justify-content: center;
		align-items: center;
	}

	article
	.container{
		width: fit-content;
		height: fit-content;
	}

	article
	.container
	h1{
		width: 100%;
		height: fit-content;
		min-width: fit-content;
		margin: 20px 0;
		font-size: 110px;
		color: var(--text-color);
		text-align: center;
	}

	article
	.container
	p{
		width: fit-content;
		height: fit-content;
		min-width: fit-content;
		max-width: 900px;
		margin: 20px 0;
		font-size: 30px;
		color: #999;
		text-align: center;
	}

</style>