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

      <div class="pa-5 text-h5 font-weight-bold">
        <!-- accTime View -->
        <animated-number :value="accTime" :format-value="formatToAccTime" :duration="2000"></animated-number>
      </div>

      <div class="pa-5 text-h5 font-weight-bold">
        <!-- wrongCount View -->
        <animated-number :value="wrongCount" :format-value="formatToWrongCount" :duration="2000" :delay="2200"></animated-number>
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
import AnimatedNumber from "animated-number-vue";
// import { mapGetters } from "vuex";
export default {
  name: "result",
  components: {
    AnimatedNumber,
  },
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
  methods: {
    formatToAccTime: function(value) {
      return `かかった時間： ${value.toFixed(2)}秒`;
    },
    formatToWrongCount: function(value) {
      return `間違えた数： ${value.toFixed(0)}`;
    },
  },
};
</script>

<style></style>
