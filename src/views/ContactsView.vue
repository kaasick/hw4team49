<template>
  <div id="contactView">
    <Header/>
      <h3>About us</h3>

        <div class="table">
        <table>
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
}

h3 {
  font-size: 29px;
}

.table {
  margin: 2%;
  display: flex;
  justify-content: center;
  border: 2px solid;
  border-color: rgb(59, 55, 61);
  border-radius: 5px;
}

#header {
  
  color: rgb(10, 38, 29);
}


</style>