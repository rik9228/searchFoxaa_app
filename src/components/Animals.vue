<template>
  <div>
    <button @click="shuffleInfo">並べ替え</button>
    <transition-group tag="div" class="dogList">
      <div class="images" v-for="image in imageInfos" :key="image.id">
        <animal :image="image"></animal>
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
  },
  methods: {
    shuffleInfo() {
      this.$emit("shuffleInfo", this.imageInfos);
    },
  },
};
</script>
