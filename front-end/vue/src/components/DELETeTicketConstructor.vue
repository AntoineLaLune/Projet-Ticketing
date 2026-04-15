<script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue'
import v_newTicketPreview from './newTicketPreview.vue';


</script>

<template>

</template>

<style scoped>
* {
	/* flex-grow: 1;*/
}

.ticket {
	margin: 0.5vi;
	padding: 1vi;
	border-radius: 2vi;

	background-color: rgba(255, 255, 255, 0.125);
	color: white;
}

.ticket-header>* {
	display: flex;
	justify-content: space-around;
	padding: 1vi;

	border-style: none;
	border-radius: 2vi 2vi 0vi 0vi;

	background-color: rgba(255, 255, 255, 0.125);
	color: white;
}

input {
	padding: 0.5vi;
	margin-left: 0.5vi;

	border-style: none;
	border-radius: 2vi;

	width: 100% !important;
	background-color: rgba(255, 255, 255, 0.05);
	color: white;

	outline: 0px;
}

input:hover {
	background-color: #343434;
	color: white;
}


textarea {
	display: flex;
	justify-content: start;

	border-style: none;
	border-radius: 0vi 0vi 2vi 2vi;

	width: 100% !important;
	background-color: rgba(255, 255, 255, 0.05);
	color: white;

	outline: 0px;
}

textarea:hover {
	background-color: #343434;
	color: white;
}

button {
	margin: 0.5vi;
	padding: 1vi;
	border-style: none;
	border-radius: 2vi;

	display: flex;
	justify-content: end;

	background-color: rgba(255, 255, 255, 0.05);
	color: white;
}

button:hover {
	background-color: #343434;
	color: white;
}

.start {
	display: flex;
	justify-content: start;
}

.end {
	display: flex;
	justify-content: end;
}

.bold {
	font-weight: bold;
}
</style>