<template>
    <header>
        <p></p>
        <ul class="nav">
            <li> <router-link to="/">Home</router-link></li>
            <li> | </li>
            <li> <router-link to="/signup">Contacts</router-link></li>
        </ul>

        <div class="avatar-container"> 
            <img class="logoga" src="../assets/avatar.png" alt="Your avatar" 
                @click="toggledropdownMenu">
            <ul class="avatar-dropdown" v-if="dropdownMenu">
                <li>Kaupo Toba</li>
                <li> kaupar@ut.ee</li>
                <li><a href="#">Log out</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
            dropdownMenu: false
        }
    },
    methods: {
        toggledropdownMenu() {
            this.dropdownMenu = !this.dropdownMenu;
        }
    }

    }
</script>

<style scoped>

header {
    
    display: flex;
    background-color: rgb(179, 179, 161);
    justify-content: space-between;
    border-radius: 16px;
    align-items: center;
    
}

header .nav {
    padding: 16px;
}

header .nav li {
    
    font-weight: bolder;
    font-size: 26px;
    display: inline;
    list-style-type: none;
    margin: 2px;
}

header .nav li a:hover{
    background-color: rgba(84, 92, 90, 0.258);

}

header .nav li a{
    text-decoration: none;
    color: rgb(59, 91, 91);
    text-shadow: 1px 1px 2px #FFF ;
}


header .logoga {
    width: 40px;
    border-radius: 100%;
    margin-right: 44px;
}

header .avatar-dropdown {
    position: absolute;
    background-color: #fff;
    border-radius: 12px;
    margin-top: 18px;
    padding: 5px;
    z-index: 1;
    box-shadow: 1px 2px 10px rgba(71, 83, 84, 0.89);
    border: 1px solid;
}



header .avatar-dropdown li{
    list-style-type: none;
    font-size: 12px;
    font-weight: bolder;
}

header .avatar-dropdown li a{
    text-decoration: none;
    color:black;
}

header .avatar-dropdown li a:hover{
    background-color: antiquewhite;
}

.avatar-container {
    margin: 10px;
}


</style>