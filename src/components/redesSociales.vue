<template>
    <div>
        <div>
            <ul>
            <li >
                <a href="https://www.facebook.com/fardcrex"  target=”_blank” class="face">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-facebook" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
        <ul>
            <li class="twitter">
                <a href="https://twitter.com/fardcrex"  target=”_blank”>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-twitter" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#" class="google">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-google-plus" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/jair-pool-conislla-bocangel-a6931579/"  target=”_blank” class="linkedin">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-linkedin" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="https://www.instagram.com/fardcrex/?hl=es-la"  target=”_blank” class="instam">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="fa fa-instagram" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
        </div>
   <h3>
       Mis redes sociales
   </h3>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
div
{    
    position: fixed;
    bottom: 5vh;
    width: 100%;
    margin: auto;
    padding: 0;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;

}
ul{
    position: relative;
    margin: 10px;
    padding: 0;
    display: flex;

}
ul li{
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    margin: 0 30px;
    transform: rotate(-30deg) skew(25deg);
    background: #ccc;
}
ul li span{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #000;
    transition: 0.5s;
    display: flex !important;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px !important;
}
ul li:hover span:nth-child(5){
    transform: translate(40px,-40px);
    opacity: 1;
}
ul li:hover span:nth-child(4){
    transform: translate(30px,-30px);
    opacity: .8;
}
ul li:hover span:nth-child(3){
    transform: translate(20px,-20px);
    opacity: .6;
}
ul li:hover span:nth-child(2){
    transform: translate(10px,-10px);
    opacity: .4;
}
ul li:hover span:nth-child(1){
    transform: translate(0,0);
    opacity: .2;
}

.face span{
    background-color: #3B5999
}
.twitter span{
    background-color: #55ACEE
}
.google span {
    background: #dd4b39
}
.linkedin span {
    background: #0077b5
}

.instam span {
    background: #e4405f
}
h3{
    margin-top: 10rem
}
</style>
