<script setup>
import {onMounted, ref} from "vue"
  const count = ref(0)

  function increment() {
    count.value++
  }

  onMounted(() => {
    console.log(`count:${count}`)
  })
</script>
<template>
  <button @click="increment">count:{{count}}</button>
</template>

<style scoped>
  button {
    font-weight: bold;
  }
</style>