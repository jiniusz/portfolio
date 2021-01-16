<template>
<footer class="page-footer white">
    <div class="container">
        <a class="right fab fa-medium" href="https://medium.com/@jiniusz" rel="noopener noreferrer" target="_blank"></a>
        <a class="right fab fa-github" href="https://github.com/jiniusz" rel="noopener noreferrer" target="_blank"></a>
        <a class="right fab fa-facebook" href="https://fb.com/jiniusz" rel="noopener noreferrer" target="_blank"></a>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
      return{

      }
    }
}
</script>

<style scoped>
.page-footer {
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  position: relative;
}
.page-footer .container a{
  margin-right: 10px;
  color: #757575;
}
</style>