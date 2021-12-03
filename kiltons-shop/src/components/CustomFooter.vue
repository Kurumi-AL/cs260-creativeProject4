<template>
    <div id="container">
        <div id="contacts">
        <div id="contacts--contact">
            <a href="https://github.com/Kurumi-AL/cs260-creativeProject4.git" style="color: white">Github: Kurumi Asano</a>
            <br>
            <router-link to="/admin" style="color: white">Admin Page</router-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            github: 'https://github.com/Kurumi-AL/cs260-creativeProject4.git',
            admin: 'Admin page'
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    body{
    display:flex;
    background-color:#F0F8FF;
    height:95vh;
    justify-content:center;
    align-items:flex-end;
    font-family:Open Sans;
    }

    #container{
    /* position: fixed;
    bottom: 0; */
    padding-top:20px;
    padding-bottom: 10px;
    margin-top:20px;
    width:100vw;
    color:white;
    background-color:#5b5a5e;
    display:flex;
    flex-direction:column;
    align-items:center;
    }
    #contacts{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    }
    #contacts--contact{
    text-align:center;
    }
    #contacts--social{
    width:20%;
    display : flex;
    justify-content : space-between;
    }
    #contacts--social div{
    height:30px;
    width:30px;
    background-color:white;
    border-radius:50%;
    }
    #mentions p {
    font-size:0.5em;
    }
</style>