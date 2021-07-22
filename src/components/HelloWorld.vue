<template>
  <div class="hello">
    <h2>動物の中に紛れたキツネを探し当てて下さい。</h2>
    <p>難易度</p>
    <ul>
      <li><button @click="updateDifficalty(10)">草むら</button></li>
      <li><button @click="updateDifficalty(30)">森</button></li>
      <li><button @click="updateDifficalty(50)">密林</button></li>
    </ul>
    <router-link to="/about/game">狐を探しに行く</router-link>
  </div>
</template>

<script>
// import Router from "@/router/index.js";
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  // data() {
  //   return {
  //     diffcaltyNumber: {
  //       easy: 10,
  //       normal: 30,
  //       hard: 50,
  //     },
  //     difficalty: 0,
  //   };
  // },
  computed: {
    ...mapGetters({
      difficalty: "index/difficalty",
    }),
  },
  methods: {
    updateDifficalty(difficaltyValue) {
      this.$store.commit("updateDifficalty", difficaltyValue);
      // return (this.diffcalty = difficaltyNum);
    },
    // Start() {
    //   Router.push({
    //     name: "About",
    //     params: {
    //       num: this.diffcalty,
    //     },
    //   });
    // },
  },
};
</script>
