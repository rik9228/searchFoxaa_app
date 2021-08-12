<template>
  <div class="container">
    <div class="loading-wrap" v-if="!loading">
      <div class="loader"></div>
      <p>狐とわんちゃんを{{ gotDataCount }}匹数呼び出しています...</p>
    </div>

    <div
      v-if="showGameFlag"
      :class="{
        'difficalty-easy': diffcaltyEasy,
        'difficalty-normal': diffcaltyNormal,
        'difficalty-hard': diffcaltyHard,
      }"
    >
      <div class="container mt-5 pa-0">
        <timer @timerTick="timer" :timerActive="!isFullSelect" class="mt-8" />
        <animalList
          @selected="onAnimalSelected"
          :targetFoxCount="selectedDifficalty.fox"
          :animals="animals"
          @shuffleInfo="shuffleInfo"
        />
        <v-dialog v-model="showResultFlag" persistent>
          <result
            :wrongCount="wrongCount"
            :foundFoxes="foundFoxes"
            :accTime="accTime"
          ></result>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import axios from "axios";
import animalList from "@/components/Animals.vue";
import result from "@/components/Result.vue";
import timer from "@/components/Timer.vue";
import _ from "lodash";

export default {
  name: "Game",
  components: {
    animalList,
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
      animals: [],
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
      this.animals.push({
        src: animal,
        category: "dog",
        id: index,
      });
    });
    this.gotDataCount = this.animals.length;

    for (let i = 0; i < this.selectedDifficalty.fox; i++) {
      const url = "https://randomfox.ca/floof/";
      const result = await axios.get(url);
      this.animals.push({
        src: result.data.image,
        category: "fox",
        id: this.animals.length + 1,
      });
      this.gotDataCount++;
    }

    this.animals = _.shuffle(this.animals);

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
      this.animals = _.shuffle(this.animals);
    },
    setResultHistory() {
      const resultInfo = {
        wrongCount: this.wrongCount,
        accumTime: this.accTime.toFixed(2),
        selectedDifficalty: this.selectedDifficalty.name,
      };
      this.$store.dispatch("game/saveResultHistory", resultInfo);
    },

    onAnimalSelected(animal) {
      console.table("animal=>", animal);
      this.updateResult(animal, this.isFox(animal.category));

      if (this.isFullSelect) {
        this.showResult();
        this.setResultHistory();
      }
    },

    updateResult(animal, result) {
      if (result) this.foundFoxes.push(animal.src);
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
