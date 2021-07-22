import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imageInfos: [],
    showFlag: false,
    loading: false,
    getDataCount: 0,
    difficaltyNumber: {
      easy: 10,
      normal: 30,
      hard: 50,
    },
    diffiicalty: 0,
  },
  getters: {
    difficalty(state) {
      return state.difficalty;
    },
  },
  mutations: {
    updateDifficalty(state, val) {
      state.difficalty = val;
    },
  },
  actions: {},
});
export default store;
