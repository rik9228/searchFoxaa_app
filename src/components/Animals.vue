<template>
  <div>
    <v-btn @click="shuffleAnimals" class="success mt-5">シャッフル</v-btn>
    <transition-group tag="div" class="dogList mt-5">
      <div class="images" v-for="animal in animals" :key="animal.id">
        <animal @click="onSelected" :animal="animal"></animal>
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
    animals: {
      type: Array,
      require: true,
    },
  },
  methods: {
    shuffleAnimals() {
      this.$emit("shuffleAnimals");
    },
    onSelected(animal) {
      console.log(animal);
      this.$emit("selected", animal);
    },
  },
};
</script>
