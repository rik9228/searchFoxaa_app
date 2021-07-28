<template>
  <div class="container">
    <div class="loading-wrap" v-if="!loading">
      <div class="loader"></div>
      <p>狐とわんちゃんを{{ gotDataCount }}匹数呼び出しています...</p>
      <ul>
        <!-- <li v-for="(fact, factIdx) in facts" :key="factIdx">{{ facts[factIdx].description }}</li> -->
        <!-- <li>{{ displayFactDescription }}</li> -->
      </ul>
    </div>

    <div v-if="showFlag">
      <animals @judgeImage="judgeImage" :targetFoxCount="difficaltyInfo.fox" :imageInfos="imageInfos" @shuffleInfo="shuffleInfo" />
      <timer @stopTimerHandler="stopTimer" ref="timer" class="mt-8" />
      <result @showResultHandler="showResult" :foundFoxes="foundFoxes" ref="result"></result>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import axios from "axios";
import animals from "@/components/Animals.vue";
import result from "@/components/Result.vue";
import timer from "@/components/Timer.vue";
import _ from "lodash";

export default {
  name: "Game",
  components: {
    animals,
    timer,
    result,
  },
  props: {
    difficaltyInfo: {
      Type: Object,
      require: true,
    },
    facts: {
      Type: Object,
      require: true,
    },
  },
  data() {
    return {
      loading: false,
      showFlag: false,
      gotDataCount: 0,
      imageInfos: [],
      foundFoxes: [],
    };
  },
  async created() {
    // this.$store.dispatch("game/fetchImages");
    const url = `https://dog.ceo/api/breeds/image/random/${this.difficaltyInfo.animals}`;
    const animals = await axios.get(url);
    animals.data.message.forEach((animal, index) => {
      this.imageInfos.push({
        src: animal,
        category: "dog",
        id: index,
      });
    });
    this.gotDataCount = this.imageInfos.length;

    for (let i = 0; i < this.difficaltyInfo.fox; i++) {
      const url = "https://randomfox.ca/floof/";
      const result = await axios.get(url);
      this.imageInfos.push({
        src: result.data.image,
        category: "fox",
        id: this.imageInfos.length + 1,
      });
    }

    this.gotDataCount = this.gotDataCount + 1;
    this.imageInfos = _.shuffle(this.imageInfos);

    this.loading = true;
    this.showFlag = true;
  },

  computed: {
    // displayFactDescription() {
    //   return setTimeout(() => {
    //     return this.facts[2].description;
    //   }, 3000);
    // },
    // ...mapGetters({
    //   difficalty: "game/difficalty",
    //   imageInfos: "game/imageInfos",
    //   gotDataCount: "game/gotDataCount",
    //   loading: "game/loading",
    //   showFlag: "game/showFlag",
    // }),
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

    judgeImage(...targetImageValues) {
      const [targetImageDatasetValue, targetImageSrcValue] = targetImageValues;
      if (targetImageDatasetValue === "fox") {
        this.foundFoxes.push(targetImageSrcValue);
        console.log("this.foundFoxes.length=>", this.foundFoxes.length);
        console.log("this.targetFoxCount=>", this.difficaltyInfo.fox);
      }
      if (this.foundFoxes.length === this.difficaltyInfo.fox) {
        this.stopTimer();
        this.showResult();
        return;
      }
    },
    stopTimer() {
      this.$refs.timer.stopTimer();
    },
    showResult() {
      this.$refs.result.showResult();
    },
    // shuffleInfoSec() {
    //   setTimeout(() => {
    //     this.shuffleInfo();
    //   }, 2500);
    //   this.shuffleInfoSec();
    // },
  },
};
</script>
