import Vue from "vue";
import Vuex from "vuex";
import game from "@/store/game.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    game,
  },
});

export default store;
