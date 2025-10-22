<template>
  <div v-for="(name, i) in names" :class="aClass" @click="click">{{ i }}coucou {{ name }}</div>

  <div>le fond est {{ aClass }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const aClass = ref('red')

const names = ref(['Mohamed', 'Antoine', 'Thomas'])

function click() {
  aClass.value = 'blue'
  names.value.push('flo')
}
</script>

<style scoped>
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
</style>
