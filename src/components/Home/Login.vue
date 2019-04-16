<template>
    <form  v-on:submit.prevent="loguearse">
        <div class="container__form">        
            <label for="fname">Correo</label>
            <input v-model="credencialesIngresar.correo" type="text" id="fname" name="firstname" placeholder="Tu Correo..">
            <label for="lname">Contraseña </label>
            <input v-model="credencialesIngresar.password" type="password" id="lname" name="lastname" placeholder="Tu Contraseña..">
            <input type="submit" value="Entrar" >
            <p class="botonChange" v-on:click="cambiarFormulario">Registrarse</p>
        </div>   
    </form>
</template>
<script>
import axios from 'axios'
import { async } from 'q';
export default {

    data() {
        return {
            credencialesIngresar:{
                correo:"",
                password:""
            }           
        }
    },

    methods:{          
        loguearse: async function(){ 
        let response 
        try {
        response =await axios.post("http://www.lacoraza.com:8080/TokenServer/getToken",this.credencialesIngresar)
            
        } catch (error) {
            console.log(error);
        }
        if(response.data.Token){
            localStorage.token = response.data.Token
            localStorage.usuario = JSON.stringify(response.data.Usuario)

            await this.$store.dispatch("getDataUsuarios")
            
        }
            
        },
        cambiarFormulario: async function(){
        this.credencialesIngresar.correo=""
        this.credencialesIngresar.password=""
        this.$router.push('/Home/Registro')
       
        }
    }
}
</script>
<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  padding: 20px;
}
.container__form{
  width: 30%;
  margin: auto
}
.botonChange{
  margin-top: 2em;
  
}
.botonChange:hover{
  margin-top: 2em;
  cursor: pointer;
}
</style>

