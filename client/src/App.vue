<template>
  <div>
    <h1>SEARCH</h1><br/>
    </div>
    <div>
    <form @submit.prevent = "handleSubmit" id="form">
      <div>
        <label>
            email:
            <br/><input type="text" id="email" v-model="email" autocomplete="form"/>
        </label>
      </div>
      <div>
        <label>
            number:
            <br/><input type="text" id="number" v-model="number" autocomplete="form"/>
        </label>
      </div>
      <div>
          <button type="submit">SUBMIT</button>
      </div><br/>
      <div class="area">
        <h4>
          <div>
            <img v-if="loading" class="loading" src="./assets/Spinner-1s-200px.svg" alt="O-O">
          </div>
          <div v-if="!loading">
            {{ result }}
          </div>
        </h4>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      number: '',
      result: '',
      loading: false
    }
  },
  methods: {
    // fetchWithTimeout() {
    //   return new Promise((resolve, reject) => {
    //     const controller = new AbortController()
    //     const signal = controller.signal

    //     fetch(url,{signal})
    //   })
    // }
    newAbortSignal(timeout) {
      const abortController = new AbortController();
      setTimeout(() => abortController.abort(), timeout || 0);

      return abortController.signal;
    },

    handleSubmit() {
      let emailp = email.value
      let numberp = number.value.replaceAll('-','')
      this.loading =!false
      setTimeout(() => {
        this.loading=!true
      }, 2000)
      const reqUrl = `http://localhost:5000/api/list?email=${emailp}&number=${numberp}`
      setTimeout(() => {
          axios.get(reqUrl)
            .then(response => this.result = response.data)
            .catch(error => console.log(error))
      }, 2001)
      event.target.reset()
    }
  },
  mounted() {
    
    const imEmail = new Inputmask("email");
    imEmail.mask(document.querySelector('#email'))

    const imNumber = new Inputmask("99-99-99");
    imNumber.mask(document.getElementById('number'))
  }
}

</script>

<style scoped>
div {
  display: flex;
  justify-content: center;

}

h1{
  width: 204px;
  background-color: rgb(87, 3, 90);
  text-align: center;
  margin: 0 !important;
}

input {
  text-align: center;
  width: 195px;
  margin:2% 0;
  color: rgb(250, 10, 178);
}

label {
  margin: 1px;
  text-align: center;
}

button {
  width: 200px;
  margin: 10% 0;
  color: rgb(250, 10, 178);
  border-radius: 0.2px;
  border-color: none;
  font-weight: bold;
}

.area {
  text-align: center;
  width: 200px;
  background-image: linear-gradient(
        to bottom,
        rgb(5, 93, 43),
        rgb(69, 5, 109)
    );
}

.loading {
  height: 30px;
  width: 30px;
}

</style>