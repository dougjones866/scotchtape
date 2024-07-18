<template>
  <div>
    <div class="goateyes">
      <img
        src="/assets/images/eyes.png"
        :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
        class="eyes movearea"
      />
    </div>
    <!-- <div class="goats">
      <img src="/assets/images/goat.gif" alt="Thrusting Goat" />
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const x = ref(0);

const onMousemove = (e) => {
  x.value = e.clientX;
};

onMounted(() => {
  window.addEventListener('mousemove', onMousemove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMousemove);
});
</script>

<style scoped>
.goatseyes{
  position: relative;
  z-index: -1;
}
.movearea {
  transition: 0.3s background-color ease;
}
.icons {
  float: left;
  background-color: black;
  margin: 10px;
}
.icon {
  width: 150px;
  height: auto;
}
.goats {
  float: right;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: -1;
}
.goats img {
  max-width: 300px;
  height: auto;
}
.eyes {
  outline: 2px solid black;
  /* outline-offset: -10px; */
  border-width: 15px;
  
  max-width: 750px;
  height: auto;
}
@media only screen and (max-width: 480px) {
  .eyes {
    width: 90%;
  }
  .goats {
  }
  .goats img {
    right: 0;
    bottom: 50px;
    position: fixed;
    max-width: 50%;
  }
}
.movearea {
  transition: 0.3s background-color ease;
}
</style>
