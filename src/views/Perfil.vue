<template>
    <div>
        <div class="container">
            <div>
                <h2>
                    Perfil
                </h2>
                <img src="" alt="">
                <h1>Nombre</h1>
                <p>Correo</p>
                <h3>Tus suscripiones</h3>
                <ul>
                    <li>
                        <p>Zona Otoño</p>
                    </li>
                    <li>
                        <p>Zona Verano</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>
                    Genera tu suscripión Free
                </h2>
                <p>Obten al azar hasta tres suscripones a nuestras zonas</p>
                <input type="submit" value="Generar" v-on:click="Salir">
                <p>resultados:</p>
                <input type="submit" value="Ok" v-on:click="Salir">
                <ul>
                    <li><a href="">Zona Muggle</a></li>
                    <li><a href="">Zona Black</a></li>
                </ul>
            </div>
        </div>
        <input type="submit" value="Salir" v-on:click="Salir">
    </div>
</template>
<script>
export default {
    
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
              
        }
    },
}
</script>
<style scoped lang="scss">
    $cel: 540px;
    $tablet: 814px;
    $laptop:1025px;
    $desk:1300px;
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
    .container{
        margin-top:15vh; 
        height: 60vh;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    h2{margin:0; 
        
    }
</style>

