<template>
  <div class="about">
    <div class="loading-wrap" v-if="!loading">
      <div class="loader"></div>
      <p>狐とわんちゃんを{{ getDataCount }}匹数呼び出しています...</p>
    </div>
    <dogList :imagesInfo="imagesInfo" v-if="showFlag" />
  </div>
</template>

<script>
import axios from "axios";
import dogList from "@/components/DogList.vue";
export default {
  name: "About",
  components: {
    dogList,
  },
  data() {
    return {
      imagesInfo: [],
      showFlag: false,
      loading: false,
      getDataCount: 0,
    };
  },
  async created() {
    for (let i = 0; i < 20; i++) {
      const url = "https://dog.ceo/api/breeds/image/random";
      const result = await axios.get(url);
      this.getDataCount = this.imagesInfo.length;
      this.imagesInfo.push(result.data.message);
    }

    const url = "https://randomfox.ca/floof/";
    const result = await axios.get(url);
    this.imagesInfo.push(result.data.image);
    this.getDataCount = this.getDataCount + 1;

    this.imagesInfo = this.shuffle(this.imagesInfo);
    this.showFlag = true;
    this.loading = true;
  },
  watch: {
    getDataCount: function(newVal) {
      console.log(newVal);
    },
  },
  methods: {
    shuffle([...array]) {
      for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>

<style>
.loader,
.loader:after {
  border-radius: 50%;
  width: 6em;
  height: 6em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(94, 94, 94, 0.2);
  border-right: 1.1em solid rgba(94, 94, 94, 0.2);
  border-bottom: 1.1em solid rgba(94, 94, 94, 0.2);
  border-left: 1.1em solid #5e5e5e;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}

@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
