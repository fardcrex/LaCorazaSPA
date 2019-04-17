<template>
  <div class="container">
    <div>
      <h1>La Coraza Server Token</h1>
    </div>
    <div>
      <h2>Tecnologìas Frontend</h2>
      <ul>
        <li>Vue, Vuex, Vue Router</li>
        <li>Sass</li>
        <li>Axios</li>
      </ul>
    </div>
    <div>
      <h2>Tecnologìas Backend</h2>
      <ul>
        <li>Java</li>
        <li>PostgreSQL</li>
        <li>JWT</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
  created(){
      this.$store.commit("actualizarFondo","normal")
  }
}
</script>
<style lang="scss" scoped>
  h1{
    font-size: 4rem
  }
  ul{
    width: 30%;
    font-size: 1.2rem
  }
  .container{
        margin: auto;
        margin-top:10vh; 
        height: 65vh;
        display: grid;
        grid-template-columns:50%;
        justify-content: center;
        align-self: center;

        &>div{       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    
        }
    }


</style>