<template>
  <div>
        <h2 class="title-zone">Zona Muggle</h2>
        <div class="set">
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle2.png" alt=""></div>
            <div><img src="../assets/hojamuggle5.png" alt=""></div>
            <div><img src="../assets/hojamuggle4.png" alt=""></div>
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle2.png" alt=""></div>
            <div><img src="../assets/hojamuggle3.png" alt=""></div>
            <div><img src="../assets/hojamuggle4.png" alt=""></div>            
        </div>
        <div class="set set2">
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle5.png" alt=""></div>
            <div><img src="../assets/hojamuggle4.png" alt=""></div>
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle2.png" alt=""></div>
            <div><img src="../assets/hojamuggle3.png" alt=""></div>
            <div><img src="../assets/hojamuggle4.png" alt=""></div>            
        </div>
        <div class="set set3">
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle2.png" alt=""></div>
            <div><img src="../assets/hojamuggle5.png" alt=""></div>
            <div><img src="../assets/hojamuggle4.png" alt=""></div>
            <div><img src="../assets/hojamuggle1.png" alt=""></div>
            <div><img src="../assets/hojamuggle2.png" alt=""></div>
            <div><img src="../assets/hojamuggle5.png" alt=""></div>
            <div><img src="../assets/hojamuggle4.png" alt=""></div>            
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
   
  },
  created(){
      this.$store.commit("actualizarFondo","muggle")
  }
}
</script>
<style scoped>

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
        opacity: 0.4;
        
    }
    20%
    {   
        opacity: 0.95;
       transform: translateX(-20px) rotate(45deg)
    }
    40%
    {   
    
       transform: translateX(-20px) rotate(90deg)
    }
    60%
    {   
    
       transform: translateX(20px) rotate(135deg)
    }
    80%
    {   
    
       transform: translateX(20px) rotate(180deg)
    }
    
    100%
    {
        transform: translateX(-20px) rotate(225deg);
        top: 110%;
    }
}

.set2{
    transform: scale(1.5) rotateY(180deg);
    filter: blur(2px)
}
.set3{
    transform: scale(0.7) rotateX(180deg);
    filter: blur(4px)
}

</style>
