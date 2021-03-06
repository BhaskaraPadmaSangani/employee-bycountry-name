import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
