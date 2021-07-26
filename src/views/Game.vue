<template>
  <div class="">
    <div class="loading-wrap" v-if="!loading">
      <div class="loader"></div>
      <p>狐とわんちゃんを{{ gotDataCount }}匹数呼び出しています...</p>
    </div>

    <div v-if="showFlag">
      <dogList :imageInfos="imageInfos" @shuffleInfo="shuffleInfo" />
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import axios from "axios";
import dogList from "@/components/DogList.vue";
import _ from "lodash";
export default {
  name: "Game",
  components: {
    dogList,
  },
  props: {
    difficaltyNum: {
      Type: Number,
      require: true,
    },
    facts: {
      Type: Array,
      require: true,
    },
  },
  data() {
    return {
      loading: false,
      showFlag: false,
      gotDataCount: 0,
      imageInfos: [],
    };
  },
  async created() {
    // this.$store.dispatch("game/fetchImages");
    console.log(this.facts);

    for (let i = 0; i < this.difficaltyNum; i++) {
      const url = "https://dog.ceo/api/breeds/image/random";
      const result = await axios.get(url);
      this.imageInfos.push({
        src: result.data.message,
        category: "dog",
        id: i,
      });
      // console.log(this.imagesInfo);
      this.gotDataCount = this.imageInfos.length;
    }

    const url = "https://randomfox.ca/floof/";
    const result = await axios.get(url);
    this.imageInfos.push({
      src: result.data.image,
      category: "fox",
      id: this.imageInfos.length + 1,
    });

    this.gotDataCount = this.gotDataCount + 1;
    this.imageInfos = _.shuffle(this.imageInfos);

    this.loading = true;
    this.showFlag = true;

    // this.shuffleInfoSec();
  },
  // computed: {
  //   ...mapGetters({
  //     difficalty: "game/difficalty",
  //     imageInfos: "game/imageInfos",
  //     gotDataCount: "game/gotDataCount",
  //     loading: "game/loading",
  //     showFlag: "game/showFlag",
  //   }),
  // },
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

    shuffleInfoSec() {
      setTimeout(() => {
        this.shuffleInfo();
      }, 2500);
      this.shuffleInfoSec();
    },
  },
};
</script>
