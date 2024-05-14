<script lang="ts">

	import Employee from "./EmployeesRow/Employee.svelte";

</script>

<section>

	<h1>
		Våre ansatte
	</h1>

	<Employee/>
	<Employee/>
	<Employee/>
	<Employee/>
	<Employee/>

</section>

<style>

	section{
		width: calc(100% - 100px);
		height: fit-content;
		padding: 0 50px;
		margin: 70px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: row wrap;
		gap: 50px;
	}

	section
	h1{
		width: 100%;
		height: fit-content;
		text-align: center;
		font-size: 40px;
		font-weight: 500;
	}

</style>