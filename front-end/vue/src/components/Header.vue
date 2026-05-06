<script setup lang="ts">
  import { ref } from "vue";
  const Valeur = ref("4");
</script>

<template>
	<div id="body" class="body">
		<label id="header_logo" class="header-logo">
			Projet-Ticketing
		</label>
		<div id="header_selection" class="header-content">
			<button>Tableau de bord</button>
			<button>Tickets</button>
			<button>Aide</button>
		</div>
		<div id="header_account" class="header-account">
			<button id="account_button" class="account-button">
				Account
			</button>
		</div>
	</div>
</template>

<style scoped>
.body {
	display: flex;
	justify-content: space-between;
	flex: 0 1 auto;
}

.header-logo {
	justify-content: right;
	align-content: center;
}

.header-content {
	justify-content: center;
}

.header-account {
	justify-content: left;
}
</style>