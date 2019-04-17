https://premium.revlonprofessionalbrands.com/images/premium/logoZonaPremium.png
<template>
  <div class="home">
    <h2 class="title-zone">Zona Premium</h2>
      <div class="set">
        <div><img src="../assets/hojaPremium1.png" alt=""></div>
        <div><img src="../assets/hojaPremium2.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium4.png" alt=""></div>
        <div><img src="../assets/hojaPremium1.png" alt=""></div>
        <div><img src="../assets/hojaPremium2.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium4.png" alt=""></div>            
      </div>
      <div class="set set2">
        <div><img src="../assets/hojaPremium1.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium4.png" alt=""></div>
        <div><img src="../assets/hojaPremium1.png" alt=""></div>
        <div><img src="../assets/hojaPremium2.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium4.png" alt=""></div>            
      </div>
      <div class="set set3">
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium2.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium4.png" alt=""></div>
        <div><img src="../assets/hojaPremium1.png" alt=""></div>
        <div><img src="../assets/hojaPremium2.png" alt=""></div>
        <div><img src="../assets/hojaPremium3.png" alt=""></div>
        <div><img src="../assets/hojaPremium4.png" alt=""></div>            
      </div>
  </div>
</template>

<script>



export default {
  name: 'home',
  components: {
  },
  created(){
      this.$store.commit("actualizarFondo","premium")
  }
}
</script>
<style scoped>
.app{
  
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgb(240, 243, 231),#ebe48a)

}
.set
{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.set div {
    position: absolute;
    display: block;
}
.set div:nth-child(1)
{
    left: 35%;
    animation: animate 13s linear infinite;
    animation-delay:-7s
}
.set div:nth-child(2)
{
    left: 50%;
    animation: animate 8s linear infinite;
    animation-delay : -4s;
}
.set div:nth-child(3)
{
    left: 70%;
    animation: animate 10s linear infinite;
  
}
.set div:nth-child(4)
{
    left: 0%;
    animation: animate 14s linear infinite;
    animation-delay : -5s;
}
.set div:nth-child(5)
{
    left: 85%;
    animation: animate 14s linear infinite;
    animation-delay : -4s;
}
.set div:nth-child(6)
{
    left: 25%;
    animation: animate 8s linear infinite;
    animation-delay : -1s;
}
.set div:nth-child(7)
{
    left: 15%;
    animation: animate 11s linear infinite;
    animation-delay : -9s;
}
.set div:nth-child(8)
{
    left: 60%;
    animation: animate 14s linear infinite;
    animation-delay : -12s;
}
@keyframes animate
{
    0%
    {   
        opacity: 0;
        top: -10%;
        transform: translateX(20px) rotate(0deg)
    }
    10%
    {   
        opacity: 0.7;
        
    }
    20%
    {   
        opacity: 1;
       transform: translateX(20px) rotate(45deg)
    }
    40%
    {   
    
       transform: translateX(-20px) rotate(90deg)
    }
    60%
    {   
    
       transform: translateX(-20px) rotate(135deg)
    }
    80%
    {   
    
       transform: translateX(20px) rotate(180deg)
    }
    
    100%
    {
        transform: translateX(20px) rotate(225deg);
        top: 110%;
    }
}

.set2{
    transform: scale(1.5) rotateY(180deg);
    filter: blur(1.5px)
}
.set3{
    transform: scale(0.7) rotateX(180deg);
    filter: blur(3px)
}

</style>

