const state = {
  resultHistories: [],
};
const getters = {
  resultHistories(state) {
    return state.resultHistories;
  },
};
const mutations = {
  setResultHistory(state, payload) {
    if (state.resultHistories.length === 5) {
      state.resultHistories.shift();
    }
    state.resultHistories.push(payload);
    localStorage.setItem("result", JSON.stringify(state.resultHistories));
  },
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
