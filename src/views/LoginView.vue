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
            <input required v-model="email" type="email" id="email" name="email" placeholder="Email">
            <br>
            <input required v-model="password" type="password" id="password" placeholder="Password">
            <div>
              <button @click="LogIn" class="btn">Log in</button>
              <button @click='this.$router.push("/signup")' class="btn">Sign up</button>
            </div>

          </form>


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
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
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
            //this.$router.push("/");
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },

  },
}
    // check that password contains at least one number



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

.btn {
  background: rgb(151, 225, 216);
  border-radius: 12px;
  margin: 2%;
}

</style>