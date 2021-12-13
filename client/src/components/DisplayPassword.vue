<template>
   <div class="password" v-if="password">
        <h5>Your Generated Password is:</h5>
        <div class="input-group">
           <textarea 
            v-on:focus="$event.target.select()"
            class="form-control"
            ref="pw"
            row=3
            type="text" 
            name="password"
            :value="password" />
            <button @click="copyToClipboard" class="btn btn-outline-secondary" id="copyPasswordBtn">
               <span class="material-icons align-middle">
                  content_copy
               </span>
            </button>
        </div>
   </div>
</template>

<script>
   export default {
      name: 'DisplayPassword',
      props: {
         password: String
      },
      methods: {
         copyToClipboard() {
            this.$refs.pw.focus();
            document.execCommand('copy');
            setTimeout(() => {
               this.$refs.pw.blur();
            }, 500)
         }
      },
   }
</script>

<style scoped>
   .password {
      max-width: 90%;
      min-width: 50%;
      margin: 0 auto;

   }
</style>