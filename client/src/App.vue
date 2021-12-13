<template>
  <div>
    <NavBar />
    <br />
    <router-view></router-view>
    <br />  
    <Footer />
  </div>

</template>


<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
}
</script>

<style>
.custom-card {
  max-width: 90%;
  min-width: 50%;
  margin: 0 auto;
  padding: 20px;
}
</style>
