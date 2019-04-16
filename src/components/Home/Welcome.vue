<template>
    <div>
        <div class="Title">
            <h2>
                Ingresa y obten hasta 2 suscripciones gratis a nuestras zonas
            </h2>
        </div>
        <input type="submit" value="Entrar" v-on:click="ingresar">
    </div>
</template>
<script>
export default {
    methods: {
        ingresar: function(){
         
            if(this.$store.state.usuario){
                this.$router.push('/Perfil')
            }else{
                this.$router.push('/Home/Login')
            }            
        }
    },
}
</script>
<style scoped>
    input[type=submit] {
    width: 25%;
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
    .Title h2{
        width: 70%;
        text-align: center;
    }
    .Title{
        margin: auto;
        width: 70%;
        height: 30vh;
        font-size: 0.5rem
    }
</style>

