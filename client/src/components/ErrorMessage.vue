<template>
   <div class="error-message">
      {{ msg }}
   </div>
</template>

<script>
   export default {
      name: 'ErrorMessage',
      props: {
         msg: String
      }
   }
</script>

<style scoped>
   .error-message {
      padding: 10px 20px;
      background-color: rgb(255, 164, 164);
      border: 1px solid rgb(247, 76, 76);
      border-radius: 10px;
      color: white;   
   }
</style>