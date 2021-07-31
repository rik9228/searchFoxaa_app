<template>
  <div>
    <v-btn @click="shuffleInfo" class="success">並べ替え</v-btn>
    <transition-group tag="div" class="dogList">
      <div class="images" v-for="image in imageInfos" :key="image.id">
        <animal @judgeImage="judgeImage" :targetFoxCount="targetFoxCount" :image="image"></animal>
      </div>
    </transition-group>
  </div>
</template>

<script>
import animal from "@/components/Animal.vue";
export default {
  name: "Animals",
  components: {
    animal,
  },
  props: {
    imageInfos: {
      type: Array,
      require: true,
    },
    targetFoxCount: {
      type: Number,
      require: true,
    },
  },
  methods: {
    shuffleInfo() {
      this.$emit("shuffleInfo", this.imageInfos);
    },
    judgeImage(...targetImageValues) {
      console.log(...targetImageValues);
      this.$emit("judgeImage", ...targetImageValues);
    },
  },
};
</script>
