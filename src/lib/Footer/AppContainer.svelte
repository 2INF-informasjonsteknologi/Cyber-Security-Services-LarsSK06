<script lang="ts">

	import appStore from "../../img/app-store.svg";
	import googlePlay from "../../img/google-play.png";

</script>

<section>

	<a href="/">
		<img alt="App Store" src={appStore}>
	</a>
	
	<a href="/">
		<img alt="Google Play" src={googlePlay}>
	</a>

</section>

<style>

	section{
		width: 0;
		height: fit-content;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		gap: 10px;
	}

	section
	img{
		width: 150px;
		height: auto;
	}

	@media (width < 900px){

		section{
			display: none;
		}

	}

</style>