import Vue from 'vue';
import AppComponent from './App/index.vue';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import 'material-design-icons/iconfont/material-icons.css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

let vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: (h) => h('app'),
});
