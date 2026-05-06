<script setup lang="ts">
  import { ref } from "vue";
  const Valeur = ref("4");
</script>

<template>
	<div id="body" class="body">
		<label>
			Projet-Ticketing
		</label>
		<table>
			Tableau de bord
			Tickets
			Aide
		</table>
	</div>
</template>

<style scoped>
.body {
	display: flex;
	justify-content: space-between;
	flex: 0 1 40px;
}

.footer-logo {
	justify-content: right;
}

.footer-content {
	justify-content: center;
}

.footer-account {
	justify-content: left;
}
</style>