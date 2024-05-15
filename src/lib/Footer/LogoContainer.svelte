<script lang="ts">

	import logo from "../../img/logo.png";

</script>

<section>

	<img alt="Vår logo" src={logo}>

	<p>
		Den fremste leverandøren av cyber-sikkerhetstjenester
		og løsninger for partnere over here verden.
	</p>

</section>

<style>

	section{
		width: 0;
		height: fit-content;
		flex-grow: 1;
	}
	section img{
		width: auto;
		height: 70px;
		margin: 10px 0;
	}
	section p{
		width: 100%;
		height: fit-content;
		margin: 10px 0;
		font-size: 20px;
		color: #999;
	}

	@media (width < 700px){

		section{
			display: none;
		}

	}

</style>