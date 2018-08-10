import Vue from 'vue'
import App from './App.vue'
import filters from './filters'

console.log(filters);
Object.keys(filters).forEach((key)=>{
  Vue.filter(key,filters[key]);
 
})

new Vue({
  el: '#app',
  render: h => h(App)
})
