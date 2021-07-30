<template>
  <div :key="image.id" :class="{ fox: isFox }" class="image-wrap">
    <img v-if="image.category === 'dog'" class="image" :src="image.src" @click="judgeImage(image.src)" data-category="dog" ref="image" />
    <img v-else class="image" :src="image.src" @click="judgeImage(image.src)" data-category="fox" ref="image" />
  </div>
</template>

<script>
import dogSe from "@/assets/sounds/dog_se.mp3";
import foxSe from "@/assets/sounds/fox_se.mp3";
export default {
  name: "animal",
  props: {
    image: {
      type: Object,
      require: true,
    },
    targetFoxCount: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      filterNum: 8,
      animalImage: null,
      isFox: false,
    };
  },
  mounted() {
    // $refsは仮想DOMが生成されてある必要があるので、必ず「mounted」以降で行う
    this.animalImage = this.$refs.image;
    this.countDownTimer(this.animalImage);
  },
  methods: {
    judgeImage(imgValue) {
      if (this.animalImage.dataset.category === "fox") {
        this.isFox = true;
        this.$playSound(foxSe);
      } else {
        this.$playSound(dogSe);
      }
      this.$emit("judgeImage", this.animalImage.dataset.category, imgValue);
    },
    countDownTimer() {
      if (this.filterNum > 0) {
        setTimeout(() => {
          this.filterNum--;
          this.animalImage.style.filter = `blur(${this.filterNum}px)`;
          this.countDownTimer();
        }, 2500);
      }
    },
  },
};
</script>

<style></style>
