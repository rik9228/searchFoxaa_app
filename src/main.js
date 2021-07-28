import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import css from "./assets/css/style.css";
import store from "@/store.js";
import vuetify from "./plugins/vuetify";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faClock);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  css,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
