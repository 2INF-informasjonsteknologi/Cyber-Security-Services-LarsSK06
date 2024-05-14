<script lang="ts">

	import logo from "../../img/logo.png";

</script>

<section>

	<img alt="Cyber Security Services" src="{logo}">

</section>

<style>

	section{
		width: 0;
		height: 100%;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	section
	img{
		width: auto;
		height: 50px;
	}

	@media (width < 600px){
		section{
			display: none;
		}
	}

</style>