<script lang="ts">

	import Employee from "./EmployeesRow/Employee.svelte";

</script>

<section>

	<Employee/>
	<Employee/>
	<Employee/>
	<Employee/>
	<Employee/>

</section>

<style>

	section{
		width: 100%;
		height: fit-content;
		margin: 40px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		gap: 50px;
	}

</style>