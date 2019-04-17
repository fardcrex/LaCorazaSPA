<template>
    <div>
        <div class="container">
            <div class="container__perfil">
                <h2>
                    Perfil
                </h2>                
                <h1 v-if="usuario">{{usuario.nombre}}</h1>
                <p v-if="usuario">correo: {{usuario.correo}}</p>
                <h3>Tus suscripiones</h3>
                <ul v-if="usuario">
                    <template  v-for="sucripcion in usuarioSucripciones">
                        <li  v-bind:key="sucripcion.id" v-if="sucripcion">Zona {{sucripcion.name}}</li>
                    </template> 
                </ul>
            </div>
            <div class="container__resultados">
                <h2>
                    Genera tu suscripción Free
                </h2>
                <p>Gana hasta tres suscripciones a nuestras zonas</p>
              <!--   <p>-zona muggle:28%   -zona verano y otoño 22%</p>
                <p>-zona black: 16%   -zona premium: 11%</p> -->
                <input v-show="!generar" class="botonGenerar" type="submit"  value="Participar!" v-on:click="generarSucripcionesResultado">
                <div class="espacio">
                    <p v-if="generar">resultados:</p>
                     <ul v-if="generar">
                        <template  v-for="sucripcion in sucripcionesResultado">
                            <li  v-bind:key="sucripcion.id" v-if="sucripcion">Zona {{sucripcion.name}}</li>
                        </template> 
                    </ul>
                </div>
               
                <input v-show="generar"  class="botonSalir" type="submit" value="Confirmar" v-on:click="confirmar">
                <input v-show="generar"  class="botonNewIntento" type="submit" value="Otro intento" v-on:click="generar = !generar">
            </div>
        </div>
        <input class="botonSalir" type="submit" value="Salir" v-on:click="Salir">
        <p>Tus zonas estaran guardadas y protegidas</p>
        <p>Prueba con incognito si quieres xD</p>
 </div>
</template>
<script>
import axios from 'axios'
import config from '../config.js'
export default {
    data() {
        return {
            sucripcionesList:{
                ['5']:{name:"Muggle",url:"",id:5},
                ['6']:{name:"Black",url:"",id:6},
                ['7']:{name:"Premium",url:"",id:7},
                ['8']:{name:"Verano",url:"",id:8},
                ['9']:{name:"Otoño",url:"",id:9},
                },
            sucripcionesResultado:[],
            generar:false
        }
    },
    computed: {
        usuarioSucripciones(){
            let array =[...this.$store.state.menu]
            array.shift()
            array.shift()
            return array
        },
        usuario(){
            return this.$store.state.usuario
        }
    },  
    created(){      
        this.$store.commit("actualizarFondo","normal")
    },
    methods: {
        Salir: function(){
            console.log(this.$store.state.usuario);            
            this.$store.state.usuario
                
                this.$store.commit('actualizarUsuario',null)
                this.$store.commit('regresarMenu')
                localStorage.clear();
                this.$router.push('/Home/Login')
              
        },
        generarSucripcionesResultado:function(){
            this.generar=false
            this.sucripcionesResultado=[]
            let totalResultado =this.getNumeros(3,1),
                sucripcionesList={...this.sucripcionesList},
                sucripcionesResultado=[]            
            while(true) {
                let indice =this.getNumeros(18,1)
                                 
                    if(indice<6 && sucripcionesList[5]){
                        sucripcionesResultado.push(sucripcionesList[5])
                         sucripcionesList[5]=null                
                    }else if(indice<10 && sucripcionesList[8]){
                        sucripcionesResultado.push(sucripcionesList[8]) 
                        sucripcionesList[8]=null
                    }else if(indice<14 && sucripcionesList[9]){                        
                        sucripcionesResultado.push(sucripcionesList[9]) 
                        sucripcionesList[9]=null
                    }else if(indice<17 && sucripcionesList[6]){                       
                        sucripcionesResultado.push(sucripcionesList[6]) 
                         sucripcionesList[6]=null
                    }else if(indice<19 && sucripcionesList[7]){                        
                        sucripcionesResultado.push(sucripcionesList[7]) 
                        sucripcionesList[7]=null
                    }else{
                        continue
                    }                   
                    totalResultado --
                
                if(totalResultado==0){
                    break
                }
            }
          this.sucripcionesResultado=[...sucripcionesResultado]
          
          this.generar=true
        },        
        getNumeros:function(máximo,mínimo){
            return Math.floor(Math.random() * ((máximo+1) - mínimo) + mínimo);
        },
        confirmar: async function(){
            
            let token = localStorage.token
            axios.defaults.headers.common['Authorization'] =`Bearer ${token}`
            let res = await axios.post(config.URL_opciones,this.sucripcionesResultado)
           
           localStorage.Menu = JSON.stringify(this.sucripcionesResultado)
           this.$store.commit('actualizarMenu', this.sucripcionesResultado)
           this.generar=!this.generar
        },
    },
}
</script>
<style scoped lang="scss">
    $cel: 540px;
    $tablet: 814px;
    $laptop:1025px;
    $desk:1300px;
    .botonSalir {
        width: 20%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .botonSalir:hover {
    background-color: #45a049;
    }
    .botonNewIntento{
        width: 20%;
        background-color: rgb(241, 75, 75);
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .botonGenerar {
        width:20%;
        background-color: #fa500d;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center
    }

    .botonGenerar:hover {
        background-color: #f57520;
    }
    .container{
        margin:auto;
        margin-top:10vh; 
        height: 55vh;
        max-width: 1100px;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    h2{margin:0; 
        
    }
    ul{
        width:8em;
        margin: 0 0 1em 0;
        padding: 0
    }
    .container__perfil, .container__resultados{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }
    .espacio{
            min-height: 6rem;
    }
    

</style>

