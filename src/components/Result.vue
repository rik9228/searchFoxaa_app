<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 justify-center">
          狐を全て探し出しました！
        </v-card-title>

        <v-card-text class="pt-5 pb-2">見つけた狐</v-card-text>

        <div class="result-dialog__wrapper pt-4 pb-8">
          <figure v-for="foundFox in foundFoxes" :key="foundFox.id">
            <img :src="foundFox" class="result-dialog__image" />
          </figure>
        </div>

        <v-card-text class="pt-5 pb-2">間違えた数：{{ wrongCount }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            <router-link to="/">
              もう一度トライする
            </router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "result",
  props: {
    foundFoxes: {
      type: Array,
      require: true,
    },
    wrongCount: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      dialog: false,
      resultData: {
        かかった時間: 0,
        wrongCount: 0,
      },
    };
  },
  methods: {
    showResult() {
      this.dialog = true;
      this.resultData.wrongCount = this.wrongCount;
      // localStorage.setItem("結果", JSON.stringify(this.resultData));
    },
    showResultHandler() {
      this.showResult();
      this.$emit("showResultHandler");
    },
  },
};
</script>

<style></style>
