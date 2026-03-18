<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
	<div class="body">
		<div class="login">
			<p>Connectez vous</p>
			<div>
				<input></input>
			</div>
			<button>E    <p>
			Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
			documentation
		</p>ntrer</button>
		</div>
	</div>
</template>

<style>
html,
body {
	height: 100%;
	margin: 0;
	background-color: lemonchiffon;
}

* {
	border-width: 0;
	padding: 0;
	margin: 0;
}

button {
	padding: 0.25vi;
}

.body {
	margin: 1vi;
	padding: 2vi;
	background-color: #343434;
	color: #FFFFFF;
	display: flex;
	flex-flow: column;

	.login {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
