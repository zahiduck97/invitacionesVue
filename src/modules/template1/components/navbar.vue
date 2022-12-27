<template>
    <nav>
        <div>
            <h1><pre>Zeltzin    Yazaret</pre></h1>
        </div>
        <span @click="menu()">&#9776;</span>
        <div :class="mostrarMenu ? 'menu' : 'menu2'" >
            <span class="hover-underline-animation" v-for=" opcion in arrayMenu" :key="opcion.titulo" :click="opcionSeleccionada(opcion.valor)"> {{opcion.titulo}} </span>
        </div>
    </nav>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    props:{
          alias: {
              type: String,
              required: false
          }
    },
    setup(props) {
      let mostrarMenu = ref(false)
        const arrayMenu= reactive([
            {titulo: 'INICIO', valor: "inicio"},
            {titulo: 'DATOS', valor: "datos"},
            {titulo: 'LUGAR', valor: "lugar"},
            {titulo: 'FOTOS', valor: "fotos"},
            {titulo: 'PERSONAS', valor: "personas"},
            {titulo: 'ASISTENCIA', valor: "asistencia"},
            {titulo: 'ACCESO', valor: "qr"},
            {titulo: 'CONTACTO', valor: "contacto"},
            {titulo: 'FIN', valor: "fin"},
        ])

        onMounted(() => {
          setTimeout(() => {
            
            console.log(props);
          }, 2000);
        })
        const opcionSeleccionada = (valor) => {

        }

        return{
            arrayMenu,
            mostrarMenu,
            opcionSeleccionada
        }
    }
}
</script>

<style lang="scss" scoped>

.shrink {
  background: transparent !important;
  transition: all .5s;
}
.h1-shrink {
  display: none;
  transition: all .5s;
}
nav {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 1rem 0rem 1rem;
  height: 10vh;
  align-items: center;
  position: fixed;
  z-index: 999;
  transition: all .5s;
  pre{
    font-family: 'lovecraft', 'Poppins', sans-serif;
    font-weight: 400;
    transition: all .5s;
    font-size: 55px;
  }
  span{
    display: none;
  }
}
  ul{
    display: none;
  }
  nav{
    span{
      display: block;
      cursor: pointer;
      font-size: xx-large;
      z-index: 21;
      color: rgb(88, 78, 78);
    }
  }
  .menu{
    top: 0;
    position: fixed;
    left: 0;
    width: 100vw;
    // background-image: url("../../../../../assets/fondo.jpg");
    height: 100vh;
    clip-path: circle(150% at 100% 100%) ;
    transition: clip-path 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: clip-path 1s;
    z-index: 20;
    span{
      //text-decoration: underline;
      color: #1B264F;
      text-shadow: 2px 2px #ffffff;
    }
  }
  .menu2{
    top: 0;
    position: fixed;
    left: 0;
    width: 100vw;
    // background-image: url("../../../../../assets/fondo.jpg");
    height: 100vh;
    clip-path: circle(0% at 100% 100%) ;
    transition: clip-path 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: clip-path 1s;
    z-index: 20;
  }

  // MAza need your help
  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #1B264F;
  }

  .hover-underline-animation:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1B264F;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

// @font-face {
//   font-family: 'lovecraft';
//   font-style: normal;
//   font-weight: normal;
// //   src: local('lovecraft'), url('../../../../../assets/lovecraft.otf') format('truetype');
// }
@media (max-width: 480px) {
  nav {
    pre {
      font-size: 45px;
    }
  }
}

@media (max-width: 360px) {
 nav {
   pre {
     font-size: 35px;
   }
 }
}

</style>
