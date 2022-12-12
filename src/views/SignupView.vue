<template>
  <div class="loginPage">
    <div class="loginFlexBox">
      <section class="login">

        <div class="loginInfo">
          <h3>
            Welcome to PostIt<br>
          </h3>
          <span class="forwardFromLogin">
                    Create an account<br>
                </span>
          <span>
                    or<br>Please log in
                </span>
          <form ref="form">
            <input type="text" id="email" name="email" placeholder="Email">
            <br>
            <input v-model="password" type="password" id="password" placeholder="Password">
            <span class="errorinpw" v-show="lowercase"><br>At least two lowercase letters in password<br></span>
            <span class="errorinpw" v-show="uppercase"><br>Password has to start with uppercase letters<br></span>
            <span class="errorinpw" v-show="number"><br>Password has to contain at least one number<br></span>
            <span class="errorinpw" v-show="underscore"><br>Password has to contain at least one underscore<br></span>
            <span class="errorinpw" v-show="length"><br>Password has to be at of length 8-15 character<br></span>
            <button ref="button" v-on:click="validatePassword()" >Login</button>
          </form>
          <span class="forwardFromLogin">Forgot password</span>

        </div>


      </section>
    </div>

  </div>

</template>

<script>
import router from "@/router";

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      lowercase: false,
      uppercase: false,
      number: false,
      underscore: false,
      length: false,
    }
  },
  methods: {
    validatePassword() {
      let password = false
      password = this.checkForLowerCase() & this.checkForUpperCase() & this.checkForNumber() & this.checkForUnderscore() & this.checkForLength()
      if (password) {
        this.routeToHome()
      }
      return password
    },
    // route to home page
    routeToHome() {
      router.go({name: 'HomeView'})
    },
    checkForUpperCase() {
      const password = this.password
      if (/^(?=.*[A-Z])/.test(password)){
        this.uppercase = false
      }
      else {
        this.uppercase = true
      }
      return /^(?=.*[A-Z])/.test(password);
    },
    checkForLowerCase() {
      const password = this.password
      if (/(?=.*[a-z]){2}/.test(password)){
        this.lowercase = false
      }
      else {
        this.lowercase = true
      }
      return /(?=.*[a-z]{2})/.test(password);
    },
    checkForNumber() {
      const password = this.password
      if (/(?=.*[0-9])/.test(password)){
        this.number = false
      }
      else {
        this.number = true
      }
      return /(?=.*[0-9])/.test(password);
    },
    checkForUnderscore() {
      const password = this.password
      if (/(?=.*[_])/.test(password)){
        this.underscore = false
      }
      else {
        this.underscore = true
      }
      return /(?=.*[_])/.test(password);
    },
    checkForLength() {
      const password = this.password
      if (/(?=.{8,15})/.test(password)){
        this.length = false
      }
      else {
        this.length = true
      }
      return /(?=.{8,15})/.test(password);
    },

    // check that password contains at least one number


  }
}
</script>

<style>
.forwardFromLogin {
  color: #15b5ee;
}

.loginInfo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 100%;
}

.loginFlexBox {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 10px auto;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 7%;
  background-color: lightgrey;


}

/* .loginPage{} */
#loginButton {
  margin: auto;
  display: flex;
  width: fit-content;
}

div > h3 {
  margin: auto;
  display: flex;
  width: fit-content;
}

input ~ button {
  border: 2px solid ghostwhite;
  padding: 7px 28px 7px 28px;
  color: ghostwhite;
  font-size: 13px;
  border-radius: 4px;
  background-color: #4267B2;
}
.errorinpw{
  color: red;
  background: whitesmoke;
}

</style>