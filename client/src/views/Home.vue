<template>
    <div class="container">
      <div class="card custom-card">
        <div class="card-body">
          <form>
            <div v-show="invalid">
              <ErrorMessage msg="Length has to be a number between 8 and 256"/>
              <br />
            </div>
            
            <div class="form-group mb-3">
              <div class="input-group">
                <span class="input-group-text" id="inputGroup-sizing-default">Length</span>
              <input v-model.number="length" type="text" class="form-control" id="length" aria-describedby="inputGroup-sizing-default">
              </div>
              <small id="lengthHelp" class="form-text">Password length must be between 8 and 256</small>
            </div>
            <div class="form-group">
              <div class="mb-3 form-check">
                <input @click="()=>{useLowerCase = !useLowerCase}" v-model="useLowerCase" type="checkbox" class="form-check-input" id="lowerCaseCheck">
                <label class="form-check-label" for="lowerCaseCheck">Lower Case</label>
              </div>
              <div class="mb-3 form-check">
                <input @click="()=>{useUpperCase = !useUpperCase}" v-model="useUpperCase" type="checkbox" class="form-check-input" id="upperCaseCheck">
                <label class="form-check-label" for="upperCaseCheck">Upper Case</label>
              </div>
              <div class="mb-3 form-check">
                <input @click="()=>{useNumbers = !useNumbers}" v-model="useNumbers" type="checkbox" class="form-check-input" id="numbersCheck">
                <label class="form-check-label" for="numbersCheck">Use Numbers</label>
              </div>
              <div class="mb-3 form-check">
                <input @click="()=>{useSymbols = !useSymbols}" v-model="useSymbols" type="checkbox" class="form-check-input" id="symbolsCheck">
                <label class="form-check-label" for="symbolsCheck">Use Symbols</label>
              </div>
            </div>
            <div class="mb-3 text-center">
                <button @click="generatePassword" type="submit" class="btn btn-primary">Generate</button>
            </div>
          </form>
        </div>
      </div> 
      <br />
      <DisplayPassword :password="password" />
    </div>

</template>

<script>
import DisplayPassword from '../components/DisplayPassword.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import { generatePassword } from '../util/password';

export default {
  name: 'Home',
  components: {
    DisplayPassword,
    ErrorMessage
  },
  data() {
    return {
      length: 16,
      useLowerCase: true, 
      useUpperCase: true,
      useNumbers: true,
      useSymbols: true,
      password: '',
      invalid: false
    }
  },
  methods: {
    generatePassword(e) {
      e.preventDefault();

      // Check to see if length is valid.
      if (typeof this.length !== 'number' || this.length < 8 || this.length > 256 ) {
        // Display ErrorMessage for 7 seconds.
        this.invalid = true;
        this.password = '';
        setTimeout(() => {
          this.invalid = false;
        }, 7000)
      } else {
        this.invalid = false;
        this.password = generatePassword(this.length, this.useLowerCase, this.useUpperCase, this.useNumbers, this.useSymbols);
      }
    }
  }
}
</script>
