<template>
  <div class="home">
    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/structure/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>
