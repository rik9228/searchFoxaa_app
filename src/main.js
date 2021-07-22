import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import css from "./assets/css/style.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  css,
  render: (h) => h(App),
}).$mount("#app");
