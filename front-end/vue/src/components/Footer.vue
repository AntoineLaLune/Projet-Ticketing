<script setup lang="ts">
  import { ref } from "vue";
  const Valeur = ref("4");
</script>

<template>
	<footer id="footer_default" class="footer-default">
		<label>
			Projet-Ticketing
		</label>
		<table>
			Tableau de bord
			Tickets
			Aide
		</table>
	</footer>
</template>

<style scoped>
.footer-default {
	margin: 1vi;
	padding: 4vi;
	border-radius: 4vi 4vi 1vi 1vi;
	background-color: #343434;
	color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	flex: 0 1 40px;
}

.footer-logo {
	justify-content: right;
}

.footer-selection {
	justify-content: center;
}

.footer-account {
	justify-content: left;
}
</style>