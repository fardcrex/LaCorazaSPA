<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-view></router-view>  
  </div>
</template>


<script>
// @ is an alias to /src


;
export default {
  name: 'home',
  data() {
    return {     
    }
  },
  components: {    
  },
  created(){
      this.$store.commit("actualizarFondo","normal")
  },
  methods:{       
    

  }
}
</script>
<style>
.home{
  margin-top: 15vh
}


</style>