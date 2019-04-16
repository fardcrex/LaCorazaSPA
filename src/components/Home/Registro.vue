<template>
    <form  v-on:submit.prevent="registrarse">
      <div class="container__form">        
          <label for="fname2">Correo</label>
          <input v-model="credencialesRegistrar.correo" type="text" id="fname2" name="firstname" placeholder="Un Correo..">
          <label for="lname2">Contraseña </label>
          <input v-model="credencialesRegistrar.password" type="password" id="lname2" name="lastname" placeholder="Una Contraseña..">
          
          <input type="submit" value="Registrarse" >
          <p class="botonChange" v-on:click="cambiarFormulario">Ingresar</p>
    
      </div>
    </form> 
</template>
<script>
import axios from 'axios'
import { async } from 'q';
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
        }
    },
     methods:{         
    
        registrarse: async function(){
        axios.defaults.headers.common['Authorization'] =`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJVc2VyIiwiZXhwIjoxNTU1Mzk3MjgwLCJ1c2VyX2lkIjo2MzAsImNvcnJlbyI6ImNhbGF0byIsInJvbGVfaWQiOjJ9.0ioeKno4ZFOGA6yAcmkR3ccY2o-IqOeXqpkGGCnb1jPVlYq0XN8G9anVT5I4An_f0AYbp5ohH4ObhPvRFwa0Tw`     
        axios
        .post("http://www.lacoraza.com:8080/TokenServer/v1/usuarios/",this.credencialesRegistrar)
        .then(res=>{
            console.log(res);
            
        }).catch(error => {
            console.log(error);
        })  
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

