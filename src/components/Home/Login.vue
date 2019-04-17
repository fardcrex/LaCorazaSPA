<template>
    <form  v-on:submit.prevent="loguearse">
        <div class="container__form">        
            <label for="fname">Correo</label>
            <input v-model="credencialesIngresar.correo" type="text" id="fname" name="firstname" placeholder="Tu Correo..">
            <label for="lname">Contraseña </label>
            <input v-model="credencialesIngresar.password" type="password" id="lname" name="lastname" placeholder="Tu Contraseña..">
            <input type="submit" value="Entrar" >
            <p>{{mensajeRespuesta}}</p>
            <p class="botonChange" v-on:click="cambiarFormulario">Registrarse</p>
        </div>   
    </form>
</template>
<script>
import axios from 'axios'
import { async } from 'q';
import config from '../../config.js'
export default {

    data() {
        return {
            credencialesIngresar:{
                correo:"",
                password:""
            },
            mensajeRespuesta:""         
        }
    },

    methods:{          
        loguearse: async function(){ 
          this.mensajeRespuesta = "Ingresando ..."
          let response 
          try {
          response =await axios.post(config.URL_getToken,this.credencialesIngresar)
            if(response.status==200){
              this.mensajeRespuesta = "Usuario Inexistente" 
            }
              
          } catch (error) {
              console.log(error);
          }
          if(response.data.Token){
              localStorage.token = response.data.Token
              localStorage.usuario = JSON.stringify(response.data.Usuario)
              await this.$store.dispatch("getDataUsuarios")
                           
          }
          if(this.credencialesIngresar.correo=="" || this.credencialesIngresar.password=="" ){
            this.mensajeRespuesta = "Campos vacìos"
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
  background-color: #008338;
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

