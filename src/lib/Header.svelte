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
		width: calc(100% - 100px);
		height: fit-content;
		min-height: var(--header-height);
		padding: 0 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: row nowrap;
		gap: 20px;
	}

</style>