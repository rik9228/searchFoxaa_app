<template>
  <div class="dogList">
    <div v-for="(image, imageIdx) in imagesInfo" :key="imageIdx">
      <img class="image" :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DogList",
  props: {
    imagesInfo: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style>
.dogList {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.image {
  max-width: 250px;
  height: 250px;
  width: 100%;
  object-fit: cover;
}
</style>
