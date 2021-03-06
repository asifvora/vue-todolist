import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuelidate from "vuelidate";
import './pipes/Filter';
import './directives/directive';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
