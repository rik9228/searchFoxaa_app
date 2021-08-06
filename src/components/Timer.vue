<template>
  <div class="col-3 mx-auto white shadow rounded-lg">
    <p class="text-h4 font-weight-medium mb-0"><font-awesome-icon icon="clock" size="xs" />：{{ time.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      time: 0,
      interValId: null,
    };
  },
  props: {
    timerActive: { type: Boolean, default: true },
    interval: { type: Number, default: 10 },
  },
  //   watch: {
  // timeractive() {
  //  if false {
  // clearInterval(this.interValId);
  //  }
  // }
  created() {
    this.interValId = setInterval(() => {
      if (this.timerActive) {
        this.time += 0.01;
        this.$emit("timerTick", this.time);
      }
    }, this.interval);
  },
  beforeDestroy() {
    // 画面が変わったときコンポーネントの状態を破棄される
    clearInterval(this.interValId);
  },
};
</script>

<style></style>
