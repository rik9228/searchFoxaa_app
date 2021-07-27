<template>
  <div :key="image.id">
    <img v-if="image.category === 'dog'" class="image" :src="image.src" @click="judgeImage($event)" data-category="dog" ref="image" />
    <img v-else class="image" :src="image.src" @click="judgeImage($event)" data-category="fox" ref="image" />
  </div>
</template>

<script>
export default {
  name: "animal",
  props: {
    image: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      filterNum: 12,
      animalImage: null,
    };
  },
  mounted() {
    // $refsは仮想DOMが生成されてある必要があるので、必ず「mounted」以降で行う
    this.animalImage = this.$refs.image;
    this.countDownTimer(this.animalImage);
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
    countDownTimer() {
      if (this.filterNum > 0) {
        setTimeout(() => {
          this.filterNum--;
          this.animalImage.style.filter = `blur(${this.filterNum}px)`;
          this.countDownTimer();
        }, 3000);
      }
    },
  },
};
</script>

<style></style>
