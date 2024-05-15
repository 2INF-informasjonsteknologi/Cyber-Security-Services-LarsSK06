<script lang="ts">

	import Container from "./CookieWrapper/Container.svelte";

</script>

<div id="cookie-wrapper" class="wrapper">

	<Container/>

</div>

<style>

	.wrapper{
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .2);
		backdrop-filter: blur(20px);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		animation: spawn 1s ease 0s 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes spawn{
		0%{
			opacity: 0;
			scale: 0;
			pointer-events: none;
		}
	}

</style>