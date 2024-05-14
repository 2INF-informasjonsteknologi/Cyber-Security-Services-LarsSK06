<script lang="ts">
	
	import LogoContainer from "./Footer/LogoContainer.svelte";
	import ColumnContainer from "./Footer/ColumnContainer.svelte";
	import AppContainer from "./Footer/AppContainer.svelte";

</script>

<footer>

	<section>
		<LogoContainer/>
		<ColumnContainer/>
		<AppContainer/>
	</section>

	<section>
		<h3>
			Opphavsrett &#169; 2024 Cyber Security Services. Alle rettigheter forbeholdt.
		</h3>
	</section>

</footer>

<style>

	footer{
		width: 100%;
		height: fit-content;
		backdrop-filter: blur(20px) brightness(50%);
	}
	
	footer
	section{
		width: calc(100% - 200px);
		height: fit-content;
		padding: 100px;
		display: flex;
		justify-content: space-evenly;
		align-items: start;
		flex-flow: row nowrap;
		gap: 100px;
	}

	footer
	section
	h3{
		width: fit-content;
		height: fit-content;
		color: #999;
		font-weight: 500;
		font-size: 18px;
	}

</style>