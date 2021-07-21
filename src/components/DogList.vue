<template>
  <div class="dogList">
    <div class="images" v-for="(image, imageIdx) in imageInfos" :key="imageIdx">
      <img v-if="image.category === 'dog'" class="image" :src="image.src" @click="judgeImage($event)" data-category="dog" />
      <img v-else class="image" :src="image.src" @click="judgeImage($event)" data-category="fox" />
    </div>
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
  },
};
</script>

<style>
.dogList {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.image {
  height: 250px;
  width: 100%;
  object-fit: cover;
  display: block;
}

.images {
  position: relative;
}

.isFalse {
  position: relative;
}

.isFalse::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
}

.isActive {
  position: relative;
}

.isActive::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.6);
}
</style>
