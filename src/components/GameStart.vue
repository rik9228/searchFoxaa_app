<template>
  <div class="hello">
    <h1>キツネ探し当てゲーム</h1>
    <img class="mainVisual" alt="Vue logo" src="https://blogimg.goo.ne.jp/user_image/3f/13/fe1f78ded2409e795b25be9d48cc1e0a.png" />
    <h2 class="text-center">動物の中に紛れたキツネを探し当てて下さい。</h2>
    <p class="mt-5">🦊&emsp;難易度を選択する&emsp;🦊</p>
    <ul class="pl-0">
      <li>
        <v-dialog v-model="dialog.easy" width="500" :retain-focus="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark v-bind="attrs" v-on="on">
              草むら
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              難易度：
              <v-rating :value="rating.easy" :readonly="true" :dense="true" background-color="success" color="success" large class="ml-2"></v-rating>
            </v-card-title>

            <v-card-text class="pt-5">
              犬の数：10匹
            </v-card-text>

            <v-card-text class="font-weight-bold">
              見つける狐の数：2匹
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="updateDifficalty(difficaltyInfo.easy)">
                確定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
      <li>
        <v-dialog v-model="dialog.normal" width="500" :retain-focus="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning" dark v-bind="attrs" v-on="on">
              森
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              難易度：
              <v-rating :value="rating.normal" :readonly="true" :dense="true" large background-color="warning" color="warning" class="ml-2"></v-rating>
            </v-card-title>

            <v-card-text class="mt-5">
              犬の数：30匹
            </v-card-text>

            <v-card-text class="font-weight-bold">
              見つける狐の数：2匹
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="updateDifficalty(difficaltyInfo.normal)">
                確定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
      <li>
        <v-dialog v-model="dialog.hard" width="500" :retain-focus="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="purple" dark v-bind="attrs" v-on="on">
              樹海
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              難易度：
              <v-rating :value="rating.hard" :readonly="true" background-color="purple" color="purple" :dense="true" large class="ml-2"></v-rating>
            </v-card-title>

            <v-card-text class="mt-5">
              犬の数：30匹
            </v-card-text>

            <v-card-text class="font-weight-bold">
              見つける狐の数：5匹
            </v-card-text>

            <v-card-text>
              ※数秒ごとに画像がシャッフルされます。
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="updateDifficalty(difficaltyInfo.hard)">
                確定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
    </ul>
    <router-link to="/game" event="" @click.native="Start">
      <v-btn color="primary" class="mt-5">
        狐を探しに行く
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import Router from "@/router/index.js";
import axios from "axios";
// import { mapGetters } from "vuex";
export default {
  name: "GameStart",
  data() {
    return {
      difficaltyInfo: {
        easy: {
          animals: 10,
          fox: 2,
        },
        normal: {
          animals: 30,
          fox: 2,
        },
        hard: {
          animals: 30,
          fox: 5,
        },
      },
      difficalty: 0,
      startGameFlag: false,
      facts: [
        {
          factIdx: 0,
          description: "",
        },
      ],
      dialog: {
        easy: false,
        normal: false,
        hard: false,
      },
      rating: {
        easy: 1,
        normal: 3,
        hard: 5,
      },
    };
  },
  // computed: {
  //   ...mapGetters({
  //     difficalty: "game/difficalty",
  //   }),
  // },
  async created() {
    for (let i = 0; i < 5; i++) {
      const foxFactsUrl = "https://some-random-api.ml/facts/fox";
      const foxFactsResult = await axios.get(foxFactsUrl);
      this.facts.push({
        factIdx: i,
        description: foxFactsResult.data.fact,
      });
    }
  },
  methods: {
    updateDifficalty(difficaltyInfo) {
      // this.$store.commit("game/updateDifficalty", difficaltyInfo);
      if (difficaltyInfo.animals === 10) {
        this.dialog.easy = false;
      }

      if (difficaltyInfo.animals === 30) {
        this.dialog.normal = false;
      }

      if (difficaltyInfo.animals === 50) {
        this.dialog.hard = false;
      }

      this.startGameFlag = true;
      // this.dialog = false;
      return (this.difficalty = difficaltyInfo);
    },
    Start() {
      if (this.startGameFlag === false) {
        alert("難易度を選択してください");
        return;
      }
      Router.push({
        name: "Game",
        params: {
          difficaltyInfo: this.difficalty,
          facts: this.facts,
        },
      });
    },
  },
};
</script>
