import Vue from 'vue';
import AppComponent from './App/index.vue';
import 'materialize-css';
import 'materialize-css/dist/css/materialize_custom.css';
import 'material-design-icons/iconfont/material-icons.css';
import './scripts/initialize';

projectList = [];

let vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: (h) => h('app'),
});
