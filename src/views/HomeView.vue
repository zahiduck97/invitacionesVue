<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="template1">template1</router-link> |
    <p @click="$router.push({ name: 'idTemplate1', params: { id: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFByb3llY3RvIjoxLCJpZEludml0YWRvIjo1NSwiaWF0IjoxNjY1MTQ3MDgxfQ.azputPTmbOeHrzMb0teErpKNdbJAlyUB0QCxU38HbLI' } })">idtemplate1</p>
    <p @click="$router.push({ name: 'idqrTemplate1', params: { id: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFByb3llY3RvIjoxLCJpZEludml0YWRvIjo5OSwiaWF0IjoxNjcyMTcwNDYzfQ.l2aZ9_tEzpA0oRMg0ZKqPeZ43OKc5ijhAsJ7HSh5IWc', qr: 'qwerty' } })">idqrtemplate1</p>
  </nav>
  <h1>Esta es la pagina  de presentacion con invitacion ejemplo que aun no se hace</h1>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
