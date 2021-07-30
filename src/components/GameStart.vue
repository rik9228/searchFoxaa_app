<template>
  <div class="hello">
    <h1>キツネ探し当てゲーム</h1>
    <img class="mainVisual" alt="Vue logo" src="https://blogimg.goo.ne.jp/user_image/3f/13/fe1f78ded2409e795b25be9d48cc1e0a.png" />
    <h2 class="text-center">動物の中に紛れたキツネを探し当てて下さい。</h2>
    <p class="mt-5">🦊&emsp;難易度を選択する&emsp;🦊</p>
    <p><b>※音声が流れます。</b></p>
    <!-- <v-container> -->
    <div class="col-6 mx-auto">
      <v-row>
        <!-- v-forを使うときにtemplateが有効 -->
        <template v-for="(difficalty, index) in difficalties">
          <v-col :key="index">
            <v-btn @click="difficaltySelect(difficalty.key)" :color="difficalty.color" :width="'100%'" dark>
              {{ difficalty.name }}
            </v-btn>
          </v-col>
        </template>
      </v-row>

      <v-dialog v-model="dialog" width="600px">
        <v-card v-if="isDifficaltySelected" class="pb-5">
          <v-card-title class="text-h5 grey lighten-2 justify-center">
            難易度：
            <v-rating
              :value="selectedDifficalty.rating"
              :readonly="true"
              :dense="true"
              :background-color="selectedDifficalty.color"
              :color="selectedDifficalty.color"
              large
              class="ml-2"
            ></v-rating>
          </v-card-title>

          <v-card-text class="pt-5">犬の数：{{ selectedDifficalty.animals }}匹</v-card-text>

          <v-card-text class="font-weight-bold">見つける狐の数：{{ selectedDifficalty.fox }}匹 </v-card-text>

          <v-card-text v-if="selectedDifficaltyKey === 'hard'" class="font-weight-bold">※数秒ごとに画像がシャッフルされます</v-card-text>

          <router-link to="/game" event="" @click.native="Start">
            <v-btn v-if="isDifficaltySelected" color="primary" class="mt-5">
              狐を探しに行く
            </v-btn>
          </router-link>
        </v-card>
      </v-dialog>
    </div>

    <!-- </v-container> -->
  </div>
</template>

<script>
import Router from "@/router/index.js";
// import axios from "axios";
// import { mapGetters } from "vuex";
export default {
  name: "GameStart",
  data() {
    return {
      difficalties: [
        {
          key: "easy",
          name: "草むら",
          animals: 10,
          fox: 2,
          rating: 1,
          color: "success",
        },
        {
          key: "normal",
          name: "森",
          animals: 30,
          fox: 2,
          rating: 3,
          color: "warning",
        },
        {
          key: "hard",
          name: "樹海",
          animals: 50,
          fox: 5,
          rating: 5,
          color: "purple",
        },
      ],
      selectedDifficaltyKey: "easy",
      dialog: false,
    };
  },

  computed: {
    selectedDifficalty() {
      return this.difficalties.find((difficalty) => difficalty.key === this.selectedDifficaltyKey);
    },
    isDifficaltySelected() {
      return this.selectedDifficaltyKey !== "";
    },
    // ...mapGetters({
    //   difficalty: "game/difficalty",
    // }),
  },
  methods: {
    // v-btnのtoへのバインドも考える
    Start() {
      Router.push({
        name: "Game",
        params: {
          selectedDifficalty: this.selectedDifficalty,
        },
      });
    },
    difficaltySelect(difficaltyKey) {
      this.selectedDifficaltyKey = difficaltyKey;
      this.dialog = !this.dialog;
    },
  },
};
</script>
