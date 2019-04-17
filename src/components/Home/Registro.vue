<template>
    <form  v-on:submit.prevent="registrarse">
      <div class="container__form">        
          <label for="fname2">Correo</label>
          <input v-model="credencialesRegistrar.correo" type="email" id="fname2" name="firstname" placeholder="Un Correo..">
          <label for="lname2">Contraseña </label>
          <input v-model="credencialesRegistrar.password" type="password" id="lname2" name="lastname" placeholder="Una Contraseña..">
          
          <input type="submit" value="Registrarse" >
          <p>
            {{mensajeRespuesta}}
          </p>
          <p class="botonChange" v-on:click="cambiarFormulario">Ingresar</p>
    
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
            credencialesRegistrar:{
                correo:"",
                password:"",
                Role:{
                id:2
                }
            },
            mensajeRespuesta:""   
        }
    },
     methods:{         
    
        registrarse: async function(){
          this.mensajeRespuesta = "Resgistrando ..."
          axios.defaults.headers.common['Authorization'] =`Bearer ${config.KEY_REGISTRO}`     
          let response
           try {
          response = await axios.post(config.URL_usuarios,this.credencialesRegistrar)
            if(response.status==202)
            {
              this.mensajeRespuesta = "Ya existe ese correo"
            }
            console.log(response);
          } catch (error) {
            console.log(error);
          }
          if(response.data.correo){
            try {
              this.mensajeRespuesta = "Resgistrando ..."
            response =await axios.post(config.URL_getToken,this.credencialesRegistrar)
                
            } catch (error) {
                console.log(error);
            }
            if(response.data.Token){
                localStorage.token = response.data.Token
              
                localStorage.usuario = JSON.stringify(response.data.Usuario)
                await this.$store.dispatch("getDataUsuarios")              
            }
          }
          if(this.credencialesRegistrar.correo=="" || this.credencialesRegistrar.password=="" ){
            this.mensajeRespuesta = "Campos vacìos"
          }
        },
        cambiarFormulario: async function(){
           
            this.credencialesRegistrar.correo=""
            this.credencialesRegistrar.password=""
            this.$router.push('/Home/Login')
        } 
    }
}
</script>
<style scoped>
input[type=email], select {
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
  background-color: #0b4c88;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #0c5497;
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

