<template>
  <div id="app" :class="fondo">
    <div id="nav">
      <template v-for="link in menu"  >
        <router-link v-bind:key="link.id" v-if="link"  :to="{ name: link.name}">{{link.name}}</router-link> |
      </template> 
    </div>
  
    <router-view/>
    <redesSociales></redesSociales>
  </div>
</template>

<script>
import redesSociales from '@/components/redesSociales.vue'
import store from './store';
export default {
  components:{redesSociales},
  data() {
    return {
      
    }
  },
  computed: {
    fondo:function(){
      return this.$store.state.fondo
    },
    menu:function(){
      return this.$store.state.menu
    }
  },
  created() {
    if(localStorage.token && !this.$store.state.usuario){
        
      let menu =  JSON.parse(localStorage.Menu)
      store.commit('actualizarMenu',menu)
      this.$store.dispatch("getDataUsuarios")
     }
  },
}
</script>
<style lang="scss" >
body{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   position: absolute;
  padding: 0;
    width: 100%;
   height: 100vh;
}
.normal{
  background: radial-gradient(rgb(243, 255, 245),#b5f4ff)
}
.muggle{ 
    background: radial-gradient(#eec9d2,rgb(169, 235, 209))
}
.black{ 
     background: radial-gradient(rgb(255, 255, 255),#5f6368)
}
.premium{ 
     background: radial-gradient(rgb(240, 243, 231),#ebe48a)
}
.otoño{ 
    background: radial-gradient(#f3e4e8,rgb(235, 127, 108))
}
.verano{ 
    background: radial-gradient(#ecffe0,rgb(103, 255, 83))
}
#nav {
  padding: 30px;
  position: fixed;
  z-index: 100;
  margin: auto;
  a {
    font-size: 1.5em;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fa500d;
      font-size: 1.7rem
    }
  }
}
body{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.title-zone{
    position: absolute;
     top: 50%;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    
    margin: auto;
    padding: 0;
    font-size: 8em;
    font-family: sans-serif;

}
</style>
