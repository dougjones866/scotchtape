<template>
  <div id="container">
    <div class="contentbox">
        <slot></slot>
        <div class="headerbar">
            <div class="htitle"><h3>Title Goes Here</h3></div>
            <div @click="isActive = !isActive" class="xbutton"><h1>X</h1></div>
            <bulletin />
      </div>
     
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);
</script>

<style scoped>

.headerbar {
  background-color: rgb(120, 68, 242);
  background-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  border-bottom: ridge 12px;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  height: 40px;
  position: relative;
  text-align: center;
}

.xbutton {
  display: inline-block;
  line-height: 0;
  background: orangered;
  right: 0;
  top: 0;
  width: 50px;
  border: ridge 10px;
  position: absolute;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
}
.xbutton:hover {
  border: pink ridge 12px;
}

.htitle {
  display: inline-block;
  line-height: 0;
}

.contentbox {
    overflow: hidden;
    box-shadow: 10px 5px black;
  width: 1000px;
  height: 600px;
  border: ridge 8px;
  border-radius: 2%;
  border-color: rgb(120, 68, 242);
  border-color: linear-gradient(
    90deg,
    rgba(120, 68, 242, 1) 51%,
    rgba(206, 149, 241, 1) 100%
  );
  position: fixed;
  bottom: 100px;
  right: 25px;
  background-color: #101373; /* light blue background color */
  background-image: linear-gradient(#3137f5 0.1rem, transparent 0.1rem),
    linear-gradient(90deg, #3137f5 0.1rem, transparent 0.1rem);
  background-size: 3rem 3rem; /* size of the grid squares */
  animation: animateBackground 40s linear infinite;
}
@keyframes animateBackground {
  from {
    background-position: 0 0; /* start at top-left corner */
  }
  to {
    background-position: 100% 100%; /* end at bottom-right corner */
  }
}

@media only screen and (max-width: 500px) {
  .contentbox {
    width: 50vh;
    height: 50vh;
    left: 0;
    overflow: scroll;
  }
}
</style>
