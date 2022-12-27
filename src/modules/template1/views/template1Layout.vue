<template>
    <navbar :alias="dataTkn.alias"/>
  <h1>{{ props.id ? props.id : 'hola' }}</h1>
  <h1>{{ props.qr ? props.qr : 'hola' }}</h1>
  <h2>{{ dataTkn.alias }}</h2>
</template>

<script>
import {  onMounted } from 'vue'
import {  ref  } from 'vue'
import invitadosApi from '@/api/invitadosApi' 
import jwtDecode, {JwtPayload} from "jwt-decode";
import navbar from '../components/navbar.vue';

export default {
    props:{
        id: {
            type: String,
            required: false
        },
        qr: {
            type: String,
            required: false
        },
    },
    components:{
        navbar
    },
    setup(props) {
        let token = ref(props.id)
        let dataTkn = ref({})
        let mostrarModal = ref(0)
 
        onMounted(async() => {
            const {data} = await invitadosApi.get('/getByIdAndIdProyecto', {headers: {token: token.value}})      
            dataTkn.value = jwtDecode(data.data)
            console.log('data', dataTkn.value);
            if (props.qr) mostrarModal.value = 1
        })
        console.log('a');
        // const mostrarModal = (valor) => {

        // }
        return{
            props,
            dataTkn,
            token
        }
    }

}
</script>

<style>

</style>