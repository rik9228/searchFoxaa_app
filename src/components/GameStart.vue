<template>
  <div class="hello">
    <h2 class="text-center">動物の中に紛れたキツネを探し当てて下さい。</h2>
    <p class="mt-5">難易度を選択する</p>
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
              見つける狐の数：１匹
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="updateDifficalty(difficaltyNumber.easy)">
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
              <v-rating :value="rating.normal" :readonly="true" :dense="true" large class="ml-2"></v-rating>
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
              <v-btn color="primary" text @click="updateDifficalty(difficaltyNumber.normal)">
                確定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
      <li>
        <v-dialog v-model="dialog.hard" width="500" :retain-focus="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" dark v-bind="attrs" v-on="on">
              密林
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              難易度：
              <v-rating :value="rating.hard" :readonly="true" background-color="purple" color="purple" dense="true" large class="ml-2"></v-rating>
            </v-card-title>

            <v-card-text class="mt-5">
              犬の数：50匹
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
              <v-btn color="primary" text @click="updateDifficalty(difficaltyNumber.hard)">
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
  name: "HelloWorld",
  data() {
    return {
      difficaltyNumber: {
        easy: 10,
        normal: 30,
        hard: 50,
      },
      difficalty: 0,
      startGameFlag: false,
      facts: [],
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
      this.facts.push(foxFactsResult.data.fact);
    }
  },
  methods: {
    updateDifficalty(difficaltyValue) {
      // this.$store.commit("game/updateDifficalty", difficaltyValue);
      if (difficaltyValue === 10) {
        this.dialog.easy = false;
      }

      if (difficaltyValue === 30) {
        this.dialog.normal = false;
      }

      if (difficaltyValue === 50) {
        this.dialog.hard = false;
      }

      this.startGameFlag = true;
      // this.dialog = false;
      return (this.difficalty = difficaltyValue);
    },
    Start() {
      if (this.startGameFlag === false) {
        alert("難易度を選択してください");
        return;
      }
      Router.push({
        name: "Game",
        params: {
          difficaltyNum: this.difficalty,
          facts: this.facts,
        },
      });
    },
  },
};
</script>
