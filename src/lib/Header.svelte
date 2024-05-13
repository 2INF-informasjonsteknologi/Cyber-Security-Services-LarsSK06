<script lang="ts">

	import LogoContainer from "./Header/LogoContainer.svelte";
	import ButtonsContainer from "./Header/ButtonsContainer.svelte";
	import SocialMediaContainer from "./Header/SocialMediaContainer.svelte";

</script>

<header>

	<LogoContainer/>
	<ButtonsContainer/>
	<SocialMediaContainer/>

</header>

<style>

	header{
		width: 100%;
		height: fit-content;
		min-height: var(--header-height);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

</style>