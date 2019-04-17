import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
  import Login from './components/Home/Login.vue'
  import Registro from './components/Home/Registro.vue'
  import Welcome from './components/Home/Welcome.vue'
import Black from './views/Black.vue'
import Premium from './views/Premium.vue'
import Verano from './views/Verano.vue'
import muggle from './views/muggle.vue'
import otonio from './views/Otonio.vue'
import Perfil from './views/Perfil.vue'
import About from './views/About.vue'
import store from './store';
import axios from 'axios'
import config from './config'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:'/Home',
      children:[
        
        {
          path:'Login', component:Login,alias: '/Ingreso',
        },
        {
          path:'Registro', component:Registro
        },
        {
          path:'', component:Welcome,
        }
      ]
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Black',
      name: 'Black',      
      component: Black,
      meta:{
        autenticado: true
      }
    },
    {
      path: '/Premium',
      name: 'Premium',
      component: Premium,
      meta:{
        autenticado: true
      }
    },
    {
      path: '/Verano',
      name: 'Verano',
      component: Verano,
      meta:{
        autenticado: true
      }
    },
    {
      path: '/Muggle',
      name: 'Muggle',      
      component: muggle,
      meta:{
        autenticado: true
      }
    },
    {
      path: '/Otoño',
      name: 'Otoño',      
      component: otonio,
      meta:{
        autenticado: true
      }
    },    
    {
      path: '/Perfil',
      name: 'Perfil',      
      component: Perfil,
      meta:{
        autenticado: true
      }},
      { path: '*',redirect:'/Home' }
    ]
})
router.beforeEach(async (to,from,next)=>{  
  if(to.matched.some( (record) => record.meta.autenticado)){
    if(!localStorage.token){
     // console.log(`no token`); 
      next({name:'Home'})
    }else if(store.state.usuario){
      //console.log(`si usuario`);
      next()
    }else{      
     // console.log(`no usuario`);
      let token = localStorage.token      
      axios.defaults.headers.common['Authorization'] =`Bearer ${token}`
      axios.get(config.URL_opciones).
      then( response=>{        
      //  console.log(to);
        if(response.status==202){
          if(to.name==="Perfil"){
           
            next()
          }else{
        
          let dSuscripciones=response.data.reduce(function (obj, item) { 
            obj[item.name] = item; 
            return obj; }, {});
          if(dSuscripciones[to.name]){
            next()
          }else{
            next({name:'Home'})
          }}                 
        }else{
          localStorage.clear()
          next({name:'Home'})
        }})
      .catch(error=> {
        localStorage.clear()
        next({name:'Home'})
      })
    }  
    //console.log(`router`);    
    
  }else{
    next()
  }
})



export default router
