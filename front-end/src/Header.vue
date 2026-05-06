<script setup lang="ts">
  import { ref } from "vue";
  const Valeur = ref("4");
</script>

<template>
    <header id="header_default" class="header-default">
        <label id="header_logo" class="header-logo">
            Projet-Ticketing
        </label>
        <div id="header_selection" class="header-selection">
            <button>Tableau de bord</button>
            <button>Tickets</button>
            <button>Aide</button>
        </div>
        <div id="header_account" class="header-account">
            <button id="account_button" class="account-button">
                Account
            </button>
        </div>
    </header>
</template>

<style scoped>
.header-logo {
    justify-content: right;
}

.header-selection {
    justify-content: center;
}

.header-account {
    justify-content: left;
}
</style>