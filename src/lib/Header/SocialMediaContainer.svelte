<script lang="ts">

	import twitter from "../../img/some/twitter.svg";
	import linkedin from "../../img/some/linkedin.svg";
	import instagram from "../../img/some/instagram.svg";
	import facebook from "../../img/some/facebook.svg";

</script>

<section>

	<!-- 
		Mange av disse logoene brukt, går under firmaenes 'guidelines' for hvordan logoen skal se ut
		Å endre farge på noen, hvis ikke alle, av disse logoene, bryter firmaenes retningslinjer
		For oppgavens skyld, brytes disse retningslinjene
	 -->

	<a href="/">
		<div class="container">
			<img alt="Twitter" src={twitter}>
		</div>
	</a>

	<a href="/">
		<div class="container">
			<img alt="LinkedIn" src={linkedin}>
		</div>
	</a>

	<a href="/">
		<div class="container">
			<img alt="Instagram" src={instagram}>
		</div>
	</a>

	<a href="/">
		<div class="container">
			<img alt="Facebook" src={facebook}>
		</div>
	</a>

</section>

<style>

	section{
		width: 0;
		height: 100%;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		gap: 20px;
	}

	section
	a{
		width: fit-content;
		height: fit-content;
	}

	section
	a
	.container{
		width: auto;
		height: 20px;
		aspect-ratio: 1;
		padding: 10px;
		border-radius: 50%;
		border: 1px solid var(--accent-color);
	}

	section
	a
	.container
	img{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (width < 900px){

		section{
			display: none;
		}

	}

</style>