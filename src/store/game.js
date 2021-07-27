import axios from "axios";
import _ from "lodash";

const state = {
  imageInfos: [],
  showFlag: false,
  loading: false,
  gotDataCount: 0,
  difficaltyNumber: {
    easy: 10,
    normal: 30,
    hard: 50,
  },
  diffiicalty: 0,
};
const getters = {
  difficalty(state) {
    return state.difficalty;
  },
  imageInfos(state) {
    return state.imageInfos;
  },
  showFlag(state) {
    return state.showFlag;
  },
  loading(state) {
    return state.loading;
  },
  gotDataCount(state) {
    return state.gotDataCount;
  },
};
const mutations = {
  updateDifficalty(state, val) {
    state.difficalty = val;
  },
  updateImagesInfo(state, newObj) {
    state.imageInfos.push(newObj);
  },
  updateGotDataCount(state) {
    state.getDataCount = state.imageInfos.length;
  },
  updateGotDataCountByFox(state) {
    state.getDataCount = state.getDataCount + 1;
  },
  finishFetchData(state) {
    state.showFlag = true;
    state.loading = true;
  },
};
const actions = {
  async fetchImages({ commit, state }) {
    for (let i = 0; i < state.difficalty; i++) {
      const url = "https://dog.ceo/api/breeds/image/random";
      const result = await axios.get(url);
      commit("updateGotDataCount");
      commit("updateImagesInfo", {
        src: result.data.message,
        category: "dog",
        id: i,
      });
    }

    const url = "https://randomfox.ca/floof/";
    const result = await axios.get(url);
    state.imageInfos.push({
      src: result.data.image,
      category: "fox",
      id: state.imageInfos.length + 1,
    });

    commit("updateGotDataCountByFox");

    state.imageInfos = _.shuffle(state.imageInfos);

    commit("finishFetchData");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
