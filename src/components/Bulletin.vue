<template>
  <div class="heading">
    <h1>Headlines</h1>
  </div>
  <div class="bulletin" v-for="bulletin in bulletins" :key="bulletin">
    <h2>{{ bulletin.title }}</h2>
    <p>{{ bulletin.subtitle }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const bulletins = ref([
  {
    id: 0,
    title: "This Is a Website",
    subtitle: "This is where information would go.",
  },
  {
    id: 1,
    title: "Hey look, it's a topic!",
    subtitle: "Stuff would go here",
  },
  {
    id: 2,
    title: "You'd Think stuff would be here.",
    subtitle: "But there is nothing.",
  },
]);
</script>

<style scoped>
.bulletin {
  background-color: orangered;
  border: ridge 8px;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  margin: 15px;
}
.bulletin:hover {
  border: ridge 10px;
  border-color: rgb(206, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
}
.bulletin h2 {
  padding-left: 25px;
  text-align: left;
}

.bulletin p {
  background-color: #49f5ff;
  padding-left: 25px;
  text-align: left;
}
.heading {
  text-align: left;
  margin-left: 20px;
  color:#49f5ff

}
</style>
