<template>
  <div class="icons" v-for="icon in icons" :key="icon">
    <img :src="`/assets/icons/${icon.img}`" class="iconimg" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref([
  {
    id: 1,
    img: "icon1.png",
  },
  {
    id: 2,
    img: "icon1.png",
  },
  {
    id: 3,
    img: "icon1.png",
  },
]);


</script>

<style scoped>

.icons{
    
}

.iconimg:hover {
    width: 110%;
}

</style>