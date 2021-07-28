<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 justify-center">
          狐を全て探し当てました！
        </v-card-title>

        <v-card-text class="pa-0">見つけた狐：</v-card-text>

        <div class="result-dialog__wrapper pt-4 pb-8">
          <figure v-for="foundFox in foundFoxes" :key="foundFox.id">
            <img :src="foundFox" alt="" class="result-dialog__image" />
          </figure>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            トップに戻る
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
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    showResult() {
      this.dialog = true;
    },
    showResultHandler() {
      this.showResult();
      this.$emit("showResultHandler");
    },
  },
};
</script>

<style></style>
