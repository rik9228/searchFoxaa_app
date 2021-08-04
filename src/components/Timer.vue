<template>
  <div class="col-3 mx-auto white shadow rounded-lg">
    <p class="text-h4 font-weight-medium mb-0"><font-awesome-icon icon="clock" size="xs" />：{{ time.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "Timer",
  // data() {
  //   return {
  //     active: false, // 実行状態
  //     start: 0, // startを押した時刻
  //     timer: 0, // setInterval()の格納用
  //     interval: 0, // 計測時間
  //     accumTime: 0, // 累積時間(stopしたとき用)
  //   };
  // },
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
