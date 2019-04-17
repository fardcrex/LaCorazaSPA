import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import config from './config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:null,
    menu:[{id:0,name:"Home"},{id:-1,name:"About"}],
    fondo:"normal"
  },
  mutations: {
    actualizarUsuario(state,usuario){
      state.usuario= usuario
    },
    actualizarMenu(state,menu){
      state.menu = [...[{id:0,name:"Perfil"},{id:-1,name:"About"}],...menu]
    },
    regresarMenu(state){
      state.menu = [{id:0,name:"Home"},{id:-1,name:"About"}]
    },
    actualizarFondo(state,fondo){
      state.fondo= fondo
    }
    
  },
  actions: {
    async getDataUsuarios({commit,state}){

         
      let usuario = JSON.parse(localStorage.usuario),        
          token = localStorage.token
          
          
      axios.defaults.headers.common['Authorization'] =`Bearer ${token}`  
      axios.all([
          axios.get(config.URL_opciones),
          axios.get(config.URL_usuarios+`/${usuario.id}`)
        ])
        .then(axios.spread((response1, response2) => {
          
          
          if(response2.data.correo){
            
            commit('actualizarMenu',response1.data)
            commit('actualizarUsuario',response2.data)
          }
          if(!localStorage.Menu){
            localStorage.Menu = JSON.stringify(response1.data)
           
            router.push({name:"Perfil"})   
          }  
          
          localStorage.Menu = JSON.stringify(response1.data)
        }))
        .catch(error => {
            console.log(error);
        }) 
    }
  }
})
