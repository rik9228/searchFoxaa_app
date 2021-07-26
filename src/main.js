import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import css from "./assets/css/style.css";
import store from "@/store.js";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  css,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
