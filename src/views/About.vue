<template>
  <div class="container">
    <div class="container__tittle centrado">
      <h1>La Coraza Server Token</h1>
    </div>
    <div class="container__container1 centrado">
      <h2>Tecnologìas Frontend</h2>
      <ul>
        <li>Vue, Vuex, Vue Router</li>
        <li>Sass</li>
        <li>Axios</li>
      </ul>
    </div>
    <div class="container__container2 centrado">
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
    height: 60vh;
    display: grid;
    grid-template-rows:  20vh 1fr;
    grid-template-columns:50% 50%;
    grid-template-areas: "tittle tittle" "container1 container2";
    justify-content: center;
    align-self: center;
    max-width: 1100px;
    
    &__tittle{
      grid-area: tittle;         
    }
    &__container1{
      grid-area: container1;         
    }
    &__container2{
      grid-area: container2;          
    }
  }
    .centrado{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center
    }


</style>