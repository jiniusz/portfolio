<template>
  <div class="work">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Work',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.work {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
