<template>
  <div>
    <button @click="shuffleInfo">並べ替え</button>
    <transition-group tag="div" class="dogList">
      <div class="images" v-for="image in imageInfos" :key="image.id">
        <img v-if="image.category === 'dog'" class="image" :src="image.src" @click="judgeImage($event)" data-category="dog" />
        <img v-else class="image" :src="image.src" @click="judgeImage($event)" data-category="fox" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "DogList",
  props: {
    imageInfos: {
      type: Array,
      require: true,
    },
  },
  methods: {
    judgeImage(event) {
      if (event.target.dataset.category === "dog") {
        event.target.parentNode.classList.add("isFalse");
      }
      if (event.target.dataset.category === "fox") {
        event.target.parentNode.classList.add("isActive");
      }
    },
    shuffleInfo() {
      this.$emit("shuffleInfo", this.imageInfos);
    },
  },
};
</script>
