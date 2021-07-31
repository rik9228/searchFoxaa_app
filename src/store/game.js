// import axios from "axios";
// import _ from "lodash";

const state = {
  accum: 0,
};
const getters = {
  accum(state) {
    return state.accum;
  },
};
const mutations = {

};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
