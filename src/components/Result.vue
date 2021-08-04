<template>
  <div class="text-center">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2 justify-center">
        狐を全て探し出しました！
      </v-card-title>

      <v-card-text class="pt-5 pb-2 text-h6">見つけた狐</v-card-text>

      <div class="result-dialog__wrapper pt-4 pb-8">
        <figure v-for="foundFox in foundFoxes" :key="foundFox.id">
          <img :src="foundFox" class="result-dialog__image" />
        </figure>
      </div>

      <div class="pa-5">
        <v-card-text class="pa-0 text-h6">間違えた数：{{ wrongCount }}</v-card-text>
        <v-card-text class="pa-0 text-h6">かかった時間：{{ accTime.toFixed(2) }}秒</v-card-text>
      </div>

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
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "result",
  props: {
    foundFoxes: {
      type: Array,
      require: true,
    },
    accTime: {
      type: Number,
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
      },
    };
  },
  computed: {
    // ...mapGetters({
    //   wrongCount: "game/wrongCount",
    //   accumTime: "game/accumTime",
    // }),
  },
};
</script>

<style></style>
