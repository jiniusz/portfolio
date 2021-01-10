import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
          edge: 'left',
          draggable: true,
          inDuration: 250,
          outDuration: 200,
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null,
          preventScrolling: true
  });
});

createApp(App).use(router).mount('#app')
