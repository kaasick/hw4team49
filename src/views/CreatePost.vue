<template>
  <div id="createPost">
    <Header/>
      <div class="createPostBox">
        <span class="title">Add Post <br></span>
        <label for="body">Body</label>
        <input id="body" required v-model="body">
        <button v-on:click="CreatePost" class="createPost">Create Post</button>
      </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      body: ""
    };
  },
  methods: {
    CreatePost() {

      var data = {
        body: this.body
      };
      fetch("http://localhost:3000/auth/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  }

}
</script>

<style scoped>
.title{
  color: #15b5ee;
}
.createPostBox{
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 10px auto;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 7%;
  background-color: lightgrey;
}
</style>

