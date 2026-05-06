<script setup lang="ts">
  import Header from './Header.vue'
  import { ref } from "vue";
  const Valeur = ref("4");
</script>

<template>
  <header :class="header">
    <Header />
  </header>
</template>

<style>
html {
    background-color: #d9d9d9;
}

* {
    border-width: 0;
    padding: 0;
    margin: 0;
}

.header-default {
    margin: 1vi;
    padding: 2vi;
    border-radius: 4vi;
    background-color: #000000;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
}

button {
    padding: 0.25vi;
    border-radius: 4vi;
}

.page {
    margin: 1vi;
    padding: 2vi;
}
</style>
