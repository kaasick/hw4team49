<template>
  <div id="contactView">
    <Header/>
      <h3>About us</h3>
      
      <div class="table">
        <div class="l"><p></p></div>
        <table id="header">
          <!-- <img src="../assets/team.jpg" alt=""> -->
          <tr id="header">
            <th></th>
            <th>Team members</th>
            <th></th>
          </tr>
          
          <tr>
            <th>Simon</th>
            <th>Timo</th>
            <th>Edvard</th>
          </tr>

            
        </table>
        <div class="k">
          <span>&#9993;</span>
          <span>team49@veryhotmail.com</span>
        </div>

        <div class="l"><p></p></div>
      </div>

      
    <Footer/>

  </div>
</template>

<script>
export default {
  name: "ContactsView"
}
</script>

<style scoped>



*{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  color: rgb(255, 255, 255);
}

h3 {
  font-size: 46px;
  color: black;
  text-decoration: none;
  color: rgb(59, 91, 91);
  text-shadow: 1px 1px 2px #FFF ;
}

.table {
  margin: 2%;
  display: flex;
  
  border: 2px solid;
  border-color: rgb(59, 55, 61);
  border-radius: 5px;
  background-color: rgba(240, 163, 119, 0.226);
  
  justify-content: space-between;
  max-width: 100%;
  height: 400px;
  
  background: white url(https://explore.easyprojects.net/wp-content/uploads/2015/11/The-roles-of-project-managers-for-10-plus-team-members-1080x640.jpg) repeat;
  
}


.table tr {
  
  text-decoration: none;
  color: rgb(59, 91, 91);
  text-shadow: 1px 1px 2px rgb(99, 87, 87) ;

  overflow: auto;
}

span {
  text-align: left;
  content: "\2709";
}


#header {
  
  color: rgb(10, 38, 29);
}

.k {
  margin-right: 1px;
  display: block;
  word-break: break-all;
}


</style>