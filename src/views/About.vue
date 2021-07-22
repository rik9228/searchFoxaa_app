<template>
  <div class="about">
    <div class="loading-wrap" v-if="!loading">
      <div class="loader"></div>
      <p>狐とわんちゃんを{{ getDataCount }}匹数呼び出しています...</p>
    </div>

    <div v-if="showFlag">
      <dogList :imageInfos="imageInfos" @shuffleInfo="shuffleInfo" />
    </div>
    {{ this.num }}
  </div>
</template>

<script>
import axios from "axios";
import dogList from "@/components/DogList.vue";
import _ from "lodash";
export default {
  name: "About",
  components: {
    dogList,
  },
  props: {
    num: {
      Type: Number,
      require: true,
    },
  },
  data() {
    return {
      imageInfos: [],
      showFlag: false,
      loading: false,
      getDataCount: 0,
    };
  },
  async created() {
    for (let i = 0; i < this.num; i++) {
      const url = "https://dog.ceo/api/breeds/image/random";
      const result = await axios.get(url);
      this.getDataCount = this.imageInfos.length;
      this.imageInfos.push({
        src: result.data.message,
        category: "dog",
        id: i,
      });
    }

    const url = "https://randomfox.ca/floof/";
    const result = await axios.get(url);
    this.imageInfos.push({
      src: result.data.image,
      category: "fox",
      id: this.imageInfos.length + 1,
    });
    this.getDataCount = this.getDataCount + 1;

    this.imageInfos = _.shuffle(this.imageInfos);
    this.showFlag = true;
    this.loading = true;
  },
  methods: {
    // shuffle([...array]) {
    //   for (let i = array.length - 1; i >= 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    //   return array;
    // },
    shuffleInfo() {
      this.imageInfos = _.shuffle(this.imageInfos);
    },
  },
};
</script>
