const state = {
  resultHistories: [],
};
const getters = {
  resultHistories: (state) => state.resultHistories,
  lastFiveResults: (state) => {
    function reverse(arr) {
      if (toString.call(arr) !== '[object Array]') return null;
      if (arr.length === 0) return arr;
      const copy = arr.slice();
      return copy.reverse();
    }
    return reverse(state.resultHistories).slice(0, 5);
  }
};
const mutations = {
  initialize(state) {
    state.resultHistories = [];
  },
  resultHistories(state, result) {
    state.resultHistories = result;
  },
  addResultHistory(state, result) {
    state.resultHistories.push(result);
  },
};
const actions = {
  initialize(context) {
    context.commit('initialize');
  },
  loadResultHistory(context) {
    const result = JSON.parse(localStorage.getItem("result"));
    if (result === null) {
      context.commit('resultHistories', []);
      return;
    }
    context.commit('resultHistories', result);
  },
  saveResultHistory(context, result) {
    context.commit('addResultHistory', result);
    localStorage.setItem("result", JSON.stringify(context.state.resultHistories));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
