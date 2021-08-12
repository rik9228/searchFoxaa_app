<template>
  <div class="animal-image-wrap" :class="{ fox: isSelected }">
    <img @click="onClick" :src="animal.src" :style="cssVar" />
  </div>
</template>

<script>
import dogSe from "@/assets/sounds/dog_se.mp3";
import foxSe from "@/assets/sounds/fox_se.mp3";
export default {
  name: "animal",
  props: {
    animal: {
      type: Object,
      require: true,
    },
    blurOn: { type: Boolean, default: true },
  },
  data() {
    return {
      blurNum: 8,
      isSelected: false,
    };
  },
  mounted() {
    if (!this.blurOn) return;
    setInterval(() => {
      this.removeBlur();
    }, 2500);
  },
  computed: {
    cssVar() {
      if (this.blurOn) return `--filter-num: ${this.blurNum}px`;
      return "--filter-num: 0px";
    },
  },
  methods: {
    onClick() {
      // const animalCategory = this.animalImage.dataset.category;
      if (this.animal.category === "fox") {
        this.$playSound(foxSe);
        this.isSelected = true;
      }
      if (this.animal.category === "dog") this.$playSound(dogSe);

      this.$emit("click", this.animal);
    },
    removeBlur() {
      if (this.blurNum > 0) {
        this.blurNum--;
      }
    },
  },
};
</script>

<style scoped>
img {
  filter: blur(var(--filter-num));
}
</style>
