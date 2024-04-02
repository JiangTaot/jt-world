<script setup>
  import axios from "axios";
  axios.post('/api/admin/login',{
    username:'JTADMIN',
    password:'123123'
  }).then(resp => {console.log(resp)})
  .catch(error => {console.log(error)})
</script>
<template>
  <main>
    <div>这是body</div>
    <div>这是<router-link to="/document">文档</router-link></div>
  </main>
</template>

<style scoped>

</style>