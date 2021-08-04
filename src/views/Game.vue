<template>
  <div class="container">
    <div class="loading-wrap" v-if="!loading">
      <div class="loader"></div>
      <p>狐とわんちゃんを{{ gotDataCount }}匹数呼び出しています...</p>
    </div>

    <div v-if="showGameFlag" :class="{ 'difficalty-easy': diffcaltyEasy, 'difficalty-normal': diffcaltyNormal, 'difficalty-hard': diffcaltyHard }">
      <div class="container">
        <animals @judgeImage="animalSelected" :targetFoxCount="selectedDifficalty.fox" :imageInfos="imageInfos" @shuffleInfo="shuffleInfo" />
        <timer @timerTick="timer" :timerActive="!isFullSelect" class="mt-8" />
        <v-dialog v-model="showResultFlag">
          <result :wrongCount="wrongCount" :foundFoxes="foundFoxes" :accTime="accTime"></result>
        </v-dialog>
      </div>
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
    selectedDifficalty: {
      Type: Object,
      require: true,
    },
  },
  data() {
    return {
      loading: false,
      showGameFlag: false,
      gotDataCount: 0,
      imageInfos: [],
      foundFoxes: [],
      wrongCount: 0,
      accTime: 0,
      showResultFlag: false,
    };
  },
  async created() {
    const url = `https://dog.ceo/api/breeds/image/random/${this.selectedDifficalty.animals}`;
    const animals = await axios.get(url);
    animals.data.message.forEach((animal, index) => {
      this.imageInfos.push({
        src: animal,
        category: "dog",
        id: index,
      });
    });
    this.gotDataCount = this.imageInfos.length;

    for (let i = 0; i < this.selectedDifficalty.fox; i++) {
      const url = "https://randomfox.ca/floof/";
      const result = await axios.get(url);
      this.imageInfos.push({
        src: result.data.image,
        category: "fox",
        id: this.imageInfos.length + 1,
      });
      this.gotDataCount++;
    }

    this.imageInfos = _.shuffle(this.imageInfos);

    this.loading = true;
    this.showGameFlag = true;
  },

  computed: {
    // ...mapGetters({
    //   accumTime: "game/accumTime",
    //   wrongCount: "game/wrongCount",
    // }),
    isFullSelect() {
      // 規定のものから算出するもの
      return this.foundFoxes.length === this.selectedDifficalty.fox;
    },

    diffcaltyEasy() {
      return this.selectedDifficalty.key === "easy";
    },

    diffcaltyNormal() {
      return this.selectedDifficalty.key === "normal";
    },

    diffcaltyHard() {
      return this.selectedDifficalty.key === "hard";
    },
  },
  methods: {
    shuffleInfo() {
      this.imageInfos = _.shuffle(this.imageInfos);
    },
    setResultHistory() {
      const resultInfo = {
        wrongCount: this.wrongCount,
        accumTime: this.accTime.toFixed(2),
        selectedDifficalty: this.selectedDifficalty.name,
      };
      this.$store.commit("game/setResultHistory", resultInfo);
    },

    animalSelected(animal) {
      this.updateResult(animal, this.isFox(animal.category));

      if (this.isFullSelect) {
        this.showResult();
        this.setResultHistory();
      }
    },

    updateResult(animal, result) {
      if (result) this.foundFoxes.push(animal.imgValue);
      if (!result) this.wrongCount++;
    },
    isFox(animalCategory) {
      return animalCategory === "fox";
    },
    showResult() {
      this.showResultFlag = !this.showResultFlag;
    },
    timer(val) {
      this.accTime = val;
    },
  },
};
</script>
