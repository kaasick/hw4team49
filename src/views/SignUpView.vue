<template>
  <div class="form">
    <h3>SignUp</h3>
    <label for="email">Email</label>
    <input type="email" id="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" required v-model="password">
    <button v-on:click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    SignUp() {

      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
}
</script>
<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background-color: lightgrey;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: #15b5ee;
}
label {
  color: #15b5ee;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}
button {
  background:#15b5ee;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
</style>