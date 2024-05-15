<script lang="ts">

	import employeePlaceholder from "../../img/employee-placeholder.webp";

</script>

<div>
	<img alt="'Placeholder' for ansatt" src={employeePlaceholder}>
	<h3>
		Ansattes navn
	</h3>
	<a href="mailto:employee@cybersecurityservices.com">
		Ansattes epost-adresse
	</a>
</div>

<style>

	div{
		width: 180px;
		height: fit-content;
		padding: 30px;
		border-radius: 10px;
		backdrop-filter: blur(20px);
		background: rgba(255, 255, 255, .02);
		border: 1px solid rgba(255, 255, 255, .2);
	}

	div
	img{
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		border-radius: 50%;
		object-fit: cover;
	}

	div
	h3{
		width: 100%;
		height: fit-content;
		margin: 6px 0;
		font-weight: 400;
		font-size: 20px;
	}

	div
	a{
		width: 100%;
		height: fit-content;
		margin: 6px 0;
		font-weight: 400;
		font-size: 18px;
	}

	@media (width < 800px){

		div{
			width: 140px;
		}

		div
		h3{
			font-size: 16px;
		}

		div
		a{
			font-size: 14px;
		}

	}

</style>