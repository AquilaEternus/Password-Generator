<template>
   <nav class="navbar navbar-dark bg-dark ">
      <router-link class="navbar-brand" to="/">Password Generator</router-link>
      <router-link class="nav-item nav-link" to="/about">About</router-link>
   </nav>
</template>

<script>
export default {
   name: 'NavBar'
}
</script>

<style scoped>
   .navbar-brand {
      margin-left: 12px;
   }
   .nav-link {
      text-decoration: none!important;
      color: white!important;
   }
</style>